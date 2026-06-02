# 🎟️ Event Ticket System — Sprint 3 Backlog
### Auditing, Reporting & Performance Optimization

---

> </br>**Repositorio:** `cbtis47--projectcbum`
> </br>**Rama:** `sprint/3-analytics-optimization`
> </br>**Stack:** Java · Spring Boot · MongoDB · Maven
> </br>**Duración:** 4 semanas

---

## 🎯 Product Goal Reference

> </br>Build an online reservation platform for mass ticket sales, capable of processing concurrent transactions with **zero data loss**, guaranteeing **real-time capacity consistency**, and offering advanced financial auditing tools through optimized **NoSQL queries**.

---

## 📋 Table of Contents

* [Sprint Goal](#sprint-goal)
* [Sprint Parameters & Capacity Plan](#sprint-parameters--capacity-plan)
* [Selected Epics & User Stories](#selected-epics--user-stories)
* [Impediments & Dependencies](#impediments--dependencies)
* [Definition of Done (DoD)](#definition-of-done-dod)
* [Backlog Summary](#backlog-summary)

---

## 🎯 Sprint Goal

</br>Al finalizar este sprint, el sistema procesará datos a gran escala mediante pipelines de agregación, **aislará fraudes financieros con lógica booleana avanzada**, inyectará bitácoras de auditoría internas con `$push` y generará reportes analíticos consolidados de rendimiento con `.explain()`.

---

## 📊 Sprint Parameters & Capacity Plan

| Parámetro | Valor |
|-----------|-------|
| Sprint | `sprint-3` |
| Total Puntos | **24 pts** |
| Entregable Final | **RELEASE FINAL** |

</br>

| Integrante | Rol Temático | Horas |
|------------|--------------|-------|
| Uriel Bian | The Integration Specialist | 20h |
| Juan Pablo Dominguez | The Data Modeler | 20h |
| Diana Hernandez | The Query Developer | 20h |
| Uriel Lopez | Scrum Master | 20h |

---

## 🧱 Selected Epics & User Stories

### Epic 4 — Financial Security & Data Intelligence

#### `US-ETS-03-01` — Financial Revenue Segmentation
* **Prioridad:** 🟠 Alta
* **Puntos:** 5
* **Operador MongoDB:** `$in`
* **User Story:** Como Director de Finanzas, quiero filtrar las transacciones según los métodos de pago bancarios autorizados (Tarjetas, Transferencias) para calcular las comisiones bancarias exactas y segmentar los ingresos diarios.

</br>

#### `US-ETS-03-02` — Fraudulent & Anomalous Transaction Detection
* **Prioridad:** 🔴 Crítica
* **Puntos:** 8
* **Operador MongoDB:** `$not` / `$eq`
* **User Story:** Como Auditor de Seguridad del Sistema, quiero aislar las transacciones cuyos montos totales difieran del precio estándar del boleto ($200) o posean estados inválidos/nulos, para identificar anomalías operativas e intentos de fraude.

</br>

#### `US-ETS-03-03` — Real-Time Operational Reporting via Aggregations
* **Prioridad:** 🔴 Crítica
* **Puntos:** 8
* **Operador MongoDB:** Aggregation Framework (`$match`, `$group`, `$lookup`)
* **User Story:** Como Administrador de la Plataforma, quiero ejecutar consultas de agregación cruzando colecciones para generar reportes unificados de ventas and asistencia sin necesidad de realizar múltiples consultas separadas.

</br>

### Epic 5 — System Traceability & Audit Logs

#### `US-ETS-03-04` — Non-Mutating Internal Modification History
* **Prioridad:** 🟡 Media
* **Puntos:** 3
* **Operador MongoDB:** `$push`
* **User Story:** Como Ingeniero de Soporte Técnico, quiero insertar notas históricas y logs de cambios al final de un arreglo dentro del mismo documento de reservación, para mantener la trazabilidad completa del ciclo de vida del boleto sin alterar la información original del cliente.

---

## 🚧 Impediments & Dependencies

| # | Impedimento | Impacto | Dueño | Estado |
|---|------------|--------|-------|--------|
| 1 | Precio estándar del boleto no firmado por PO | Bloquea pruebas de la historia 03-02 | Product Owner| 🟡 Pendiente |

---

## ✅ Definition of Done (DoD)

- [ ] Pipelines de agregación probados en Compass y exportados nativamente a Spring Data.
- [ ] Operador `$push` verificado: los datos históricos se agregan al final del array sin destruir campos existentes.
- [ ] Informe de rendimiento generado utilizando `.explain("executionStats")` para validar la efectividad de las consultas e índices instalados.

---

## 📈 Backlog Summary

| User Story | Épica | Prioridad | Operador / Estrategia | Puntos |
|------------|-------|-----------|------------------------|:------:|
| US-ETS-03-01 | Financial Security | 🟠 Alta | `$in` (Filtros en lote) | 5 |
| US-ETS-03-02 | Financial Security | 🔴 Crítica | `$not` / `$eq` (Seguridad) | 8 |
| US-ETS-03-03 | Financial Security | 🔴 Crítica | `$match`, `$group`, `$lookup`| 8 |
| US-ETS-03-04 | System Traceability| 🟡 Media | `$push` (Bitácoras) | 3 |
| **TOTAL** | | | | **24** |

</br>

📦 *Documentos relacionados:* `PRODUCT_BACKLOG.md`
</br>*Rama:* `git checkout -b sprint/3-analytics-optimization`
