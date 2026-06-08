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

* [Sprint Goal](#sprint-goal)
* [Sprint Parameters & Capacity Plan](#sprint-parameters--capacity-plan)
* [Asignación de Responsabilidades por Integrante](#-asignación-de-responsabilidades-por-integrante)
* [Selected Epics & User Stories](#-selected-epics--user-stories)
* [Impediments & Dependencies](#impediments--dependencies)
* [Definition of Done (DoD)](#definition-of-done-dod)
* [Backlog Summary](#backlog-summary)

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

Para cumplir con el desarrollo inicial del **Sprint 1 (Fundamentos y Modelado)**, las tareas se dividieron estratégicamente entre los miembros del equipo:

### 📋 Diana Hernandez Antonio (Product Owner & Data Modeler)
* **Validación de Reglas de Negocio:** Definición de los requerimientos iniciales del sistema de venta de boletos masivos y supervisión del modelado de datos.
* **Diseño Documental NoSQL:** Modelado conceptual de las colecciones base, estableciendo el criterio de documentos anidados (*embedding*) vs. referencias (*referencing*) para los datos de los usuarios, eventos y reservaciones.

### ⚙️ Uriel Lopez Xochiquiquixqui (Scrum Master & Backend Developer)
* **Estructuración del Backlog:** Organización de las primeras historias de usuario de configuración del entorno, documentación de criterios iniciales y control del flujo de trabajo ágil.
* **Inicialización del Entorno de Desarrollo:** Configuración inicial del proyecto base con dependencias de Spring Data MongoDB y Maven para preparar la comunicación de servicios.

### 🔍 Uriel Martínez Bian (The Query Developer)
* **Diseño Visual e Infraestructura del Esquema:** Traducción del modelo lógico documental a un diagrama técnico representativo mediante código de Mermaid.js.
* **Validación de Consultas Base:** Preparación de la sintaxis básica requerida para insertar y estructurar los primeros documentos BSON del sistema.

### 🛡️ Juan Pablo Dominguez Sarmiento (Support Engineer & QA Assistant)
* **Gobernanza del Repositorio:** Configuración del archivo de exclusiones `.gitignore`, inicialización del repositorio remoto en GitHub y validación del acuerdo de ética sobre el uso responsable de Inteligencia Artificial.
* **Despliegue e Integración Inicial:** Configuración y testeo de la cadena de conexión de MongoDB Atlas para garantizar que todos los integrantes tuvieran acceso concurrente al clúster compartido en la nube.

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

- [ ] **[Juan Pablo D.]** Código de control inicial revisado y aprobado mediante Pull Request directo en GitHub.
- [ ] **[Uriel M. / Diana H.]** Diagrama de Mermaid sin errores de sintaxis y visualizado correctamente en el archivo de documentación.
- [ ] **[Uriel L.]** Script de inicialización probado y ejecutado con éxito directamente en el clúster de Atlas con conexión backend establecida.

---

## 📈 Backlog Summary

| User Story | Épica | Prioridad | Artefacto / Entregable | Responsable Principal | Puntos |
|------------|-------|-----------|------------------------|-----------------------|:------:|
| US-ETS-01-01 | Setup & Design | 🔴 Crítica | `README.md` / `Pledge` | Juan Pablo Dominguez | 3 |
| US-ETS-01-02 | Setup & Design | 🔴 Crítica | `docs/schema.mmd` | Uriel Martínez / Diana H. | 5 |
| US-ETS-01-03 | Setup & Design | 🟠 Alta | `create_collections.js`| Juan Pablo Dominguez | 3 |
| **TOTAL** | | | | | **11** |

</br>
