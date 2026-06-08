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

Al finalizar este sprint, el sistema **gestionará de forma atómica el inventario de boletos** previniendo la sobreventa bajo cargas concurrentes, permitirá verificar asistentes en **menos de 50 ms** mediante índices únicos y contará con un set de datos de prueba realista de más de 50 documentos.

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

Para cumplir con el desarrollo integral del **Sprint 2 (Operaciones Atómicas y Consistencia)**, las actividades, días de clase y tiempos de desarrollo se dividieron detalladamente entre los miembros del equipo:

### 📋 Diana Hernandez Antonio (Product Owner & Data Modeler)
* **Definición de Límites Operativos de Negocio:** * **Cronograma:** Desarrollado en la **Semana 1 (Lunes de 14:00 a 14:50 en CC2 y Martes de 13:00 a 13:50 en CC3)**.
  * **Descripción:** Dedicó **2 horas efectivas** en laboratorio a documentar las reglas de negocio críticas para la venta masiva de boletos. Estableció los flujos lógicos para denegar transacciones cuando el inventario llega a cero, previniendo penalizaciones legales por sobreventa.
* **Modelado de Datos para Alta Disponibilidad:** * **Cronograma:** Desarrollado en la **Semana 1 (Martes de 13:50 a 14:50 en CC3) y Semana 2 (Martes de 13:00 a 14:50 en CC3)**.
  * **Descripción:** Invirtió **3 horas de clase** reestructurando el esquema documental en Spring Boot. Modificó el campo de inventario numérico para soportar decrementos rápidos y asegurar que no existan conflictos de lectura/escritura concurrentes en la base de datos distribuida.

### ⚙️ Uriel Lopez Xochiquiquixqui (Scrum Master & Backend Developer)
* **Remoción de Bloqueos en Infraestructura:** * **Cronograma:** Desarrollado en la **Semana 1 (Lunes de 14:00 a 14:50 en CC2)**.
  * **Descripción:** Dedicó **1 hora de laboratorio** a coordinar la solución de impedimentos técnicos en el clúster compartida, asegurando que las directivas de seguridad permitieran realizar las pruebas de concurrencia masiva con el backend sin caídas de conexión.
* **Programación Concurrente en Servidor Spring Boot (`US-ETS-02-01`):** * **Cronograma:** Desarrollado entre la **Semana 1 (Jueves de 15:10 a 16:00 en CC2) y Semana 2 (Miércoles de 15:10 a 17:00 en CC3 y Jueves de 18:00 a 19:00 en CC2)**.
  * **Descripción:** Invirtió **4 horas en laboratorio y 2 horas extras en casa**. Programó los controladores y servicios en Java para recibir las peticiones de compra masiva simultáneas. Integró las respuestas de error personalizadas para rebotar transacciones de clientes una vez que el inventario se agota físicamente en el backend.

### 🔍 Uriel Martínez Bian (The Query Developer)
* **Implementación de Consultas Atómicas con el Operador `$inc` (`US-ETS-02-01`):** * **Cronograma:** Desarrollado en la **Semana 1 (Martes de 13:00 a 14:50 en CC3 y Jueves de 13:00 a 14:00 en Aula 13)**.
  * **Descripción:** Invirtió **3 horas efectivas en laboratorio**. Diseñó y testeó el query atómico utilizando el operador numérico `$inc` con valor `-1`. Esto asegura que cada reservación exitosa reste una plaza directamente en el clúster de Atlas de forma aislada y segura, evitando colisiones de datos.
* **Optimización de Lecturas Mediante Índices Únicos (`US-ETS-02-02`):** * **Cronograma:** Desarrollado en la **Semana 2 (Lunes de 14:00 a 14:50 en CC2 y Miércoles de 15:10 a 17:00 en CC3)**.
  * **Descripción:** Dedicó **3 horas de laboratorio**. Creó y desplegó un índice único sobre el campo identificador en Atlas. Estructuró las consultas de acceso mediante el método de lectura rápida `findOne()`, logrando reducir los tiempos de respuesta del servidor (SLA) a un umbral menor a los 50 milisegundos para agilizar las filas de entrada al evento.

### 🛡️ Juan Pablo Dominguez Sarmiento (Support Engineer & QA Assistant)
* **Generación Sintética del Archivo de Semillas JSON (`US-ETS-02-03`):** * **Cronograma:** Desarrollado en la **Semana 1 (Martes de 13:00 a 14:50 en CC3) y Semana 2 (Lunes de 14:00 a 14:50 en CC2)**.
  * **Descripción:** Dedicó **3 horas efectivas**. Construyó manualmente el script y archivo de inicialización masiva ubicado en `data/seeds.json`, estructurando de forma correcta y realista un volumen de datos superior a 50 documentos con nombres, correos y folios válidos para simular un ambiente transaccional real.
* **Simulación de Carga Transaccional Concurrente y Aseguramiento:** * **Cronograma:** Desarrollado en la **Semana 2 (Miércoles de 15:10 a 17:00 en CC3 y Jueves de 18:00 a 19:00 en CC2)**.
  * **Descripción:** Invirtió **3 horas de laboratorio y 2 horas de soporte en casa**. Realizó pruebas de caja negra ejecutando múltiples peticiones de compra simultáneas sobre el operador `$inc` para verificar que el conteo final del inventario fuera exacto y auditó que las respuestas devueltas por `findOne()` mapearan objetos JSON puros `{}` sin errores.

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

* ✔️ **[Juan Pablo D.]** Se creó y cargó con éxito el set de datos sintéticos con más de 50 documentos realistas en el clúster compartido de Atlas.
* ✔️ **[Uriel M.]** Se estableció el índice único sobre el identificador clave y se optimizaron las consultas de lectura con `findOne()`, asegurando la devolución de objetos JSON puros `{}`.
* ✔️ **[Uriel L. / Diana H.]** Se configuró y validó la lógica de control del inventario mediante el operador atómico `$inc`, confirmando la consistencia bajo hilos de ejecución masivos concurrentes.

---

## 📈 Backlog Summary

| User Story | Épica | Prioridad | Operador / Recurso | Responsable Principal | Puntos |
|------------|-------|-----------|--------------------|-----------------------|:------:|
| US-ETS-02-01 | Capacity Management | 🔴 Crítica | `$inc` (Atómico) | Uriel Martínez / Uriel Lopez | 8 |
| US-ETS-02-02 | Capacity Management | 🟠 Alta | `findOne()` & Index| Uriel Martínez | 5 |
| US-ETS-02-03 | Traceability & Data | 🟡 Media | `data/seeds.json` | Juan Pablo Dominguez | 3 |
| **TOTAL** | | | | | **16** |

</br>
