<div align="center">

<br/>

# 🎟️ Event Ticket Management System

### *Massive Sales Platform — MongoDB NoSQL & Spring Boot Edition*

<br/>

![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-000000?style=for-the-badge&logo=mongodb&logoColor=47A248)
![Compass](https://img.shields.io/badge/Interface-MongoDB%20Compass-13AA52?style=for-the-badge&logo=mongodb&logoColor=white)
![Java](https://img.shields.io/badge/Language-Java_17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring](https://img.shields.io/badge/Framework-Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Maven](https://img.shields.io/badge/Build-Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![VSCode](https://img.shields.io/badge/Editor-VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

<br/>

![Status](https://img.shields.io/badge/Status-🔴%20Live-black?style=flat-square)
![Environment](https://img.shields.io/badge/Environment-Cloud%20Atlas-13AA52?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![CBTIS](https://img.shields.io/badge/Team-CBTIS%2047-6e40c9?style=flat-square)

</div>

---

## 📖 Description

> **Status:** 🔴 Live &nbsp;|&nbsp; **Environment:** Cloud Atlas &nbsp;|&nbsp; **Project:** Event Ticket System

This platform redefines mass ticket sales processing through a high-performance **NoSQL** cloud infrastructure. Built with **Spring Boot** and **MongoDB Atlas**, the system guarantees **zero data loss** and absolute data consistency under heavy concurrent traffic during major event reservations.

| Feature | Description |
| :--- | :--- |
| ⚡ **Atomic Inventory** | Real-time capacity subtraction using isolation algorithms to prevent overselling. |
| 🔒 **Financial Auditing** | Advanced MQL logic blocks to isolate anomalies and fraudulent transactions. |
| 📊 **Real-time Analytics** | Multi-collection pipeline aggregations for immediate financial and operational reports. |

Unlike relational databases, we leverage **JSON/BSON dynamic schemas** to evolve our business logic seamlessly on the fly.

---

## 📋 Table of Contents

| # | Section |
| :---: | :--- |
| 01 | [Sprint Backlogs (Docs)](#-sprint-backlogs-docs) |
| 02 | [Development Team](#-development-team) |
| 03 | [Roles & Technical Responsibilities](#️-roles--technical-responsibilities) |
| 04 | [Technical Achievements](#-technical-achievements) |
| 05 | [Tech Stack](#-tech-stack) |
| 06 | [Prerequisites](#-prerequisites) |
| 07 | [Quick Start & Setup](#-quick-start--setup) |
| 08 | [Data Structure](#-data-structure) |
| 09 | [Key MQL Operations](#-key-mql-operations) |
| 10 | [Collections Diagram](#-collections-diagram) |
| 11 | [Contributing](#-contributing) |
| 12 | [License](#-license) |
| 13 | [Contact](#-contact) |

---

## 📑 Sprint Backlogs (Docs)

To review the complete project planning, laboratory schedules, effective work hours, and the **Definition of Done (DoD)** for each partial evaluation, explore our sprint logs here:

* ➡️ **[Sprint 1 Backlog — Foundations & Document Modeling](docs/SPRINT_BACKLOG1.md)**
* ➡️ **[Sprint 2 Backlog — Core Foundations & Atomic Operations](docs/SPRINT_BACKLOG2.md)**
* ➡️ **[Sprint 3 Backlog — Auditing, Reporting & Performance Optimization](docs/SPRINT_BACKLOG3.md)**

---

## 👥 Development Team

<div align="center">

| Avatar | Name | Agile Role | Project Specialization |
| :---: | :--- | :--- | :--- |
| ![DH](https://img.shields.io/badge/DH-13AA52?style=flat-square&logoColor=white) | Diana Hernández Antonio | Product Owner | Data Modeler — Document Architect |
| ![UL](https://img.shields.io/badge/UL-8B5CF6?style=flat-square&logoColor=white) | Uriel López Xochiquiquixqui | Scrum Master | Backend Developer — Spring Engineer |
| ![UM](https://img.shields.io/badge/UM-F59E0B?style=flat-square&logoColor=white) | Uriel Martínez Bian | Core Developer | The Query Developer — MQL Expert |
| ![JP](https://img.shields.io/badge/JP-4A90E2?style=flat-square&logoColor=white) | Juan Pablo Domínguez Sarmiento | Support Engineer | QA Assistant — Infrastructure & Seeding |

</div>

---

## 🛠️ Roles & Technical Responsibilities

| Role | Technical Responsibilities |
| :--- | :--- |
| ![Architect](https://img.shields.io/badge/Role-Data_Modeler-13AA52?style=for-the-badge) | Conceptualizes collection mapping. Formulates structural embedding vs referencing rules to maintain ACID properties. |
| ![Backend](https://img.shields.io/badge/Role-Backend_Developer-8B5CF6?style=for-the-badge) | Programs the REST API endpoints in Java via Spring Data MongoDB, controlling entity persistence logic. |
| ![MQL](https://img.shields.io/badge/Role-Query_Developer-F59E0B?style=for-the-badge) | Constructs complex NoSQL operational queries, write-concerns, filters, and multi-stage aggregation pipelines. |
| ![QA](https://img.shields.io/badge/Role-QA_Assistant-4A90E2?style=for-the-badge) | Coordinates repository governance, generates heavy data seeds, and conducts multi-threaded load tests. |

---

## 🚀 Technical Achievements

| Area | Implementation Strategy | Key NoSQL Resource |
| :--- | :--- | :---: |
| **High Performance** | Fast indexing and response times below 50ms at access gates. | `findOne()` & Indexes |
| **Atomic Updates** | Real-time ticket inventory decrements preventing overselling completely. | `$inc` |
| **Data Integrity** | Chronological non-mutating internal application logs within documents. | `$push` |
| **Security Audit** | Lógica booleana para aislar fraudes y montos alterados automáticamente. | `$not` / `$eq` |
| **Business Intelligence** | Multi-collection pipeline synthesis for financial administration reporting. | `$match` / `$lookup` / `$group` |

---

## 📦 Tech Stack

<div align="center">

![Java](https://img.shields.io/badge/Java_17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-000000?style=for-the-badge&logo=mongodb&logoColor=47A248)
![Compass](https://img.shields.io/badge/MongoDB%20Compass-13AA52?style=for-the-badge&logo=mongodb&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![JSON](https://img.shields.io/badge/JSON%20%2F%20BSON-000000?style=for-the-badge&logo=json&logoColor=white)

</div>

---

## ✅ Prerequisites

Ensure you have the following installed on your local workstation:

- 🍃 [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) — Shared cluster provisioned in the cloud
- ☕ [Java Development Kit (JDK)](https://java.com) `>= 17`
- ⚙️ [Apache Maven](https://maven.apache.org) `>= 3.8`
- 🧭 [MongoDB Compass](https://www.mongodb.com/products/compass) — Graphical interface
- 🌐 Open Internet routing rules to enable inbound Atlas communication

---

## ⚡ Quick Start & Setup

### 1 — Application Configuration (`application.properties`)
Set up your connection keys inside your Spring Boot project under `src/main/resources/application.properties`:

```properties
spring.data.mongodb.uri=mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/eventticketdb?retryWrites=true&w=majority
server.port=8080
