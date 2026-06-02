
# 🎟️ Event Ticket System — Sprint 2 Backlog
### Core Foundations & Atomic Operations

---

> </br>**Repositorio:** `cbtis47--projectcbum`
> </br>**Rama:** `sprint/2-core-foundations`
> </br>**Stack:** Java · Spring Boot · MongoDB · Maven
> </br>**Duración:** 2 semanas

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

</br>Al finalizar este sprint, el sistema **gestionará de forma atómica el inventario de boletos** previniendo la sobreventa bajo cargas concurrentes, permitirá verificar asistentes en **menos de 50 ms** mediante índices únicos y contará con un set de datos de prueba realista de más de 50 documentos.

---

## 📊 Sprint Parameters & Capacity Plan

| Parámetro | Valor |
|-----------|-------|
| Sprint | `sprint-2` |
| Total Puntos | `16 pts` |
| Entregable Final | **RELEASE v2.0** |

</br>

| Integrante | Rol Temático | Horas |
|------------|--------------|-------|
| Juan Pablo Dominguez | The Integration Specialist | 20h |
| Integrante 2 | The Data Modeler | 20h |
| Integrante 3 | The Query Developer | 20h |
| Integrante 4 | The Data Seeder / QA | 20h |

---

## 🧱 Selected Epics & User Stories

### Epic 2 — Capacity Management and Logistics

#### `US-ETS-02-01` — Atomic Inventory Control & Overselling Prevention
* **Prioridad:** 🔴 Crítica
* **Puntos:** 8
* **Operador MongoDB:** `$inc`
* **User Story:** Como Organizador del Evento, quiero restar de forma atómica el inventario disponible en cada compra exitosa para respetar el límite de capacidad del recinto y evitar problemas legales por sobreventa.

</br>

#### `US-ETS-02-02` — Search & Identity Validation at Gates
* **Prioridad:** 🟠 Alta
* **Puntos:** 5
* **Operador MongoDB:** `findOne()` (SLA < 50ms)
* **User Story:** Como Recepcionista del Staff, quiero buscar a un asistente por su ID único en menos de 50 ms para validar su boleto rápidamente en la entrada del evento sin generar filas.

</br>

### Epic 3 — Traceability & Seed Data Quality

#### `US-ETS-02-03` — Synthetic High-Volume Data Seeding
* **Prioridad:** 🟡 Media
* **Puntos:** 3
* **Entregable:** `data/seeds.json`
* **User Story:** Como Ingeniero de Pruebas (QA), quiero poblar la base de datos con más de 50 documentos JSON realistas para simular condiciones operativas reales y validar las consultas del sistema.

---

## 🚧 Impediments & Dependencies

| # | Impedimento | Impacto | Dueño | Estado |
|---|------------|--------|-------|--------|
| 1 | Índice único en `uniqueId` no creado en Atlas | Pone en riesgo el SLA de 50ms | Query Dev | 🔴 Abierto |
| 2 | Write-concern no configurado en el clúster | Bloquea pruebas concurrentes de `$inc` | Integración | 🔴 Abierto |

---

## ✅ Definition of Done (DoD)

- [ ] Pruebas unitarias escritas con cobertura mínima del **80%**.
- [ ] Operador `$inc` validado bajo hilos concurrentes simulados.
- [ ] Búsqueda `findOne()` mapeada a un objeto JSON puro `{}`, nunca a arreglos `[]`.

---

## 📈 Backlog Summary

| User Story | Épica | Prioridad | Operador / Recurso | Puntos |
|------------|-------|-----------|--------------------|:------:|
| US-ETS-02-01 | Capacity Management | 🔴 Crítica | `$inc` (Atómico) | 8 |
| US-ETS-02-02 | Capacity Management | 🟠 Alta | `findOne()` & Index| 5 |
| US-ETS-02-03 | Traceability & Data | 🟡 Media | `data/seeds.json` | 3 |
| **TOTAL** | | | | **16** |

</br>

📦 *Documentos relacionados:* `PRODUCT_BACKLOG.md`
</br>*Rama:* `git checkout -b sprint/2-core-foundations`
