# 🎟️ Event Ticket System — Sprint 2 Backlog
### Core Foundations & Atomic Operations

---

> </br>**Repositorio:** `cbtis47--projectcbum`
> </br>**Rama:** `sprint/2-core-foundations`
> </br>**Stack:** Java · Spring Boot · MongoDB · Maven
> </br>**Duración:** 2 semanas
> </br>**Equipo:** Event Ticket System (Parcial 2 - Operaciones Atómicas)

---

## 🎯 Product Goal Reference

Build an online reservation platform for mass ticket sales, capable of processing concurrent transactions with **zero data loss**, guaranteeing **real-time capacity consistency**, and offering advanced financial auditing tools through optimized **NoSQL queries**.

---

## 📋 Table of Contents

* [Sprint Goal](#-sprint-goal)
* [Sprint Parameters & Capacity Plan](#-sprint-parameters--capacity-plan)
* [Asignación de Responsabilidades por Integrante](#-asignación-de-responsabilidades-por-integrante)
* [Selected Epics & User Stories](#-selected-epics--user-stories)
* [Impediments & Dependencies](#-impediments--dependencies)
* [Definition of Done (DoD)](#-definition-of-done-dod)
* [Backlog Summary](#-backlog-summary)

---

## 🎯 Sprint Goal

Al finalizar este sprint, el sistema **gestionará de forma atómica el inventario de boletos** previnieningo la sobreventa bajo cargas concurrentes, permitirá verificar asistentes en **menos de 50 ms** mediante índices únicos y contará con un set de datos de prueba realista de más de 50 documentos.

---

## 📊 Sprint Parameters & Capacity Plan

| Parámetro | Valor |
|-----------|-------|
| Sprint | `sprint-2` |
| Total Puntos | `16 pts` |
| Entregable Final | **RELEASE v2.0** |

</br>

### Planificación de Capacidad del Equipo (Horas Efectivas Semanales)
*Nota: Métrica basada en el tiempo real dedicado al desarrollo dentro de las sesiones de clase de la materia (ajustando arranques de sesión y entregas tempranas) más soporte técnico mínimo autónomo.*

| Integrante | Rol Temático | Horas Efectivas en Laboratorio (Semana) | Horas de Revisión en Casa (Semana) | Total Real Invertido (Semana) |
|------------|--------------|:---------------------------------------:|:----------------------------------:|:----------------------------:|
| **Uriel Lopez Xochiquiquixqui** | Scrum Master & Backend Developer | 6 hrs | 1 hr | **7 hrs / semana** |
| **Diana Hernandez Antonio** | Product Owner & Data Modeler | 6 hrs | 1 hr | **7 hrs / semana** |
| **Uriel Martínez Bian** | The Query Developer | 6 hrs | 1 hr | **7 hrs / semana** |
| **Juan Pablo Dominguez Sarmiento** | Support Engineer & QA Assistant | 5 hrs | 1 hr | **6 hrs / semana** |

---

## 👥 Asignación de Responsabilidades por Integrante

Para cumplir con el desarrollo integral del **Sprint 2 (Operaciones Atómicas y Consistencia)**, las tareas técnicas se dividieron de forma estratégica entre los miembros del equipo:

### 📋 Diana Hernandez Antonio (Product Owner & Data Modeler)
* **Definición de Límites Operativos:** Supervisión de las reglas de negocio críticas asociadas a la capacidad máxima del recinto y las condiciones lógicas para denegar transacciones inválidas.
* **Modelado para Alta Disponibilidad:** Estructuración del campo de inventario numérico para soportar decrementos en tiempo real e integridad del esquema de datos.

### ⚙️ Uriel Lopez Xochiquiquixqui (Scrum Master & Backend Developer)
* **Gestión de Sprints y Bloqueos:** Coordinación de las tareas del equipo para levantar impedimentos críticos como la configuración del *Write-concern* en el clúster.
* **Lógica Concurrente en Servidor:** Programación en Java/Spring Boot para asegurar que las operaciones de modificación de boletos se ejecuten de manera limpia en el backend, evitando la sobreventa.

### 🔍 Uriel Martínez Bian (The Query Developer)
* **Implementación de Consultas Atómicas (`US-ETS-02-01`):** Diseño y prueba del operador `$inc` para actualizar y restar el inventario disponible de asientos de manera segura ante compras masivas simultáneas.
* **Optimización de Lecturas mediante Índices (`US-ETS-02-02`):** Creación e instalación de índices únicos sobre identificadores claves en la base de datos para asegurar respuestas inmediatas (SLA < 50ms) usando búsquedas directas con `findOne()`.

### 🛡️ Juan Pablo Dominguez Sarmiento (Support Engineer & QA Assistant)
* **Generación de Datos de Prueba en Masa (`US-ETS-02-03`):** Desarrollo del archivo de semillas `data/seeds.json`, poblando de manera sintética la base de datos distribuidos con más de 50 documentos con datos sumamente realistas.
* **Pruebas de Carga y Aseguramiento:** Simulación de hilos concurrentes manuales y verificación del formato de respuesta de los datos de salida para asegurar la calidad de la entrega de cara a la *Definition of Done (DoD)*.

---

## 🧱 Selected Epics & User Stories

### Epic 2 — Capacity Management and Logistics

#### `US-ETS-02-01` — Atomic Inventory Control & Overselling Prevention
* **Prioridad:** 🔴 Crítica
* **Puntos:** 8
* **Operador MongoDB:** `$inc`
* **Asignado a:** Uriel Martínez (Query) & Uriel Lopez (Backend)
* **User Story:** Como Organizador del Evento, quiero restar de forma atómica el inventario disponible en cada compra exitosa para respetar el límite de capacidad del recinto y evitar problemas legales por sobreventa.

##### Criterios de Aceptación (Gherkin)
| # | Given (Dado que) | When (Cuando) | Then (Entonces) |
|---|------------------|--------------|-----------------|
| 1 | Un evento tiene un inventario disponible de 10 asientos libres | Un usuario realiza la compra exitosa de un boleto en la aplicación | El sistema ejecuta el operador `$inc` con valor `-1`, reduciendo instantáneamente la capacidad remanente a 9 de forma aislada |
| 2 | El inventario de un boleto o evento llega exactamente a un valor de 0 | Múltiples clientes intentan comprar boletos al mismo milisegundo de manera concurrente | El backend rebota las transacciones y bloquea la creación de nuevos registros para evitar la sobreventa física |
| 3 | Múltiples operaciones `$inc` simultáneas golpean el clúster de base de datos | Se procesa la carga transaccional masiva | MongoDB encola y procesa cada decremento de forma estrictamente atómica, manteniendo el balance de datos exacto y real |

</br>

#### `US-ETS-02-02` — Search & Identity Validation at Gates
* **Prioridad:** 🟠 Alta
* **Puntos:** 5
* **Operador MongoDB:** `findOne()` (SLA < 50ms)
* **Asignado a:** Uriel Martínez (Query) & Diana Hernandez (Modelado/Validación)
* **User Story:** Como Recepcionista del Staff, quiero buscar a un asistente por su ID único en menos de 50 ms para validar su boleto rápidamente en la entrada del evento sin generar filas.

##### Criterios de Aceptación (Gherkin)
| # | Given (Dado que) | When (Cuando) | Then (Entonces) |
|---|------------------|--------------|-----------------|
| 1 | La colección de asistentes e identificadores posee un índice único configurado en el campo `uniqueId` | El recepcionista del staff escanea el código y ejecuta una búsqueda mediante `findOne()` | El servidor procesa la consulta de manera inmediata arrojando un tiempo de respuesta medido inferior a los 50 milisegundos |
| 2 | Se procesa la solicitud de lectura de un código de barras de boleto existente | El clúster de Atlas resuelve el query | El sistema retorna un único objeto JSON plano `{}` que representa al cliente, en lugar de un arreglo estructurado `[]` |
| 3 | Se escanea un identificador de boleto inválido, falso o que no existe en el sistema | El sistema realiza la búsqueda en la colección de la base de datos | El query devuelve un valor nulo de inmediato y la aplicación despliega la alerta de "Boleto No Válido" en el acceso |

---

### Epic 3 — Traceability & Seed Data Quality

#### `US-ETS-02-03` — Synthetic High-Volume Data Seeding
* **Prioridad:** 🟡 Media
* **Puntos:** 3
* **Entregable:** `data/seeds.json`
* **Asignado a:** Juan Pablo Dominguez (Soporte/QA)
* **User Story:** Como Ingeniero de Pruebas (QA), quiero poblar la base de datos con más de 50 documentos JSON realistas para simular condiciones operativas reales y validar las consultas del sistema.

##### Criterios de Aceptación (Gherkin)
| # | Given (Dado que) | When (Cuando) | Then (Entonces) |
|---|------------------|--------------|-----------------|
| 1 | El entorno de pruebas requiere datos estructurados que imiten transacciones reales de la taquilla | El ingeniero de QA desarrolla e inyecta la semilla desde el archivo `data/seeds.json` | Las colecciones de MongoDB Atlas se pueblan con una cantidad de registros superior a los 50 documentos |
| 2 | Se inspeccionan los documentos generados artificialmente en la base de datos | El equipo revisa los campos cargados | Cada registro cuenta con datos coherentes y variados como nombres reales, montos de pago lógicos y marcas de tiempo válidas |
| 3 | El script de carga masiva de semillas es ejecutado en la terminal de comandos | Se procesa la inserción en el clúster de base de datos | El clúster acepta la importación masiva sin romper reglas de validación o lanzar errores por duplicados |

---

## 🚧 Impediments & Dependencies

| # | Impedimento | Impacto | Dueño | Estado |
|---|------------|--------|-------|--------|
| 1 | Índice único en `uniqueId` no creado en Atlas | Pone en riesgo el SLA de 50ms | Uriel Martínez | 🟢 Resuelto |
| 2 | Write-concern no configurado en el clúster | Bloquea pruebas concurrentes de `$inc` | Juan Pablo Dominguez | 🟢 Resuelto |

---

## ✅ Definition of Done (DoD)

- [ ] **[Juan Pablo D.]** Set de datos sintéticos con más de 50 documentos creado y cargado con éxito en el clúster.
- [ ] **[Uriel M.]** Índice en `uniqueId` establecido y queries optimizados con `findOne()` devolviendo objetos puros `{}`.
- [ ] **[Uriel L. / Diana H.]** Lógica de control de inventario con el operador `$inc` validada bajo pruebas concurrentes sin pérdida de datos.

---

## 📈 Backlog Summary

| User Story | Épica | Prioridad | Operador / Recurso | Responsable Principal | Puntos |
|------------|-------|-----------|--------------------|-----------------------|:------:|
| US-ETS-02-01 | Capacity Management | 🔴 Crítica | `$inc` (Atómico) | Uriel Martínez / Uriel Lopez | 8 |
| US-ETS-02-02 | Capacity Management | 🟠 Alta | `findOne()` & Index| Uriel Martínez | 5 |
| US-ETS-02-03 | Traceability & Data | 🟡 Media | `data/seeds.json` | Juan Pablo Dominguez | 3 |
| **TOTAL** | | | | | **16** |

</br>
