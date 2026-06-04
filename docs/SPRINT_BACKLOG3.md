# 🎟️ Event Ticket System — Sprint 3 Backlog
### Auditing, Reporting & Performance Optimization

---

> </br>**Repositorio:** `cbtis47--projectcbum`
> </br>**Rama:** `sprint/3-analytics-optimization`
> </br>**Stack:** Java · Spring Boot · MongoDB · Maven
> </br>**Duración:** 4 semanas
> </br>**Equipo:** Event Ticket System (Parcial 3 - Release Final)

---

## Product Goal Reference

Build an online reservation platform for mass ticket sales, capable of processing concurrent transactions with **zero data loss**, guaranteeing **real-time capacity consistency**, and offering advanced financial auditing tools through optimized **NoSQL queries**.

---

## Table of Contents

* [Sprint Goal](#sprint-goal)
* [Sprint Parameters & Capacity Plan](#sprint-parameters--capacity-plan)
* [Asignación de Responsabilidades por Integrante](#-asignación-de-responsabilidades-por-integrante)
* [Selected Epics & User Stories](#-selected-epics--user-stories)
* [Impediments & Dependencies](#impediments--dependencies)
* [Definition of Done (DoD)](#definition-of-done-dod)
* [Backlog Summary](#backlog-summary)

---

## Sprint Goal

Al finalizar este sprint, el sistema procesará datos a gran escala mediante pipelines de agregación, **aislará fraudes financieros con lógica booleana avanzada**, inyectará bitácoras de auditoría internas con `$push` y generará reportes analíticos consolidados de rendimiento con `.explain()`.

---

## Sprint Parameters & Capacity Plan

| Parámetro | Valor |
|-----------|-------|
| Sprint | `sprint-3` |
| Total Puntos | **24 pts** |
| Entregable Final | **RELEASE FINAL** |

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

Para cumplir con el desarrollo integral del **Sprint 3 (Release Final)**, las tareas técnicas, de diseño y de gestión se dividieron estratégicamente entre los miembros del equipo de la siguiente manera:

### 📋 Diana Hernandez Antonio (Product Owner & Data Modeler)
* **Dirección y Validación del Proyecto:** Encargada de coordinar los objetivos de cada entrega, explicar la lógica de negocio al equipo ("el qué y el cómo") y realizar la revisión final para asegurar que todo funcionara correctamente según los requisitos.
* **Modelado de Datos:** Supervisión del diseño y estructura de las colecciones de MongoDB, garantizando que el almacenamiento de documentos fuera óptimo para el tercer parcial.

### ⚙️ Uriel Lopez Xochiquiquixqui (Scrum Master & Backend Developer)
* **Gestión del Product Backlog:** Administración del flujo de trabajo, documentación de los criterios de aceptación en formato Gherkin e integración organizativa del sprint.
* **Desarrollo del Servidor (Lógica de Backend):** Programación del código que corre detrás de la página utilizando el stack de Java y Spring Boot para conectar la aplicación web con la base de datos NoSQL.

### 🔍 Uriel Martínez Bian (The Query Developer)
* **Desarrollo de Entregables de Operadores Avanzados:** Creación, testeo y refinamiento de todas las consultas críticas del tercer parcial utilizando operadores relacionales y booleanos (`$in`, `$not`, `$eq`).
* **Especialista en Pipelines de Agregación (`US-ETS-03-03`):** Diseño técnico de los flujos de analítica de datos combinando de forma eficiente las etapas de `$match` (filtrado masivo), `$lookup` (cruce de colecciones) y `$group` (cálculo de acumulados financieros).

### 🛡️ Juan Pablo Dominguez Sarmiento (Support Engineer & QA Assistant)
* **Soporte Técnico Multitarea:** Actuó como asistente general de desarrollo para todos los integrantes del equipo, apoyando en la resolución de bloqueos y participando activamente en las fases críticas de integración.
* **Aseguramiento de Calidad (QA):** Colaboración en las pruebas manuales de consistencia de datos, auditorías internas y validación de logs de cambios (`$push`) para garantizar el cumplimiento de la *Definition of Done (DoD)*.

---

## 🧱 Selected Epics & User Stories

### Epic 4 — Financial Security & Data Intelligence

#### `US-ETS-03-01` — Financial Revenue Segmentation
* **Prioridad:** 🟠 Alta
* **Puntos:** 5
* **Operador MongoDB:** `$in`
* **Asignado a:** Uriel Martínez (Query) & Diana Hernandez (Modelado/Validación)
* **User Story:** Como Director de Finanzas, quiero filtrar las transacciones según los métodos de pago bancarios autorizados (Tarjetas, Transferencias) para calcular las comisiones bancarias exactas y segmentar los ingresos diarios.

##### Criterios de Aceptación (Gherkin)
| # | Given (Dado que) | When (Cuando) | Then (Entonces) |
|---|------------------|--------------|-----------------|
| 1 | `Tarjeta` y `Transferencia` son los únicos métodos de pago autorizados en la consulta | El Director de Finanzas genera el reporte de cierre diario mediante el operador `$in` | El sistema retorna exclusivamente los documentos cuyo método de pago coincida con la lista autorizada |
| 2 | Existen transacciones en la base de datos registradas con el método de pago `Efectivo` | Se ejecuta el filtro de segmentación bancaria para el reporte | Las transacciones en efectivo son **omitidas por completo** del resultado devuelto |
| 3 | La consulta con el operador `$in` se ejecuta en el backend | El sistema procesa los registros de la colección de transacciones | Cada objeto de la lista resultante pertenece de forma estricta a `Tarjeta` o `Transferencia` |

</br>

#### `US-ETS-03-02` — Fraudulent & Anomalous Transaction Detection
* **Prioridad:** 🔴 Crítica
* **Puntos:** 8
* **Operador MongoDB:** `$not` / `$eq`
* **Asignado a:** Uriel Martínez (Query) & Diana Hernandez (Modelado/Validación)
* **User Story:** Como Auditor de Seguridad del Sistema, quiero aislar las transacciones cuyos montos totales difieran del precio estándar del boleto ($200) o posean estados inválidos/nulos, para identificar anomalías operativas e intentos de fraude.

##### Criterios de Aceptación (Gherkin)
| # | Given (Dado que) | When (Cuando) | Then (Entonces) |
|---|------------------|--------------|-----------------|
| 1 | El precio estándar oficial del boleto está configurado en `total_amount: 200` | El auditor ejecuta el reporte de detección de anomalías usando la combinación `{ total_amount: { $not: { $eq: 200 } } }` | Las transacciones con un costo exacto de 200 **no** son marcadas ni incluidas en la lista de sospechas |
| 2 | Existe una transacción alterada con un valor de `total_amount: 500` o `total_amount: 0` | El auditor genera el reporte de seguridad | Dicha transacción es aislada y resaltada inmediatamente como una anomalía financiera |
| 3 | Existen documentos de transacciones con el campo de estado o monto como `null` o inexistente | Se procesa la verificación lógica de integridad | El sistema las atrapa con el operador `$not` y las reporta como "No verificables / Riesgo de Fraude" |

</br>

#### `US-ETS-03-03` — Real-Time Operational Reporting via Aggregations
* **Prioridad:** 🔴 Crítica
* **Puntos:** 8
* **Operador MongoDB:** Aggregation Framework (`$match`, `$group`, `$lookup`)
* **Asignado a:** Uriel Martínez (Query) & Uriel Lopez (Backend)
* **User Story:** Como Administrador de la Plataforma, quiero ejecutar consultas de agregación cruzando colecciones para generar reportes unificados de ventas y asistencia sin necesidad de realizar múltiples consultas separadas.

##### Criterios de Aceptación (Gherkin)
| # | Given (Dado que) | When (Cuando) | Then (Entonces) |
|---|------------------|--------------|-----------------|
| 1 | Las colecciones `tickets`, `events` y `attendees` se encuentran físicamente separadas | El administrador solicita el reporte consolidado en tiempo real desde el dashboard | El pipeline ejecuta un `$lookup` para cruzar los datos de las tres colecciones en una sola respuesta estructurada |
| 2 | El pipeline recibe una petición con filtros específicos de fecha y evento | Se procesa la etapa de `$match` al inicio del pipeline de agregación | Se descartan eficientemente los documentos irrelevantes antes de realizar cálculos pesados |
| 3 | Se requiere saber el total de dinero recaudado y boletos vendidos por cada evento | La etapa de `$group` procesa los documentos filtrados | El sistema devuelve un JSON resumido con los acumulados calculados matemáticamente de forma exacta |

---

### Epic 5 — System Traceability & Audit Logs

#### `US-ETS-03-04` — Non-Mutating Internal Modification History
* **Prioridad:** 🟡 Media
* **Puntos:** 3
* **Operador MongoDB:** `$push`
* **Asignado a:** Uriel Lopez (Backend) & Juan Pablo Dominguez (Soporte/QA)
* **User Story:** Como Ingeniero de Soporte Técnico, quiero insertar notas históricas y logs de cambios al final de un arreglo dentro del mismo documento de reservación, para mantener la trazabilidad completa del ciclo de vida del boleto sin alterar la información original del cliente.

##### Criterios de Aceptación (Gherkin)
| # | Given (Dado que) | When (Cuando) | Then (Entonces) |
|---|------------------|--------------|-----------------|
| 1 | Un boleto específico se encuentra en estado `"PENDIENTE"` y tiene un arreglo llamado `logs` | El ingeniero añade la nota: `"Cliente reporta problemas con su banco al procesar pago"` | El sistema utiliza el operador `$push` para insertar la bitácora directamente en el arreglo interno |
| 2 | El arreglo de `logs` ya contiene un historial previo de 2 eventos de auditoría | Se inserta la nueva nota técnica en el documento de reservación | La nueva nota se añade estrictamente al **final** de la lista (posición `n+1`) respetando el orden cronológico |
| 3 | La operación de actualización con `$push` finaliza exitosamente en MongoDB | Se inspecciona visualmente todo el documento modificado | Ningún dato original del cliente (Nombre, ID, Correo, Asiento) fue sobreescrito, mutado o perdido |

---

## Impediments & Dependencies

| # | Impedimento | Impacto | Dueño | Estado |
|---|------------|--------|-------|--------|
| 1 | Precio estándar del boleto no firmado por PO | Bloquea pruebas de la historia 03-02 | Product Owner (Diana H.) | 🟢 Resuelto |

---

## Definition of Done (DoD)

- [ ] **[Uriel M.]** Pipelines de agregación probados y ejecutados con operadores `$match`, `$lookup` y `$group`.
- [ ] **[Uriel L. / Pablo D.]** Código detrás de la página integrado con el operador `$push` verificado en la inserción de logs.
- [ ] **[Diana H.]** Criterios de aceptación revisados, explicados y aprobados con cero pérdida de datos.

---

## Backlog Summary

| User Story | Épica | Prioridad | Operador / Estrategia | Responsable Principal | Puntos |
|------------|-------|-----------|------------------------|-----------------------|:------:|
| US-ETS-03-01 | Financial Security | 🟠 Alta | `$in` (Filtros en lote) | Uriel Martínez | 5 |
| US-ETS-03-02 | Financial Security | 🔴 Crítica | `$not` / `$eq` (Seguridad) | Uriel Martínez | 8 |
| US-ETS-03-03 | Financial Security | 🔴 Crítica | `$match`, `$group`, `$lookup`| Uriel Martínez | 8 |
| US-ETS-03-04 | System Traceability| 🟡 Media | `$push` (Bitácoras) | Uriel Lopez / Pablo D. | 3 |
| **TOTAL** | | | | | **24** |

</br>
