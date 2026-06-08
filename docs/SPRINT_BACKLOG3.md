# 🎟️ Event Ticket System — Sprint 3 Backlog
### Auditing, Reporting & Performance Optimization

---

> </br>**Repositorio:** `cbtis47--projectcbum`
> </br>**Rama:** `sprint/3-analytics-optimization`
> </br>**Stack:** Java · Spring Boot · MongoDB · Maven
> </br>**Duración:** 4 semanas
> </br>**Equipo:** Event Ticket System (Parcial 3 - Release Final)

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

Al finalizar este sprint, el sistema procesará datos a gran escala mediante pipelines de agregación, **aislará fraudes financieros con lógica booleana avanzada**, inyectará bitácoras de auditoría internas con `$push` y generará reportes analíticos consolidados de rendimiento con `.explain()`.

---

## 📊 Sprint Parameters & Capacity Plan

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

Para cumplir con el desarrollo integral del **Sprint 3 (Release Final)**, las tareas de programación avanzada, auditoría y aseguramiento de calidad se desglosaron minuciosamente por integrante durante las cuatro semanas del ciclo:

### 📋 Diana Hernandez Antonio (Product Owner & Data Modeler)
* **Dirección, Control y Validación del Proyecto:** * **Cronograma:** Desarrollado durante las **Semanas 1 y 2 (Lunes de 14:00 a 14:50 en CC2 y Martes de 13:00 a 13:50 en CC3)**.
  * **Descripción:** Invirtió **4 horas de laboratorio** coordinando los objetivos del cierre del parcial. Explicó detalladamente al equipo las reglas de negocio financieras necesarias para las consultas de auditoría y lideró la revisión final del comportamiento de la plataforma frente a los requisitos del cliente.
* **Modelado y Optimización Documental:** * **Cronograma:** Desarrollado durante las **Semanas 3 y 4 (Martes de 13:50 a 14:50 en CC3 y Jueves de 13:00 a 14:00 en Aula 13)**.
  * **Descripción:** Dedicó **4 horas efectivas** en clase a supervisar que las colecciones finales en MongoDB Atlas estuvieran estructuradas correctamente para soportar las consultas cruzadas del framework de agregación sin degradar el rendimiento del servidor.

### ⚙️ Uriel Lopez Xochiquiquixqui (Scrum Master & Backend Developer)
* **Administración Ágil y Control de Entregas:** * **Cronograma:** Desarrollado durante las **Semanas 1 y 2 (Martes de 13:00 a 14:00 en CC3)**.
  * **Descripción:** Dedicó **2 horas de laboratorio** a gestionar el Product Backlog final, documentar los bloqueos del equipo y estructurar los criterios de aceptación en formato Gherkin para las historias transaccionales.
* **Desarrollo del Servidor y Control de Historiales (`US-ETS-03-04`):** * **Cronograma:** Desarrollado durante las **Semanas 3 y 4 (Miércoles de 15:10 a 17:00 en CC3 y Jueves de 15:10 a 16:00 en CC2)**.
  * **Descripción:** Invirtió **6 horas en el laboratorio y 4 horas de desarrollo autónomo en casa**. Programó los servicios en Java/Spring Boot que consumen el backend de la aplicación. Integró de forma nativa la lógica del operador `$push` para inyectar objetos de log dentro de arreglos integrados, asegurando que las bitácoras de auditoría corrieran de manera limpia detrás de la interfaz de la página sin alterar los datos del usuario.

### 🔍 Uriel Martínez Bian (The Query Developer)
* **Desarrollo de Consultas de Segmentación Financiera y Antifraude (`US-ETS-03-01` y `US-ETS-03-02`):** * **Cronograma:** Desarrollado durante las **Semanas 1 y 2 (Martes de 13:00 a 14:50 en CC3 y Jueves de 13:00 a 14:00 en Aula 13)**.
  * **Descripción:** Dedicó **6 horas de laboratorio**. Diseñó y validó la sintaxis de las consultas de seguridad en Atlas. Implementó de manera exacta filtros en lote mediante el operador `$in` para segmentar ingresos por método de pago y combinó operadores lógicos booleanos como `$not` y `$eq` para aislar instantáneamente transacciones con montos alterados o valores nulos indicativos de fraude.
* **Diseño Avanzado de Pipelines de Agregación Operativa (`US-ETS-03-03`):** * **Cronograma:** Desarrollado durante las **Semanas 3 y 4 (Lunes de 14:00 a 14:50 en CC2 y Miércoles de 15:10 a 17:00 en CC3)**.
  * **Descripción:** Invirtió **6 horas efectivas en laboratorio**. Desarrolló los flujos de analítica masiva del sistema unificando colecciones a través de etapas secuenciales: `$match` para filtrado veloz en memoria, `$lookup` para ejecutar los cruces lógicos entre boletos y usuarios, y `$group` para realizar los cálculos matemáticos acumulados de la recaudación final de la taquilla.

### 🛡️ Juan Pablo Dominguez Sarmiento (Support Engineer & QA Assistant)
* **Soporte de Integración y Mitigación de Bloqueos:** * **Cronograma:** Desarrollado durante las **Semanas 1 y 2 (Lunes de 14:00 a 14:50 en CC2 y Miércoles de 15:10 a 16:00 en CC3)**.
  * **Descripción:** Dedicó **4 horas efectivas** a dar asistencia técnica al equipo en la resolución de problemas de conectividad con Atlas y conflictos menores de fusión en las ramas de Git.
* **Aseguramiento de Calidad, Auditoría Financiera y Pruebas de Carga:** * **Cronograma:** Desarrollado durante las **Semanas 3 y 4 (Miércoles de 16:00 a 17:00 en CC3 y Jueves de 18:00 a 19:00 en CC2)**.
  * **Descripción:** Invirtió **4 horas de laboratorio y 4 horas de soporte especializado en casa**. Ejecutó pruebas de caja negra inyectando datos anómalos para verificar la efectividad de las alertas de fraude. Auditó cronológicamente la inserción correcta de las bitácoras generadas por `$push` y validó la optimización de los queries mediante la ejecución de comandos `.explain()` para certificar un despliegue final libre de pérdidas de datos.

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
| 3 | La operation de actualización con `$push` finaliza exitosamente en MongoDB | Se inspecciona visualmente todo el documento modificado | Ningún dato original del cliente (Nombre, ID, Correo, Asiento) fue sobreescrito, mutado o perdido |

---

## 🚧 Impediments & Dependencies

| # | Impedimento | Impacto | Dueño | Estado |
|---|------------|--------|-------|--------|
| 1 | Precio estándar del boleto no firmado por PO | Bloquea pruebas de la historia 03-02 | Diana Hernandez | 🟢 Resuelto |

---

## ✅ Definition of Done (DoD)

* ✔️ **[Uriel M.]** Se probaron y ejecutaron los pipelines de agregación avanzada de forma exitosa en Atlas, validando la correcta secuencia de las etapas `$match`, `$lookup` y `$group`.
* ✔️ **[Uriel L. / Juan Pablo D.]** Se programó y verificó la integración del código del backend con el operador `$push`, garantizando la inserción cronológica exacta de objetos de bitácora en los arreglos de historial.
* ✔️ **[Diana H.]** Se revisaron, explicaron y aprobaron al 100% los criterios de aceptación de auditoría del sistema, certificando la integridad transaccional del release final con cero pérdida de datos.

---

## 📈 Backlog Summary

| User Story | Épica | Prioridad | Operador / Estrategia | Responsable Principal | Puntos |
|------------|-------|-----------|------------------------|-----------------------|:------:|
| US-ETS-03-01 | Financial Security | 🟠 Alta | `$in` (Filtros en lote) | Uriel Martínez | 5 |
| US-ETS-03-02 | Financial Security | 🔴 Crítica | `$not` / `$eq` (Seguridad) | Uriel Martínez | 8 |
| US-ETS-03-03 | Financial Security | 🔴 Crítica | `$match`, `$group`, `$lookup`| Uriel Martínez | 8 |
| US-ETS-03-04 | System Traceability| 🟡 Media | `$push` (Bitácoras) | Uriel Lopez / Juan Pablo D.| 3 |
| **TOTAL** | | | | | **24** |

</br>
