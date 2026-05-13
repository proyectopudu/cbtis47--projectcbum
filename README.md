# 🎸 Event Ticket Management System
### *Rock Festival 2026 — MongoDB Edition*

<div align="center">

![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-black?style=for-the-badge&logo=mongodb&logoColor=red)
![Compass](https://img.shields.io/badge/Interface-MongoDB%20Compass-red?style=for-the-badge&logo=mongodb&logoColor=black)
![Shell](https://img.shields.io/badge/Shell-Mongosh-black?style=for-the-badge&logo=javascript&logoColor=red)
![Format](https://img.shields.io/badge/Format-JSON%20/%20BSON-red?style=for-the-badge&logo=json&logoColor=black)
![Status](https://img.shields.io/badge/Estatus-🔴%20Operativo-black?style=for-the-badge)
![Entorno](https://img.shields.io/badge/Entorno-Cloud%20Atlas-red?style=for-the-badge)

</div>

---

## 🖤 Resumen del Proyecto

> **Estatus:** 🔴 Operativo | **Entorno:** Cloud Atlas

Este proyecto redefine la administración de eventos masivos mediante una base de datos **NoSQL** de alto rendimiento. Diseñado para el **Rock Festival 2026**, el sistema gestiona el flujo integral:

* 🎫 **Registro:** Control total de asistentes y boletos.
* 🕒 **Agilidad:** Actualización de horarios en tiempo real.
* 🎸 **Lineup:** Gestión dinámica de artistas confirmados.

A diferencia de SQL, aquí usamos la flexibilidad de **JSON/BSON** para evolucionar sin detener la operación, permitiendo cambios estructurales al vuelo.

---

## 📋 Tabla de Contenidos

- [Resumen del Proyecto](#-resumen-del-proyecto)
- [Equipo de Desarrollo](#-equipo-de-desarrollo)
- [Roles y Responsabilidades Técnicas](#-roles-y-responsabilidades-técnicas)
- [Logros Técnicos](#-logros-técnicos)
- [Stack Tecnológico](#-stack-tecnológico)
- [Prerrequisitos](#-prerrequisitos)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Estructura de Datos](#-estructura-de-datos)
- [Operaciones MQL Clave](#-operaciones-mql-clave)
- [Diagrama de Colecciones](#-diagrama-de-colecciones)
- [Ejemplo de Operación Exitosa](#-ejemplo-de-operación-exitosa)
- [Contribución](#-contribución)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 👥 Equipo de Desarrollo

| Nombre | Rol |
| :--- | :--- |
| Juan Pablo Domínguez Sarmiento | The Data Modeler (Arquitecto JSON) |
| Diana Hernández Antonio | The Query Developer (Constructor MQL) |
| Uriel Martínez Brian | The Integration Specialist (Configurador del Entorno) |
| Uriel López Xochiquiquixqui | The Data Seeder / QA (Generador de Caos) |
| Uriel López Xochiquiquixqui | Scrum Master |

---

## 🛠️ Roles y Responsabilidades Técnicas

| Rol | Responsabilidades Técnicas (MQL & JSON) |
| :--- | :--- |
| ![Arquitecto](https://img.shields.io/badge/Rol-Arquitecto_JSON-blue?style=for-the-badge) | Diseño de la estructura lógica de los documentos. Define esquemas y estrategias de anidamiento para optimizar el rendimiento. |
| ![MQL](https://img.shields.io/badge/Rol-Constructor_MQL-green?style=for-the-badge) | Desarrollo de consultas y lógica de actualización. Experto en el uso de operadores como `$set`, `$inc` y `$push`. |
| ![Admin](https://img.shields.io/badge/Rol-Entorno_/_Admin-orange?style=for-the-badge) | Administración de clústeres en **MongoDB Atlas**, configuración de seguridad y despliegue de herramientas CLI como **Mongosh**. |
| ![QA](https://img.shields.io/badge/Rol-QA_/_Seeding-red?style=for-the-badge) | Ejecución de carga de datos mediante semillas JSON y validación de integridad (monitoreo de `matchedCount` y `modifiedCount`). |
| ![Scrum](https://img.shields.io/badge/Rol-Scrum_Master-lightgrey?style=for-the-badge) | Facilitador técnico del flujo de trabajo. Asegura que el modelado y las consultas se integren sin errores en el ciclo de desarrollo. |

---

## 🚀 Logros Técnicos

| Área | Implementación | Operador Clave |
| :--- | :--- | :--- |
| **Modelado Dinámico** | Estructuración de `Attendees`, `Schedules` y `Concerts` | `Schema-less` |
| **Perfiles** | Corrección de contacto y gestión de estados | `$set` |
| **Logística** | Control de retrasos y métricas de tiempo | `$inc` |
| **Cartelera** | Construcción de listas de artistas en vivo | `$push` |

---

## 📦 Stack Tecnológico

![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-black?style=for-the-badge&logo=mongodb&logoColor=red)
![Compass](https://img.shields.io/badge/Interface-MongoDB%20Compass-red?style=for-the-badge&logo=mongodb&logoColor=black)
![Shell](https://img.shields.io/badge/Shell-Mongosh-black?style=for-the-badge&logo=javascript&logoColor=red)
![Format](https://img.shields.io/badge/Format-JSON%20/%20BSON-red?style=for-the-badge&logo=json&logoColor=black)

---

## ✅ Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — Cuenta activa en el clúster cloud
- [MongoDB Compass](https://www.mongodb.com/products/compass) `>= 1.40` — Interfaz gráfica
- [Mongosh](https://www.mongodb.com/docs/mongodb-shell/) `>= 2.0` — Shell interactivo
- Acceso a Internet para conectar con Atlas
# 🚀 Inicio Rápido — TicketVault

## 1. Instala las herramientas
| Herramienta | Link |
| :--- | :--- |
| Node.js `>= 18` | [nodejs.org](https://nodejs.org) |
| Visual Studio Code | [code.visualstudio.com](https://code.visualstudio.com) |
| MongoDB Compass | [mongodb.com/compass](https://www.mongodb.com/products/compass) |
| Cuenta MongoDB Atlas | [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas) |

---

## 2. Configura MongoDB Atlas
1. Crea un clúster **M0 Free** → nombre: `rockfestival2026`
2. Crea un usuario `admin` con contraseña (sin `@` ni `/`)
3. En **Network Access** → **Allow Access from Anywhere**
4. En **Connect → Drivers** copia tu connection string:
```
mongodb+srv://admin:TU_PASSWORD@rockfestival2026.xxxxx.mongodb.net/rockfestival2026
```

---

## 3. Crea el proyecto

```bash
mkdir ticketvault && cd ticketvault
npm init -y
npm install express mongoose cors dotenv
```

**Archivo `.env`** (en la raíz):
```env
MONGODB_URI=mongodb+srv://admin:TU_PASSWORD@rockfestival2026.xxxxx.mongodb.net/rockfestival2026
PORT=3000
```

**`.gitignore`:**
```
node_modules/
.env
```

---

## 4. Estructura del proyecto

```
ticketvault/
├── public/
│   └── index.html     ← tu ticket-app.html renombrado
├── .env
├── .gitignore
└── index.js           ← el servidor
```

---

## 5. Crea `index.js`

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
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error:', err));

// Schemas
const Evento = mongoose.model('Evento', new mongoose.Schema({
  nombre: String, venue: String, fecha: String, hora: String,
  categoria: String, desc: String, bg: String, emoji: String,
  zonas: [{ id: String, nombre: String, precio: Number, cupo_total: Number, cupo_disponible: Number }]
}));

const Boleto = mongoose.model('Boleto', new mongoose.Schema({
  codigo: { type: String, unique: true },
  evento: String, venue: String, fecha: String, zona: String,
  precio: Number, emoji: String,
  estado: { type: String, enum: ['confirmada', 'usada', 'cancelada'], default: 'confirmada' },
  comprador: { nombre: String, email: String, telefono: String }
}, { timestamps: true }));

// Rutas
app.get('/api/eventos', async (req, res) => res.json(await Evento.find()));
app.post('/api/eventos', async (req, res) => res.status(201).json(await new Evento(req.body).save()));

app.get('/api/boletos', async (req, res) => res.json(await Boleto.find().sort({ createdAt: -1 })));
app.post('/api/boletos', async (req, res) => res.status(201).json(await new Boleto(req.body).save()));
app.patch('/api/boletos/:codigo/usar', async (req, res) => {
  const b = await Boleto.findOneAndUpdate({ codigo: req.params.codigo }, { $set: { estado: 'usada' } }, { new: true });
  b ? res.json(b) : res.status(404).json({ error: 'No encontrado' });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`🎟️  TicketVault en http://localhost:${process.env.PORT || 3000}`));
```

---

## 6. Corre la app

```bash
node index.js
```

Abre **`http://localhost:3000`** — los eventos cargan solos la primera vez. ✅

Abre **MongoDB Compass**, pega tu connection string y verifica las colecciones `eventos` y `boletos`.

---

## ❌ Errores comunes

| Error | Solución |
| :--- | :--- |
| `Cannot find module 'express'` | Ejecuta `npm install express mongoose cors dotenv` |
| `bad auth` | Revisa la contraseña en `.env` (sin `@` ni `/`) |
| Pantalla en blanco / sin eventos | Verifica que el servidor esté corriendo en la terminal |
| Puerto 3000 ocupado | Cambia a `PORT=3001` en `.env` |

---

*CBTIS 47 — Rock Festival 2026* 🎸


## 📁 Estructura de Datos

El sistema opera sobre tres colecciones principales. A continuación, un ejemplo del esquema de cada una:

### `attendees` — Asistentes registrados

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

### `schedules` — Horarios de escenarios

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

### `concerts` — Lineup de artistas

```json
{
  "_id": { "$oid": "64a1f2b3c9e77a001d8f9012" },
  "stage": "Main Stage",
  "date": "2026-07-04",
  "artists": [
    { "name": "Banda X", "genre": "Metal", "set_duration_min": 60 },
    { "name": "Grupo Y", "genre": "Rock", "set_duration_min": 45 }
  ]
}
```

---

## 🔍 Operaciones MQL Clave

### Actualizar contacto de un asistente (`$set`)

```javascript
db.attendees.updateOne(
  { "name": "Carlos Reyes" },
  { $set: { "email": "nuevo.email@correo.com" } }
)
```

### Registrar retraso en escenario (`$inc`)

```javascript
db.schedules.updateOne(
  { "stage": "Main Stage" },
  { $inc: { "delay_minutes": 15 } }
)
```

### Agregar artista al lineup (`$push`)

```javascript
db.concerts.updateOne(
  { "stage": "Main Stage", "date": "2026-07-04" },
  { $push: { "artists": { "name": "Banda Z", "genre": "Punk", "set_duration_min": 30 } } }
)
```

### Consultar todos los asistentes VIP

```javascript
db.attendees.find({ "ticket.type": "VIP" })
```

---

## 📊 Diagrama de Colecciones

```mermaid
erDiagram
    ATTENDEES {
        ObjectId _id
        string name
        string email
        string phone
        object ticket
        date registered_at
    }

    SCHEDULES {
        ObjectId _id
        string stage
        string date
        string start_time
        int delay_minutes
        string status
    }

    CONCERTS {
        ObjectId _id
        string stage
        string date
        array artists
    }

    ATTENDEES ||--o{ SCHEDULES : "asiste a"
    SCHEDULES ||--|| CONCERTS : "pertenece a"
```

---

## 🧪 Ejemplo de Operación Exitosa

```diff
+ matchedCount: 1
+ modifiedCount: 1
+ acknowledged: true
```

Esto confirma que la operación de actualización fue reconocida por el servidor, encontró exactamente un documento y lo modificó correctamente.

---

## 🤝 Contribución

¿Quieres mejorar el sistema? Sigue estas reglas:

1. Crea un fork del repositorio
2. Crea tu rama de feature:
   ```bash
   git checkout -b feature/nombre-de-tu-feature
   ```
3. Haz commit de tus cambios:
   ```bash
   git commit -m "feat: descripción clara del cambio"
   ```
4. Sube tu rama:
   ```bash
   git push origin feature/nombre-de-tu-feature
   ```
5. Abre un **Pull Request** describiendo qué cambiaste y por qué.

> **Nota:** Todo código, variables, comentarios y documentación debe escribirse **en inglés**. Las explicaciones pueden ser en español.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 📬 Contacto

**CBTIS 47 — Equipo de Desarrollo**

| Integrante | GitHub |
| :--- | :--- |
| Juan Pablo Domínguez Sarmiento | [@usuario](https://github.com) |
| Diana Hernández Antonio | [@usuario](https://github.com) |
| Uriel Martínez Brian | [@usuario](https://github.com) |
| Uriel López Xochiquiquixqui | [@usuario](https://github.com) |

---

<div align="center">

**Hecho con 🖤 y mucho MQL por el equipo de CBTIS 47**

![MongoDB](https://img.shields.io/badge/Powered%20by-MongoDB-black?style=for-the-badge&logo=mongodb&logoColor=red)

</div>
