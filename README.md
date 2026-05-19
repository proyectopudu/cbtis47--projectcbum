<div align="center">

<br/>

# 🎸 Event Ticket Management System

### *Rock Festival 2026 — MongoDB NoSQL Edition*

<br/>

![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-000000?style=for-the-badge&logo=mongodb&logoColor=47A248)
![Compass](https://img.shields.io/badge/Interface-MongoDB%20Compass-13AA52?style=for-the-badge&logo=mongodb&logoColor=white)
![Shell](https://img.shields.io/badge/Shell-Mongosh-000000?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node](https://img.shields.io/badge/Runtime-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Format](https://img.shields.io/badge/Format-JSON%20%2F%20BSON-000000?style=for-the-badge&logo=json&logoColor=white)
![VSCode](https://img.shields.io/badge/Editor-VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

<br/>

![Status](https://img.shields.io/badge/Status-🔴%20Live-black?style=flat-square)
![Environment](https://img.shields.io/badge/Environment-Cloud%20Atlas-13AA52?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![CBTIS](https://img.shields.io/badge/Team-CBTIS%2047-6e40c9?style=flat-square)

</div>

---

## 📖 Description

> **Status:** 🔴 Live &nbsp;|&nbsp; **Environment:** Cloud Atlas &nbsp;|&nbsp; **Event:** Rock Festival 2026

This project redefines the management of large-scale events through a high-performance **NoSQL** database. Built for the **Rock Festival 2026**, the system handles the complete event workflow:

| Feature | Description |
| :--- | :--- |
| 🎫 **Registration** | Full control of attendees and ticket lifecycle |
| 🕒 **Agility** | Real-time schedule and delay updates |
| 🎸 **Lineup** | Dynamic management of confirmed artists per stage |

Unlike SQL, we leverage the flexibility of **JSON/BSON** to evolve the data structure without stopping operations — allowing structural changes on the fly.

---

## 📋 Table of Contents

| # | Section |
| :---: | :--- |
| 01 | [Development Team](#-development-team) |
| 02 | [Roles & Technical Responsibilities](#️-roles--technical-responsibilities) |
| 03 | [Technical Achievements](#-technical-achievements) |
| 04 | [Tech Stack](#-tech-stack) |
| 05 | [Prerequisites](#-prerequisites) |
| 06 | [Quick Start](#-quick-start) |
| 07 | [Data Structure](#-data-structure) |
| 08 | [Key MQL Operations](#-key-mql-operations) |
| 09 | [Collections Diagram](#-collections-diagram) |
| 10 | [Successful Operation Example](#-successful-operation-example) |
| 11 | [Contributing](#-contributing) |
| 12 | [License](#-license) |
| 13 | [Contact](#-contact) |

---

## 👥 Development Team

<div align="center">

| Avatar | Name | Role |
| :---: | :--- | :--- |
| ![JP](https://img.shields.io/badge/JP-4A90E2?style=flat-square&logoColor=white) | Juan Pablo Domínguez Sarmiento | The Data Modeler — JSON Architect |
| ![DH](https://img.shields.io/badge/DH-13AA52?style=flat-square&logoColor=white) | Diana Hernández Antonio | The Query Developer — MQL Builder |
| ![UM](https://img.shields.io/badge/UM-F59E0B?style=flat-square&logoColor=white) | Uriel Martínez Brian | The Integration Specialist — Environment Admin |
| ![UL](https://img.shields.io/badge/UL-EF4444?style=flat-square&logoColor=white) | Uriel López Xochiquiquixqui | The Data Seeder — QA / Chaos Generator |
| ![UL](https://img.shields.io/badge/UL-8B5CF6?style=flat-square&logoColor=white) | Uriel López Xochiquiquixqui | Scrum Master |

</div>

---

## 🛠️ Roles & Technical Responsibilities

| Role | Technical Responsibilities |
| :--- | :--- |
| ![Architect](https://img.shields.io/badge/Role-JSON_Architect-4A90E2?style=for-the-badge) | Designs the logical structure of documents. Defines schemas and embedding strategies to optimize read performance. |
| ![MQL](https://img.shields.io/badge/Role-MQL_Builder-13AA52?style=for-the-badge) | Develops queries and update logic. Expert in operators like `$set`, `$inc`, and `$push`. |
| ![Admin](https://img.shields.io/badge/Role-Environment_Admin-F59E0B?style=for-the-badge) | Manages **MongoDB Atlas** clusters, security configuration, and CLI tools like **Mongosh**. |
| ![QA](https://img.shields.io/badge/Role-QA_Seeding-EF4444?style=for-the-badge) | Runs JSON seed data loads and validates integrity via `matchedCount` and `modifiedCount`. |
| ![Scrum](https://img.shields.io/badge/Role-Scrum_Master-8B5CF6?style=for-the-badge) | Technical workflow facilitator. Ensures modeling and queries integrate without errors across the dev cycle. |

---

## 🚀 Technical Achievements

| Area | Implementation | Key Operator |
| :--- | :--- | :---: |
| **Dynamic Modeling** | Structuring of `Attendees`, `Schedules`, and `Concerts` | `Schema-less` |
| **Profile Management** | Contact correction and document status updates | `$set` |
| **Logistics** | Stage delay tracking and time metric increments | `$inc` |
| **Lineup** | Live artist list construction per concert stage | `$push` |

---

## 📦 Tech Stack

<div align="center">

![MongoDB](https://img.shields.io/badge/MongoDB%20Atlas-000000?style=for-the-badge&logo=mongodb&logoColor=47A248)
![Compass](https://img.shields.io/badge/MongoDB%20Compass-13AA52?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongosh](https://img.shields.io/badge/Mongosh-000000?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![JSON](https://img.shields.io/badge/JSON%20%2F%20BSON-000000?style=for-the-badge&logo=json&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

</div>

---

## ✅ Prerequisites

Make sure you have the following installed before continuing:

- 🍃 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — Active free cloud cluster
- 🧭 [MongoDB Compass](https://www.mongodb.com/products/compass) `>= 1.40` — Graphical interface
- 💻 [Mongosh](https://www.mongodb.com/docs/mongodb-shell/) `>= 2.0` — Interactive CLI shell
- 🟢 [Node.js](https://nodejs.org) `>= 18` — JavaScript runtime for the server
- 🔵 [Visual Studio Code](https://code.visualstudio.com) — Code editor
- 🌐 Internet access to connect to Atlas

---

## ⚡ Quick Start

### 1 — Configure MongoDB Atlas

1. Create a free **M0** cluster → name it `rockfestival2026`
2. Create user `admin` with a password *(no `@` or `/` characters)*
3. **Network Access** → **Allow Access from Anywhere**
4. **Connect → Drivers** → copy your connection string:

```
mongodb+srv://admin:YOUR_PASSWORD@rockfestival2026.xxxxx.mongodb.net/rockfestival2026
```

### 2 — Set up the project

```bash
mkdir ticketvault && cd ticketvault
npm init -y
npm install express mongoose cors dotenv
```

**`.env`** file at the root:

```env
MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@rockfestival2026.xxxxx.mongodb.net/rockfestival2026
PORT=3000
```

**`.gitignore`:**

```
node_modules/
.env
```

### 3 — Project structure

```
ticketvault/
├── public/
│   └── index.html       ← ticket-app.html renamed
├── .env                 ← your Atlas connection string
├── .gitignore
├── index.js             ← the Express server
└── package.json
```

### 4 — Create `index.js`

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ Connection error:', err));

// Schemas
const Evento = mongoose.model('Evento', new mongoose.Schema({
  nombre: String, venue: String, fecha: String, hora: String,
  categoria: String, desc: String, bg: String, emoji: String,
  zonas: [{ id: String, nombre: String, precio: Number,
            cupo_total: Number, cupo_disponible: Number }]
}));

const Boleto = mongoose.model('Boleto', new mongoose.Schema({
  codigo:    { type: String, unique: true },
  evento: String, venue: String, fecha: String, zona: String,
  precio: Number, emoji: String,
  estado:    { type: String, enum: ['confirmada','usada','cancelada'], default: 'confirmada' },
  comprador: { nombre: String, email: String, telefono: String }
}, { timestamps: true }));

// Routes
app.get('/api/eventos',  async (req, res) => res.json(await Evento.find()));
app.post('/api/eventos', async (req, res) => res.status(201).json(await new Evento(req.body).save()));

app.get('/api/boletos',  async (req, res) => res.json(await Boleto.find().sort({ createdAt: -1 })));
app.post('/api/boletos', async (req, res) => res.status(201).json(await new Boleto(req.body).save()));
app.patch('/api/boletos/:codigo/usar', async (req, res) => {
  const b = await Boleto.findOneAndUpdate(
    { codigo: req.params.codigo },
    { $set: { estado: 'usada' } },
    { new: true }
  );
  b ? res.json(b) : res.status(404).json({ error: 'Ticket not found' });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`🎟️  TicketVault running at http://localhost:${process.env.PORT || 3000}`));
```

### 5 — Run the app

```bash
node index.js
```

Open **`http://localhost:3000`** — events load automatically on first run. ✅

> 💡 **Tip:** Use `npx nodemon index.js` to auto-restart on file changes.

### ❌ Common Errors

| Error | Solution |
| :--- | :--- |
| `Cannot find module 'express'` | Run `npm install express mongoose cors dotenv` |
| `MongoServerError: bad auth` | Check password in `.env` — no `@` or `/` allowed |
| Blank screen / no events | Verify the server is running in terminal |
| Port 3000 already in use | Set `PORT=3001` in `.env` |

---

## 📁 Data Structure

The system operates on three main collections:

<details>
<summary><b>📋 attendees — Registered attendees</b></summary>

```json
{
  "_id": { "$oid": "64a1f2b3c9e77a001d8f1234" },
  "name": "Carlos Reyes",
  "email": "carlos.reyes@email.com",
  "phone": "+52 555 123 4567",
  "ticket": {
    "type": "VIP",
    "seat": "A-12",
    "status": "confirmed"
  },
  "registered_at": { "$date": "2026-01-15T10:30:00Z" }
}
```

</details>

<details>
<summary><b>🕒 schedules — Stage schedules</b></summary>

```json
{
  "_id": { "$oid": "64a1f2b3c9e77a001d8f5678" },
  "stage": "Main Stage",
  "date": "2026-07-04",
  "start_time": "20:00",
  "delay_minutes": 0,
  "status": "on_time"
}
```

</details>

<details>
<summary><b>🎸 concerts — Artist lineup</b></summary>

```json
{
  "_id": { "$oid": "64a1f2b3c9e77a001d8f9012" },
  "stage": "Main Stage",
  "date": "2026-07-04",
  "artists": [
    { "name": "Band X", "genre": "Metal", "set_duration_min": 60 },
    { "name": "Group Y", "genre": "Rock",  "set_duration_min": 45 }
  ]
}
```

</details>

---

## 🔍 Key MQL Operations

### Update an attendee's contact — `$set`

```javascript
db.attendees.updateOne(
  { "name": "Carlos Reyes" },
  { $set: { "email": "new.email@mail.com" } }
)
```

### Log a stage delay — `$inc`

```javascript
db.schedules.updateOne(
  { "stage": "Main Stage" },
  { $inc: { "delay_minutes": 15 } }
)
```

### Add an artist to the lineup — `$push`

```javascript
db.concerts.updateOne(
  { "stage": "Main Stage", "date": "2026-07-04" },
  { $push: { "artists": { "name": "Band Z", "genre": "Punk", "set_duration_min": 30 } } }
)
```

### Query all VIP attendees — `find`

```javascript
db.attendees.find({ "ticket.type": "VIP" })
```

---

## 📊 Collections Diagram

```mermaid
erDiagram
    ATTENDEES {
        ObjectId _id
        string   name
        string   email
        string   phone
        object   ticket
        date     registered_at
    }

    SCHEDULES {
        ObjectId _id
        string   stage
        string   date
        string   start_time
        int      delay_minutes
        string   status
    }

    CONCERTS {
        ObjectId _id
        string   stage
        string   date
        array    artists
    }

    ATTENDEES ||--o{ SCHEDULES : "attends"
    SCHEDULES ||--||  CONCERTS : "belongs to"
```

---

## 🧪 Successful Operation Example

```diff
+ matchedCount:  1
+ modifiedCount: 1
+ acknowledged:  true
```

> The update was acknowledged by the server, matched exactly one document, and modified it correctly.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "feat: clear description of the change"
   ```
4. Push and open a **Pull Request** describing what changed and why.

> **Note:** All code, variable names, comments, and documentation must be written **in English**.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

<div align="center">

| Avatar | Member | GitHub |
| :---: | :--- | :--- |
| ![JP](https://img.shields.io/badge/JP-4A90E2?style=flat-square) | Juan Pablo Domínguez Sarmiento | [@username](https://github.com) |
| ![DH](https://img.shields.io/badge/DH-13AA52?style=flat-square) | Diana Hernández Antonio | [@username](https://github.com) |
| ![UM](https://img.shields.io/badge/UM-F59E0B?style=flat-square) | Uriel Martínez Brian | [@username](https://github.com) |
| ![UL](https://img.shields.io/badge/UL-EF4444?style=flat-square) | Uriel López Xochiquiquixqui | [@username](https://github.com) |

</div>

---

<div align="center">

**Made with 🖤 and lots of MQL by the CBTIS 47 team**

<br/>

![MongoDB](https://img.shields.io/badge/Powered%20by-MongoDB-13AA52?style=for-the-badge&logo=mongodb&logoColor=white)






# 🎟️ Event Ticket System (Online Reservation Platform)

## 📌 Project Overview
**Event Ticket System** is a comprehensive backend solution built on NoSQL (**MongoDB**) technology designed to manage the complete lifecycle of ticket reservations for high-demand online events. The system centralizes attendee management, financial transaction processing, and real-time inventory logistics.

Unlike traditional relational database systems, this platform leverages the flexibility of the document model to adapt event structures (e.g., VIP tiers, general admission, early bird) dynamically without downtime, enabling seamless scaling during peak sales windows.

---

## ⚙️ Technical Specifications

| Category | Specification | Description / Purpose |
| :--- | :--- | :--- |
| **Data Architecture** | NoSQL Document-Oriented | Enables flexible schemas for diverse event types without costly schema migrations. |
| **Query Engine** | `find()` / `findOne()` | Optimizes data retrieval depending on whether a collection list or a single record is needed. |
| **Logical Operators** | `$and`, `$or`, `$not` | Builds complex filtering rules for user segmentation, verification, and security. |
| **Comparison Operators** | `$gt`, `$lt`, `$in`, `$ne` | Manages ticket price ranges, event dates, and filters out failed transaction states. |
| **Data Integrity** | Atomic Mutations | Utilizes `$set`, `$inc`, and `$push` to eliminate race conditions during concurrent mass sales. |
| **Scalability** | MongoDB Atlas (Cloud) | Elastic cloud infrastructure capable of handling massive traffic spikes during pre-sales. |

---

## 🛠️ Infrastructure & Troubleshooting Guide

As a **Query Developer**, maintaining the connection and data flow between the application environment, **MongoDB Compass**, and **MongoDB Atlas** is vital. Below is the technical guide for handling common issues:

| Problem / Error Message | Root Cause | Resolution Applied |
| :--- | :--- | :--- |
| **Error: "Authentication Failed"** | Incorrect password or leaving `< >` brackets in the connection string. | Verify credentials in Atlas *Database Access* and paste the password cleanly into Compass without extra symbols. |
| **Error: "Connection Timeout"** | The local network IP address is not whitelisted in the cloud firewall. | Navigate to *Network Access* in Atlas and add the current public IP address or enable global access (`0.0.0.0/0`). |
| **Query returns zero data** | Syntax error in the JSON filter or casing mismatch in the field names. | Validate that field attributes (e.g., `total_amount`) match the exact character casing present in the source documents. |
| **Folder not uploading to GitHub** | Attempting to push an empty folder structure to the repository. | Ensure every directory (`data/`, `queries/`, `scripts/`) contains at least one target tracking file (e.g., `seeds.json` or `.mongodb`). |
| **`findOne()` returns `null`** | The specific search criteria does not exist within the active collection. | Run a broad `find()` query first to confirm data existence, then isolate the unique parameter for the `findOne()` look-up. |

---

## 🎯 Product Goal
> "To build an online reservation platform (*Event Ticket System*) for mass ticket sales, capable of processing concurrent transactions with zero data loss, guaranteeing real-time capacity consistency, and offering advanced financial auditing tools through optimized NoSQL queries."

---

## 📑 Product Backlog

### 🧱 Epic 1: Capacity Management and Logistics
**Requested by:** *Operations Director* **Focus:** Strict control of ticket inventory and secure access management to prevent overbooking.

#### PBI-01: Atomic Inventory Control and Overbooking Prevention
* **User Story:**
  * **As an** Event Organizer (Organizing Committee),
  * **I want to** update the available ticket inventory by subtracting capacity atomically and immediately with each successful purchase,
  * **So that** the venue's capacity limit is respected and ticket oversales are legally avoided.
* **Acceptance Criteria (Gherkin Syntax):**
  ```gherkin
  Given that the event "Concierto 2026" has an available capacity of 10 tickets
  When a customer executes a digital payment for 1 ticket
  Then the database must apply the $inc operator with a value of -1 on the disponibles field
  And the event capacity must update immediately to 9
  And no other execution thread should be able to read the previous value during the transaction
