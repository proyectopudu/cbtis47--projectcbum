# 🎟️ Event Ticket System — Product Backlog 🎟️


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


-----

### PBI-02: Search and Identity Validation at Access Points


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


-----

## 🧱 Epic 2: Auditing, Reporting, and Financial Security


Advanced comparison and logical operators to ensure full monetary transparency and fraud detection.

-----

### PBI-03: Financial Revenue Channel Segmentation


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



-----

### PBI-04: Isolation and Reporting of Anomalous Transactions


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





-----

##  Epic 3: Traceability and Data Quality


Ensures that documentation, seed data, and history logs maintain a high technical standard within the development environment.

-----

### PBI-05: Internal Modification History in Tickets

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


## Backlog  Summary

|PBI   |Epic               |Priority  |MongoDB Operator|Story Points|
|------|-------------------|----------|----------------|------------|
|PBI-01|Capacity Management|🔴 Critical|`$inc`          |8           |
|PBI-02|Capacity Management|🟠 High    |`findOne()`     |5           |
|PBI-03|Financial Security |🟠 High    |`$in`           |5           |
|PBI-04|Financial Security |🔴 Critical|`$not` / `$eq`  |8           |
|PBI-05|Traceability       |🟡 Medium  |`$push`         |3           |

-----


-----


