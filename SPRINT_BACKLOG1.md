# 🎟️ Event Ticket System — Sprint 1 Backlog
### Fundamentos y Modelado Documental

---

> </br>**Repositorio:** `cbtis47--projectcbum`
> </br>**Rama:** `sprint/1-foundations-modeling`
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

</br>Al finalizar este sprint, el equipo habrá configurado el **entorno profesional en la nube (MongoDB Atlas)**, establecido el repositorio con reglas claras de uso de IA, diseñado la **arquitectura del esquema NoSQL** mediante código e inicializado las colecciones base del sistema de boletos.

---

## 📊 Sprint Parameters & Capacity Plan

| Parámetro | Valor |
|-----------|-------|
| Sprint | `sprint-1` |
| Total Puntos | `11 pts` |
| Entregable Final | **RELEASE v1.0** |

</br>

| Integrante | Rol Temático | Horas |
|------------|--------------|-------|
| Juan Pablo Dominguez | The Integration Specialist | 20h |
| Integrante 2 | The Data Modeler | 20h |
| Integrante 3 | The Query Developer | 20h |
| Integrante 4 | The Data Seeder / QA | 20h |

---

## 🧱 Selected Epics & User Stories

### Epic 1 — Environment Setup & Design

#### `US-ETS-01-01` — Git Repository & Ethics Setup
* **Prioridad:** 🔴 Crítica
* **Puntos:** 3
* **Entregable:** `README.md` + `.gitignore`
* **User Story:** Como desarrollador del equipo, quiero inicializar el repositorio compartido y firmar el contrato de uso ético de IA para asegurar la transparencia y mitigar errores de rastreo en archivos pesados.

</br>

#### `US-ETS-01-02` — Document Schema Design (Mermaid.js)
* **Prioridad:** 🔴 Crítica
* **Puntos:** 5
* **Entregable:** `docs/schema.mmd`
* **User Story:** Como Arquitecto de Datos (Modeler), quiero diseñar la estructura del documento de eventos y boletos (definiendo embedding vs referencing) usando código de Mermaid, para guiar la creación de colecciones sin ambigüedades relacionales.

</br>

#### `US-ETS-01-03` — Atlas Cloud Cluster Integration
* **Prioridad:** 🟠 Alta
* **Puntos:** 3
* **Entregable:** `scripts/01_create_collections.js`
* **User Story:** Como Especialista de Integración, quiero conectar la aplicación de Spring Boot a un clúster en la nube de MongoDB Atlas para garantizar la persistencia compartida en el entorno de desarrollo.

---

## 🚧 Impediments & Dependencies

| # | Impedimento | Impacto | Dueño | Estado |
|---|------------|--------|-------|--------|
| 1 | Cuentas de MongoDB Atlas sin verificar | Bloquea la conexión de la app | Integración | 🟡 Pendiente |

---

## ✅ Definition of Done (DoD)

- [ ] Código revisado y aprobado mediante Pull Request en GitHub.
- [ ] Diagrama de Mermaid sin errores de sintaxis visualizado correctamente.
- [ ] Script de inicialización probado y ejecutado con éxito directamente en Atlas.

---

## 📈 Backlog Summary

| User Story | Épica | Prioridad | Artefacto / Entregable | Puntos |
|------------|-------|-----------|------------------------|:------:|
| US-ETS-01-01 | Setup & Design | 🔴 Crítica | `README.md` / `Pledge` | 3 |
| US-ETS-01-02 | Setup & Design | 🔴 Crítica | `docs/schema.mmd` | 5 |
| US-ETS-01-03 | Setup & Design | 🟠 Alta | `create_collections.js`| 3 |
| **TOTAL** | | | | **11** |

</br>

