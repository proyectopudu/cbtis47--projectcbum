# 🎟️ Event Ticket System — Sprint 1 Backlog
### Fundamentos y Modelado Documental

---

> </br>**Repositorio:** `cbtis47--projectcbum`
> </br>**Rama:** `sprint/1-foundations-modeling`
> </br>**Stack:** Java · Spring Boot · MongoDB · Maven
> </br>**Duración:** 2 semanas
> </br>**Equipo:** Event Ticket System (Parcial 1 - Fundamentos)

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

Al finalizar este sprint, el equipo habrá configurado el **entorno profesional en la nube (MongoDB Atlas)**, establecido el repositorio con reglas claras de uso de IA, diseñado la **arquitectura del esquema NoSQL** mediante código e inicializado las colecciones base del sistema de boletos.

---

## 📊 Sprint Parameters & Capacity Plan

| Parámetro | Valor |
|-----------|-------|
| Sprint | `sprint-1` |
| Total Puntos | `11 pts` |
| Entregable Final | **RELEASE v1.0** |

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

Para cumplir con el desarrollo inicial del **Sprint 1 (Fundamentos y Modelado)**, las actividades y tiempos de desarrollo se desglosaron de forma específica por cada miembro durante las dos semanas del ciclo:

### 📋 Diana Hernandez Antonio (Product Owner & Data Modeler)
* **Validación de Reglas de Negocio e Historias de Usuario (`US-ETS-01-01`):** * **Cronograma:** Desarrollado durante la **Semana 1 (Lunes de 14:00 a 14:50 en CC2 y Martes de 13:00 a 14:50 en CC3)**.
  * **Descripción:** Dedicó **3 horas efectivas** en el laboratorio a redactar el alcance del sistema de venta masiva de boletos, estructurando las restricciones de negocio para evitar pérdida de datos y validando el contenido de las primeras User Stories junto al Scrum Master.
* **Diseño Documental NoSQL del Esquema (`US-ETS-01-02`):** * **Cronograma:** Desarrollado entre la **Semana 1 (Jueves de 13:00 a 14:00 en Aula 13) y Semana 2 (Martes de 13:00 a 14:50 en CC3)**.
  * **Descripción:** Invirtió **4 horas efectivas** analizando el comportamiento de lectura/escritura del sistema. Determinó la estructura lógica de las colecciones, decidiendo la aplicación de documentos anidados (*embedding*) para los datos estáticos del evento y el uso de referencias (*referencing*) mediante IDs únicos para conectar usuarios y transacciones de boletos de forma óptima.

### ⚙️ Uriel Lopez Xochiquiquixqui (Scrum Master & Backend Developer)
* **Estructuración y Gestión del Product Backlog:** * **Cronograma:** Desarrollado durante la **Semana 1 (Lunes de 14:00 a 14:50 en CC2 y Martes de 13:00 a 14:00 en CC3)**.
  * **Descripción:** Dedicó **2 horas efectivas** a la creación física del tablero de control, el ordenamiento de prioridades críticas y la redacción formal de los criterios de aceptación en sintaxis estructurada Gherkin para todo el equipo.
* **Inicialización del Entorno de Desarrollo y Estructura Spring Boot:** * **Cronograma:** Desarrollado durante la **Semana 2 (Miércoles de 15:10 a 17:00 en CC3 y Jueves de 15:10 a 16:00 en CC2)**.
  * **Descripción:** Invirtió **3 horas de laboratorio y 2 horas de revisión autónoma en casa**. Configuro el proyecto base Maven en el IDE, estructuró la arquitectura de paquetes (controllers, repositories, models) e inyectó las dependencias iniciales de Spring Data MongoDB (`spring-boot-starter-data-mongodb`) necesarias para levantar el backend del servidor.

### 🔍 Uriel Martínez Bian (The Query Developer)
* **Codificación y Sintaxis del Esquema en Mermaid.js (`US-ETS-01-02`):** * **Cronograma:** Desarrollado durante la **Semana 1 (Martes de 14:00 a 14:50 en CC3 y Jueves de 13:00 a 14:00 en Aula 13)** y continuado en la **Semana 2 (Lunes de 14:00 a 14:50 en CC2)**.
  * **Descripción:** Invirtió **3 horas efectivas en laboratorio**. Tradujo los requerimientos de modelado a código limpio de Mermaid.js para generar el archivo `docs/schema.mmd`. Diseñó visualmente los bloques de datos, tipos de variables BSON y las conexiones lógicas de las colecciones para que se rendericen nativamente en la documentación de GitHub sin fallas.
* **Validación de Estructuras de Consultas Documentales Base:** * **Cronograma:** Desarrollado durante la **Semana 2 (Miércoles de 15:10 a 17:00 en CC3)**.
  * **Descripción:** Dedicó **2 horas efectivas** a realizar pruebas conceptuales de inserción y estructura sintáctica. Validó que los identificadores de los documentos no tuvieran ambigüedades relacionales antes de inicializar la persistencia en la nube.

### 🛡️ Juan Pablo Dominguez Sarmiento (Support Engineer & QA Assistant)
* **Gobernanza del Repositorio de Git y Acuerdo de Ética en IA (`US-ETS-01-01`):** * **Cronograma:** Desarrollado durante la **Semana 1 (Lunes de 14:00 a 14:50 en CC2 y Martes de 13:00 a 14:00 en CC3)**.
  * **Descripción:** Dedicó **2 horas efectivas**. Inicializó el repositorio público en GitHub `cbtis47--projectcbum`, configuró las reglas de exclusión en el archivo `.gitignore` para bloquear el rastreo de carpetas basura (`/target`, `.idea`) y coordinó la firma digital del contrato ético de Inteligencia Artificial de los 4 integrantes.
* **Despliegue de Infraestructura y Conexión Cloud a MongoDB Atlas (`US-ETS-01-03`):** * **Cronograma:** Desarrollado durante la **Semana 2 (Miércoles de 15:10 a 17:00 en CC3 y Jueves de 18:00 a 19:00 en CC2)**.
  * **Descripción:** Invirtió **3 horas en el laboratorio y 1 hora extra en casa**. Aprovisionó el clúster en la nube, configuró los accesos de red por IP, generó los usuarios de administración distribuidos y validó el script de inicialización `scripts/01_create_collections.js` para asegurar que todo el equipo tuviera acceso concurrente y seguro a la base de datos distribuida.

---

## 🧱 Selected Epics & User Stories

### Epic 1 — Environment Setup & Design

#### `US-ETS-01-01` — Git Repository & Ethics Setup
* **Prioridad:** 🔴 Crítica
* **Puntos:** 3
* **Entregable:** `README.md` + `.gitignore`
* **Asignado a:** Juan Pablo Dominguez (Soporte/QA) & Uriel Lopez (Scrum/Backend)
* **User Story:** Como desarrollador del equipo, quiero inicializar el repositorio compartido y firmar el contrato de uso ético de IA para asegurar la transparencia y mitigar errores de rastreo en archivos pesados.

##### Criterios de Aceptación (Gherkin)
| # | Given (Dado que) | When (Cuando) | Then (Entonces) |
|---|------------------|--------------|-----------------|
| 1 | El repositorio local ha sido creado en la computadora de desarrollo | El asistente de QA genera el archivo `.gitignore` con exclusiones para carpetas como `/target` y `.idea` | GitHub ignora por completo los archivos temporales de compilación y librerías pesadas |
| 2 | El acuerdo ético de IA (*Pledge*) se redacta formalmente para el equipo | Los integrantes firman digitalmente el documento en el `README.md` principal | El repositorio refleja de forma pública el marco de integridad académica acordado con el docente |
| 3 | Se realiza el primer comando de subida hacia el servidor remoto (`git push`) | El Scrum Master valida el estado de la rama principal en línea | La estructura de archivos queda accesible para todos sin archivos basura o corruptos |

</br>

#### `US-ETS-01-02` — Document Schema Design (Mermaid.js)
* **Prioridad:** 🔴 Crítica
* **Puntos:** 5
* **Entregable:** `docs/schema.mmd`
* **Asignado a:** Diana Hernandez (Modelado/PO) & Uriel Martínez (Query)
* **User Story:** Como Arquitecto de Datos (Modeler), quiero diseñar la estructura del documento de eventos y boletos (definiendo embedding vs referencing) usando código de Mermaid, para guiar la creación de colecciones sin ambigüedades relacionales.

##### Criterios de Aceptación (Gherkin)
| # | Given (Dado que) | When (Cuando) | Then (Entonces) |
|---|------------------|--------------|-----------------|
| 1 | El sistema requiere almacenar relaciones de "un evento tiene múltiples boletos" | El modelador de datos define un esquema documental anidado o referenciado | El código de Mermaid.js dibuja claramente las llaves e identificadores NoSQL sin recurrir a llaves foráneas tradicionales |
| 2 | El diagrama de arquitectura de datos se escribe utilizando bloques en formato Markdown | Se sube el archivo a la carpeta `docs/schema.mmd` del repositorio | GitHub procesa y muestra visualmente las colecciones, tipos de datos y arreglos de manera fluida |
| 3 | El Product Owner revisa la estructura técnica propuesta para las reservaciones | El equipo analiza los campos mapeados antes de programar | El diseño gráfico coincide al 100% con los requerimientos lógicos del negocio para la venta masiva |

</br>

#### `US-ETS-01-03` — Atlas Cloud Cluster Integration
* **Prioridad:** 🟠 Alta
* **Puntos:** 3
* **Entregable:** `scripts/01_create_collections.js`
* **Asignado a:** Juan Pablo Dominguez (Soporte/QA) & Uriel Martínez (Query)
* **User Story:** Como Especialista de Integración, quiero conectar la aplicación de Spring Boot a un clúster en la nube de MongoDB Atlas para garantizar la persistencia compartida en el entorno de desarrollo.

##### Criterios de Aceptación (Gherkin)
| # | Given (Dado que) | When (Cuando) | Then (Entonces) |
|---|------------------|--------------|-----------------|
| 1 | Un clúster compartido ha sido aprovisionado correctamente en la consola web de MongoDB Atlas | El equipo de integración configura la URI de conexión en el archivo de propiedades del backend | La aplicación web establece un puente de comunicación exitoso mediante el driver nativo |
| 2 | La base de datos en la nube está protegida mediante credenciales de usuario y lista blanca de IPs | Se ejecuta el script javascript `01_create_collections.js` directamente en el clúster | Las colecciones principales del sistema se inicializan de forma remota sin errores de permisos |
| 3 | Se realiza una operación de prueba de inserción de documento de prueba | Se verifica el explorador de colecciones en la interfaz web de Atlas | El dato persiste en los servidores de la nube y se visualiza en formato JSON / BSON válido |

---

## 🚧 Impediments & Dependencies

| # | Impedimento | Impacto | Dueño | Estado |
|---|------------|--------|-------|--------|
| 1 | Cuentas de MongoDB Atlas sin verificar | Bloquea la conexión de la app | Juan Pablo Dominguez | 🟢 Resuelto |

---

## ✅ Definition of Done (DoD)

- [ ] **[Juan Pablo D.]** Se revisó y aprobó el código de control inicial mediante Pull Requests directos en GitHub, asegurando ramas limpias.
- [ ] **[Uriel M. / Diana H.]** Se validó el diagrama arquitectónico en Mermaid, confirmando la ausencia de errores de sintaxis y su visualización correcta en la documentación.
- [ ] **[Uriel L.]** Se ejecutó con éxito el script de inicialización en el clúster distribuido de MongoDB Atlas con la conexión base del backend establecida correctamente.

---

## 📈 Backlog Summary

| User Story | Épica | Prioridad | Artefacto / Entregable | Responsable Principal | Puntos |
|------------|-------|-----------|------------------------|-----------------------|:------:|
| US-ETS-01-01 | Setup & Design | 🔴 Crítica | `README.md` / `Pledge` | Juan Pablo Dominguez | 3 |
| US-ETS-01-02 | Setup & Design | 🔴 Crítica | `docs/schema.mmd` | Diana Hernandez / Uriel M. | 5 |
| US-ETS-01-03 | Setup & Design | 🟠 Alta | `create_collections.js`| Juan Pablo Dominguez | 3 |
| **TOTAL** | | | | | **11** |

</br>
