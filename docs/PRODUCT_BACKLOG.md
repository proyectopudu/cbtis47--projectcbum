# 🎟️ Event Ticket System — Product Backlog


-----

## 🎯 Product Goal

> Build an online reservation platform for mass ticket sales, capable of processing concurrent transactions with **zero data loss**, guaranteeing **real-time capacity consistency**, and offering advanced financial auditing tools through optimized NoSQL queries.

-----

## 📋 Table of Contents

- [Epic 1 — Capacity Management and Logistics](#-epic-1-capacity-management-and-logistics)
  - [PBI-01: Atomic Inventory Control](#pbi-01-atomic-inventory-control-and-overbooking-prevention)
  - [PBI-02: Identity Validation at Access Points](#pbi-02-search-and-identity-validation-at-access-points)
- [Epic 2 — Auditing, Reporting, and Financial Security](#-epic-2-auditing-reporting-and-financial-security)
  - [PBI-03: Revenue Channel Segmentation](#pbi-03-financial-revenue-channel-segmentation)
  - [PBI-04: Anomalous Transaction Reporting](#pbi-04-isolation-and-reporting-of-anomalous-transactions)
- [Epic 3 — Traceability and Data Quality](#-epic-3-traceability-and-data-quality)
  - [PBI-05: Internal Modification History](#pbi-05-internal-modification-history-in-tickets)

-----

## 🧱 Epic 1: Capacity Management and Logistics


Strict control of ticket inventory and secure access management to prevent overbooking at all event venues.

-----

### PBI-01: Atomic Inventory Control and Overbooking Prevention


#### User Story

> **As** an Event Organizer (Organizing Committee),  
> **I want** to update the available ticket inventory by subtracting capacity atomically and immediately with each successful purchase,  
> **So that** the venue’s capacity limit is respected and ticket oversales are legally avoided.

#### Acceptance Criteria

|#|Given                                         |When                                               |Then                                                               |
|-|----------------------------------------------|---------------------------------------------------|-------------------------------------------------------------------|
|1|Event `"Concierto 2026"` has `disponibles: 10`|A customer completes a digital payment for 1 ticket|The `$inc` operator is applied with `-1` on the `disponibles` field|
|2|Transaction is being processed                |Any concurrent read occurs                         |No other thread can read the previous value mid-transaction        |
|3|Decrement is applied                          |Query resolves                                     |Capacity updates **immediately** to `9`                            |

#### Gherkin Scenarios

```gherkin
Feature: Atomic Inventory Control

  Scenario: Successful purchase decrements inventory
    Given the event "Concierto 2026" has disponibles: 10
    When a customer completes the payment for 1 ticket
    Then the disponibles field is updated to 9

  Scenario: Purchase rejected when inventory is exhausted
    Given the event "Concierto 2026" has disponibles: 0
    When a customer attempts to purchase a ticket
    Then the system throws the error "Boleto agotado"

  Scenario: Network failure during purchase
    Given the event "Concierto 2026" has disponibles: 10
    When a network error occurs during the transaction
    Then the system throws the error "Error de red, intente más tarde"
```



#### Unit Test Approach

```js
test("should reject excess purchases and not go below zero", async () => {
  const requests = Array(50).fill(null).map(() => purchaseTicket("Concierto 2026"));
  const results = await Promise.allSettled(requests);

  const fulfilled = results.filter(r => r.status === "fulfilled").length;
  const event = await db.events.findOne({ name: "Concierto 2026" });

  expect(fulfilled).toBe(40);
  expect(event.disponibles).toBe(0);
});

test("should handle sold out and network errors", async () => {
  await db.events.updateOne({ name: "Concierto 2026" }, { $set: { disponibles: 0 } });
  await expect(purchaseTicket("Concierto 2026"))
    .rejects.toThrow("Boleto agotado");

  jest.spyOn(db.events, "findOneAndUpdate").mockRejectedValue(new Error("ECONNREFUSED"));
  await expect(purchaseTicket("Concierto 2026"))
    .rejects.toThrow("Error de red, intente más tarde");
});
```

-----

### PBI-02: Search and Identity Validation at Access Points

![Priority](https://img.shields.io/badge/priority-high-orange?style=flat-square)
![Operator](https://img.shields.io/badge/MongoDB_method-findOne()-47A248?style=flat-square&logo=mongodb&logoColor=white)

#### User Story

> **As** an Event Staff Receptionist,  
> **I want** to search for an attendee using their unique identifier within the database,  
> **So that** I can validate their ticket at the access gate in under 50 ms and speed up the entrance queue.

#### Acceptance Criteria

|#|Given                                                                |When                                        |Then                                             |
|-|---------------------------------------------------------------------|--------------------------------------------|-------------------------------------------------|
|1|Attendee `"a1"` (Alice Johnson) exists in the `asistentes` collection|Staff enters `"a1"` into the search terminal|Query executes via `findOne()`                   |
|2|Query resolves                                                       |Scanner software reads the response         |Returns a **JSON object** `{}`, not an array `[]`|
|3|Record exists                                                        |Response time is measured                   |MongoDB response is **below 50 ms**              |

#### Gherkin Scenarios

```gherkin
Feature: Identity Validation at Access Points

  Scenario: Successful attendee search
    Given the attendee "a1" exists in the asistentes collection
    When staff enters "a1" into the search terminal
    Then the system returns a JSON object in less than 50ms

  Scenario: Attendee not found
    Given the id "id-inexistente" does not exist in the database
    When staff performs the search
    Then the system throws the error "Boleto no encontrado"

  Scenario: Network failure during search
    Given the search terminal is connected
    When a network error occurs during the query
    Then the system throws the error "Error de red, intente más tarde"
```


#### Unit Test Approach

```js
test("should return a single attendee object within 50ms", async () => {
  const start = Date.now();
  const result = await db.asistentes.findOne({ attendee_id: "a1" });
  const elapsed = Date.now() - start;

  expect(typeof result).toBe("object");
  expect(result).not.toBeNull();
  expect(Array.isArray(result)).toBe(false);
  expect(elapsed).toBeLessThan(50);
});

test("should handle not found and network errors", async () => {
  await expect(findAttendee("id-inexistente"))
    .rejects.toThrow("Boleto no encontrado");

  jest.spyOn(db.asistentes, "findOne").mockRejectedValue(new Error("ECONNREFUSED"));
  await expect(findAttendee("a1"))
    .rejects.toThrow("Error de red, intente más tarde");
});
```

-----

## 🧱 Epic 2: Auditing, Reporting, and Financial Security

![Owner](https://img.shields.io/badge/requested_by-Finance_Director_(CFO)-6366f1?style=flat-square)

Advanced comparison and logical operators to ensure full monetary transparency and fraud detection.

-----

### PBI-03: Financial Revenue Channel Segmentation

![Priority](https://img.shields.io/badge/priority-high-orange?style=flat-square)
![Operator](https://img.shields.io/badge/MongoDB_operator-%24in-47A248?style=flat-square&logo=mongodb&logoColor=white)

#### User Story

> **As** a Finance Director (CFO) of the Ticketing Company,  
> **I want** to filter transactions based on a list of approved banking payment methods,  
> **So that** I can calculate exact bank commissions and segment revenue at the end of the day.

#### Acceptance Criteria

|`method_id`|Method       |Included in query?|
|-----------|-------------|------------------|
|`pm1`      |Card         |✅ Yes             |
|`pm2`      |Bank Transfer|✅ Yes             |
|`pm3`      |Cash         |❌ Excluded        |

#### Gherkin Scenarios

```gherkin
Feature: Financial Revenue Channel Segmentation

  Scenario: Filter approved banking transactions
    Given transactions exist with method_id "pm1", "pm2" and "pm3"
    When the CFO runs the banking channel report
    Then only transactions with "pm1" and "pm2" are returned

  Scenario: No banking transactions available
    Given no transactions exist with method_id "pm1" or "pm2"
    When the CFO runs the report
    Then the system throws "No se encontraron transacciones bancarias"

  Scenario: Network failure during report generation
    Given the reporting system is connected
    When a network error occurs during the query
    Then the system throws the error "Error de red, intente más tarde"
```



#### Unit Test Approach

```js
test("should only return card and bank transfer transactions", async () => {
  const results = await db.transactions
    .find({ method_id: { $in: ["pm1", "pm2"] } })
    .toArray();

  const hasCash = results.some(doc => doc.method_id === "pm3");
  expect(hasCash).toBe(false);
});

test("should handle empty results and network errors", async () => {
  await db.transactions.deleteMany({});
  await expect(getBankingTransactions())
    .rejects.toThrow("No se encontraron transacciones bancarias");

  jest.spyOn(db.transactions, "find").mockRejectedValue(new Error("ECONNREFUSED"));
  await expect(getBankingTransactions())
    .rejects.toThrow("Error de red, intente más tarde");
});
```

-----

### PBI-04: Isolation and Reporting of Anomalous Transactions

![Priority](https://img.shields.io/badge/priority-critical-red?style=flat-square)
![Operator](https://img.shields.io/badge/MongoDB_operator-%24not-47A248?style=flat-square&logo=mongodb&logoColor=white)

#### User Story

> **As** a System Security Auditor,  
> **I want** to isolate transaction documents whose amounts differ from the established standard price or whose statuses are unsuccessful,  
> **So that** I can identify financial anomalies or attempted fraud in online transactions.

#### Acceptance Criteria

|`total_amount`        |Returned? |
|----------------------|----------|
|`200` (standard price)|❌ Excluded|
|`500` (anomalous)     |✅ Returned|
|`null`                |✅ Returned|

#### Gherkin Scenarios

```gherkin
Feature: Anomalous Transaction Reporting

  Scenario: Detection of anomalous transactions
    Given transactions exist with amounts 200, 200, 200, 500, 500
    When the auditor runs the anomaly report
    Then the system returns exactly 2 documents with amount different from 200

  Scenario: No anomalies detected
    Given all transactions have amount 200
    When the auditor runs the report
    Then the system throws "No se encontraron transacciones anómalas"

  Scenario: Network failure during anomaly detection
    Given the auditing system is connected
    When a network error occurs during the query
    Then the system throws the error "Error de red, intente más tarde"
```


#### Unit Test Approach

```js
test("should return exactly 2 anomalous transactions", async () => {
  const results = await db.transactions
    .find({ total_amount: { $not: { $eq: 200 } } })
    .toArray();

  expect(results.length).toBe(2);
  results.forEach(doc => expect(doc.total_amount).not.toBe(200));
});

test("should handle no anomalies and network errors", async () => {
  await db.transactions.deleteMany({ total_amount: { $not: { $eq: 200 } } });
  await expect(getAnomalousTransactions())
    .rejects.toThrow("No se encontraron transacciones anómalas");

  jest.spyOn(db.transactions, "find").mockRejectedValue(new Error("ECONNREFUSED"));
  await expect(getAnomalousTransactions())
    .rejects.toThrow("Error de red, intente más tarde");
});
```

-----

## 🧱 Epic 3: Traceability and Data Quality

![Owner](https://img.shields.io/badge/requested_by-Repository_Maintenance-6366f1?style=flat-square)

Ensures that documentation, seed data, and history logs maintain a high technical standard within the development environment.

-----

### PBI-05: Internal Modification History in Tickets

![Priority](https://img.shields.io/badge/priority-medium-yellow?style=flat-square)
![Operator](https://img.shields.io/badge/MongoDB_operator-%24push-47A248?style=flat-square&logo=mongodb&logoColor=white)

#### User Story

> **As** a Technical Support Engineer,  
> **I want** to add informative notes or change logs within the same reservation document,  
> **So that** full traceability of a ticket’s lifecycle is maintained without fragmenting the database into multiple tables.

#### Acceptance Criteria

|#|Given                            |When                                                        |Then                                                     |
|-|---------------------------------|------------------------------------------------------------|---------------------------------------------------------|
|1|A ticket is in `"PENDING"` status|A technician adds `"Cliente reporta problemas con el banco"`|A `$push` operation appends the entry to the `logs` array|
|2|Push executes                    |Document is read back                                       |`logs` array contains the new entry at the **end**       |
|3|Update completes                 |All other fields are inspected                              |No existing user data is overwritten                     |

#### Gherkin Scenarios

```gherkin
Feature: Internal Modification History in Tickets

  Scenario: Add a note to ticket history
    Given the ticket "TKT-001" exists with status "PENDING"
    When support adds "Cliente reporta problemas con el banco"
    Then the logs array increases by 1 entry without modifying existing data

  Scenario: Ticket not found when adding a note
    Given the ticket "TKT-999" does not exist in the database
    When support attempts to add a note
    Then the system throws the error "Boleto no encontrado"

  Scenario: Network failure when adding a note
    Given the ticket "TKT-001" exists in the database
    When a network error occurs during the update
    Then the system throws the error "Error de red, intente más tarde"
```


#### Unit Test Approach

```js
test("should append a log entry without overwriting existing data", async () => {
  const before = await db.tickets.findOne({ ticket_id: "TKT-001" });
  const previousLength = before.logs.length;

  await db.tickets.updateOne(
    { ticket_id: "TKT-001" },
    { $push: { logs: { message: "Cliente reporta problemas con el banco" } } }
  );

  const after = await db.tickets.findOne({ ticket_id: "TKT-001" });

  expect(Array.isArray(after.logs)).toBe(true);
  expect(after.logs.length).toBe(previousLength + 1);
  expect(after.name).toBe(before.name);
});

test("should handle ticket not found and network errors", async () => {
  await expect(addTicketLog("TKT-999", "Prueba"))
    .rejects.toThrow("Boleto no encontrado");

  jest.spyOn(db.tickets, "updateOne").mockRejectedValue(new Error("ECONNREFUSED"));
  await expect(addTicketLog("TKT-001", "Prueba"))
    .rejects.toThrow("Error de red, intente más tarde");
});
```

-----

## 📊 Backlog  Summary

|PBI   |Epic               |Priority  |MongoDB Operator|Story Points|
|------|-------------------|----------|----------------|------------|
|PBI-01|Capacity Management|🔴 Critical|`$inc`          |8           |
|PBI-02|Capacity Management|🟠 High    |`findOne()`     |5           |
|PBI-03|Financial Security |🟠 High    |`$in`           |5           |
|PBI-04|Financial Security |🔴 Critical|`$not` / `$eq`  |8           |
|PBI-05|Traceability       |🟡 Medium  |`$push`         |3           |

-----

## 🛠️ Tech Stack

![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/Testing-Jest-C21325?style=flat-square&logo=jest&logoColor=white)

-----


