# Auditoría de Rendimiento - Event Ticket System (Reservas)

**Concepto NoSQL:** Índices y Performance (`createIndex`, `explain`)  
**Semana:** S16 (1 al 5 de Junio)  
**Proyecto:** Sistema de Boletos de Conciertos (Event Ticket System)

---

## 1. Identificación de la Consulta a Optimizar
En nuestro sistema de tickets, una de las operaciones más recurrentes es buscar los boletos asociados a un asistente en específico (`attendee_id`) para validar su acceso en la entrada o mostrar sus reservas en la aplicación.

### Consulta bajo prueba:
```javascript
db.Tickets.find({ attendee_id: "a1" })

2. Auditoría Inicial (Antes de Índices)
Ejecutamos la consulta utilizando el método .explain("executionStats") sobre la colección Tickets que inicialmente contaba con 10 documentos.

Métricas obtenidas del JSON de MongoDB:
Estrategia de ejecución (stage): COLLSCAN (Collection Scan).

Documentos examinados (totalDocsExamined): 10 documentos.

Documentos devueltos (nReturned): 0 (en la prueba inicial con 'usr_001').

Diagnóstico: Al estar en COLLSCAN, MongoDB se ve obligado a leer todos y cada uno de los documentos de la colección desde el disco duro. Con 10 registros no afecta, pero en producción con miles de boletos vendidos, esto causaría lentitud extrema y saturación del servidor.

3. Estrategia de Indexación
Para solucionar el escaneo masivo, aplicamos un índice de tipo de ordenación ascendente (definido por el valor 1) sobre el campo que usamos como llave foránea de relación:

db.Tickets.createIndex({ attendee_id: 1 })

Resultado de la consola: attendee_id_1 (Índice creado exitosamente).

4. Auditoría Final (Después de Índices)
Volvimos a ejecutar la misma consulta con .explain("executionStats") para verificar el cambio en el plan de ejecución de la base de datos.

Métricas optimizadas:
Estrategia de ejecución (stage): IXSCAN (Index Scan) seguido de un FETCH.

Documentos examinados (totalDocsExamined): 1 documento.

Documentos devueltos (nReturned): 1 documento (Boleto correspondiente al asistente "a1").

5. Conclusión de la Optimización
La implementación del índice attendee_id_1 cumplió con el objetivo de optimización de la Semana 16. Logramos evitar por completo el escaneo lineal de la colección (COLLSCAN), permitiendo que MongoDB consulte de forma directa y precisa el registro indexado. Esto reduce el impacto en CPU y memoria, garantizando una validación de accesos veloz y eficiente para el sistema de eventos.
