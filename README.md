# cbtis47--projectcbum
Una nueva experimentación  de hacer un repositorio y paginas web de reservas sin tener algún problema
Act as a Senior NoSQL Mentor expert in MongoDB and Education.

Your goal is NOT to give me the final code immediately, but to guide me to build it.

RULES OF INTERACTION: 

1. Language: Explain the concepts to me in SPANISH, but all code, variable names, comments, and documentation must be STRICTLY IN ENGLISH.

2. Pedagogy: If I ask you for code, first explain the logic to me using Object/JSON analogies (don't use SQL analogies). Give me a minimalist example and ask me to adapt it to my project.

3. Correction: If I have a mistake, don't silently correct it. Explain to me why it failed (e.g. JSON syntax error, incorrect data type) and how to fix it.

4. Stack: We limit ourselves to JSON, BSON, MongoDB Compass, and Mermaid.js.

Si entiendes esto, responde: "Ready to pair program! What are we building today?"

<table>
  <tr>
    <th>Nombre</th>
    <th>Rol</th>
  </tr>
  <tr>
    <td>Juan Pablo Domínguez Sarmiento</td>
    <td>The Data Modeler (Arquitecto JSON)</td>
  </tr>
  <tr>
    <td>Diana Hernández Antonio</td>
    <td>The Query Developer (Constructor MQL)</td>
  </tr>
  <tr>
    <td>Uriel Martínez Brian</td>
    <td>The Integration Specialist (Configurador del Entorno)</td>
  </tr>
  <tr>
    <td>Uriel López Xochiquiquixqui</td>
    <td>The Data Seeder / QA (Generador de Caos)</td>
  </tr>
  <tr>
    <td>Uriel López Xochiquiquixqui</td>
    <td>Scrum Master</td>
  </tr>
</table>


# 👥 Roles y Responsabilidades Técnicas ;)

  

| Rol | Responsabilidades Técnicas (MQL & JSON) |
| :--- | :--- |
| <img src="https://img.shields.io/badge/Rol-Arquitecto_JSON-blue?style=for-the-badge" /> | Diseño de la estructura lógica de los documentos. Define esquemas y estrategias de anidamiento para optimizar el rendimiento. |
| <img src="https://img.shields.io/badge/Rol-Constructor_MQL-green?style=for-the-badge" /> | Desarrollo de consultas y lógica de actualización. Experto en el uso de operadores como `$set`, `$inc` y `$push`. |
| <img src="https://img.shields.io/badge/Rol-Entorno_/_Admin-orange?style=for-the-badge" /> | Administración de clústeres en **MongoDB Atlas**, configuración de seguridad y despliegue de herramientas CLI como **Mongosh**. |
| <img src="https://img.shields.io/badge/Rol-QA_/_Seeding-red?style=for-the-badge" /> | Ejecución de carga de datos mediante semillas JSON y validación de integridad (monitoreo de `matchedCount` y `modifiedCount`). |
| <img src="https://img.shields.io/badge/Rol-Scrum_Master-lightgrey?style=for-the-badge" /> | Facilitador técnico del flujo de trabajo. Asegura que el modelado y las consultas se integren sin errores en el ciclo de desarrollo. |




# 🚩 <span style="color:#e91e63">Event Ticket Management System (MongoDB) =) </span>

---

## 🖤 <span style="color:#ff0000">Resumen del Proyecto</span>
> **Estatus:** 🔴 Operativo | **Entorno:** Cloud Atlas

Este proyecto redefine la administración de eventos masivos mediante una base de datos **NoSQL** de alto rendimiento. Diseñado para el **Rock Festival 2026**, el sistema gestiona el flujo integral:
* 🎫 **Registro:** Control total de asistentes y boletos.
* 🕒 **Agilidad:** Actualización de horarios en tiempo real.
* 🎸 **Lineup:** Gestión dinámica de artistas confirmados.

A diferencia de SQL, aquí usamos la flexibilidad de **JSON/BSON** para evolucionar sin detener la operación, permitiendo cambios estructurales al vuelo.

---

## 🚀 <span style="color:#ff0000">Logros Técnicos</span>

| Área | Implementación | Operador Clave |
| :--- | :--- | :--- |
| **Modelado Dinámico** | Estructuración de `Attendees`, `Schedules` y `Concerts` | `Schema-less` |
| **Perfiles** | Corrección de contacto y gestión de estados | `$set` |
| **Logística** | Control de retrasos y métricas de tiempo | `$inc` |
| **Cartelera** | Construcción de listas de artistas en vivo | `$push` |

---

## 🛠️ <span style="color:#ff0000">Stack Tecnológico</span>

![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-black?style=for-the-badge&logo=mongodb&logoColor=red)
![Compass](https://img.shields.io/badge/Interface-MongoDB%20Compass-red?style=for-the-badge&logo=mongodb&logoColor=black)
![Shell](https://img.shields.io/badge/Shell-Mongosh-black?style=for-the-badge&logo=javascript&logoColor=red)
![Format](https://img.shields.io/badge/Format-JSON%20/%20BSON-red?style=for-the-badge&logo=json&logoColor=black)

---

## 🧪 <span style="color:#ff0000">Ejemplo de Operación Exitosa</span>

```diff
+ matchedCount: 1
+ modifiedCount: 1
+ acknowledged: true
