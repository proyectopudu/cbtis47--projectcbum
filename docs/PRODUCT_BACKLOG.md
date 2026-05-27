# 🎟️ Event Ticket System — Product Backlog 🎟️

---

## 🎯 Product Goal

> Build an online reservation platform for mass ticket sales, capable of processing concurrent transactions with **zero data loss**, guaranteeing **real-time capacity consistency**, and offering advanced financial auditing tools through optimized NoSQL queries.

---

## 📋 Table of Contents

- [Epic 1 — Capacity Management and Logistics](#-epic-1-capacity-management-and-logistics)
  - [US-ETS-01-01: Atomic Inventory Control](#us-ets-01-01-atomic-inventory-control-and-overbooking-prevention)
  - [US-ETS-01-02: Identity Validation at Access Points](#us-ets-01-02-search-and-identity-validation-at-access-points)
- [Epic 2 — Auditing, Reporting, and Financial Security](#-epic-2-auditing-reporting-and-financial-security)
  - [US-ETS-02-01: Revenue Channel Segmentation](#us-ets-02-01-financial-revenue-channel-segmentation)
  - [US-ETS-02-02: Anomalous Transaction Reporting](#us-ets-02-02-isolation-and-reporting-of-anomalous-transactions)
- [Epic 3 — Traceability and Data Quality](#-epic-3-traceability-and-data-quality)
  - [US-ETS-03-01: Internal Modification History](#us-ets-03-01-internal-modification-history-in-tickets)

---

## 🧱 Epic 1: Capacity Management and Logistics

Strict control of ticket inventory and secure access management to prevent overbooking at all event venues.

---

### US-ETS-01-01: Atomic Inventory Control and Overbooking Prevention

#### User Story

> **As** an Event Organizer (Organizing Committee),
> **I want** to update the available ticket inventory by subtracting capacity atomically and immediately with each successful purchase,
> **So that** the venue's capacity limit is respected and ticket oversales are legally avoided.

#### Acceptance Criteria

|#|Given                                                        |When                                                          |Then                                                                 |
|-|-------------------------------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------------|
|1|Event `"Concierto 2026"` has `disponibles: 10`               |A customer completes a successful payment for 1 ticket        |The system immediately subtracts `1` from the available count        |
|2|A purchase is being processed                                |Another user tries to check availability at the same time     |The system does not show the old availability until transaction ends |
|3|The subtraction is applied                                   |The operation finishes                                        |Available tickets now show `9` in real time                          |

---

### US-ETS-01-02: Search and Identity Validation at Access Points

#### User Story

> **As** an Event Staff Receptionist,
> **I want** to search for an attendee using their unique identifier within the database,
> **So that** I can validate their ticket at the access gate in under 50 ms and speed up the entrance queue.

#### Acceptance Criteria

|#|Given                                                        |When                                                          |Then                                                                 |
|-|-------------------------------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------------|
|1|Attendee `"Alice Johnson"` is registered in the system       |Staff scans or types her ID at the entrance terminal          |The system finds her record instantly via `findOne()`                |
|2|The record is found                                          |The scanner reads the response                                |The system returns a **JSON object** `{}`, not an array `[]`         |
|3|The lookup is triggered                                      |Response time is measured                                     |The result appears in **below 50 ms**                                |

---

## 🧱 Epic 2: Auditing, Reporting, and Financial Security

Advanced comparison and logical operators to ensure full monetary transparency and fraud detection.

---

### US-ETS-02-01: Financial Revenue Channel Segmentation

#### User Story

> **As** a Finance Director (CFO) of the Ticketing Company,
> **I want** to filter transactions based on a list of approved banking payment methods,
> **So that** I can calculate exact bank commissions and segment revenue at the end of the day.

#### Acceptance Criteria

|#|Given                                                        |When                                                          |Then                                                                 |
|-|-------------------------------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------------|
|1|Card and Bank Transfer are the approved payment methods      |The CFO generates the end-of-day report                       |Only transactions from those two methods appear                      |
|2|Some transactions were paid in cash                          |The CFO generates the end-of-day report                       |Cash transactions are **not** included in the report                 |
|3|The report filter is applied                                 |Results are displayed                                         |Every record shown belongs exclusively to Card or Bank Transfer      |

---

### US-ETS-02-02: Isolation and Reporting of Anomalous Transactions

#### User Story

> **As** a System Security Auditor,
> **I want** to isolate transaction documents whose amounts differ from the established standard price or whose statuses are unsuccessful,
> **So that** I can identify financial anomalies or attempted fraud in online transactions.

#### Acceptance Criteria

|#|Given                                                        |When                                                          |Then                                                                 |
|-|-------------------------------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------------|
|1|The standard ticket price is `200`                           |The auditor runs the anomaly report                           |Transactions with exactly `total_amount = 200` are **not** flagged   |
|2|A transaction with `total_amount = 500` exists               |The auditor runs the anomaly report                           |That transaction is highlighted as suspicious                        |
|3|A transaction with `total_amount = null` exists              |The auditor runs the anomaly report                           |That transaction is also flagged, as it cannot be verified           |

---

## 🧱 Epic 3: Traceability and Data Quality

Ensures that documentation, seed data, and history logs maintain a high technical standard within the development environment.

---

### US-ETS-03-01: Internal Modification History in Tickets

#### User Story

> **As** a Technical Support Engineer,
> **I want** to add informative notes or change logs within the same reservation document,
> **So that** full traceability of a ticket's lifecycle is maintained without fragmenting the database into multiple tables.

#### Acceptance Criteria

|#|Given                                                        |When                                                          |Then                                                                 |
|-|-------------------------------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------------|
|1|A ticket is in `"PENDING"` status                            |A technician adds `"Customer reported a bank issue"`          |The note is appended to the ticket's `logs` array via `$push`        |
|2|The note is saved                                            |The ticket is opened again                                    |The new note appears at the **end** of the history list              |
|3|The update is complete                                       |All other ticket fields are checked                           |No existing customer data was modified or lost                       |

---

## 📊 Backlog Summary

|User Story     |Epic               |Priority       |MongoDB Operator|Story Points|
|---------------|-------------------|---------------|----------------|------------|
|US-ETS-01-01   |Capacity Management|🔴 Critical    |`$inc`          |8           |
|US-ETS-01-02   |Capacity Management|🟠 High        |`findOne()`     |5           |
|US-ETS-02-01   |Financial Security |🟠 High        |`$in`           |5           |
|US-ETS-02-02   |Financial Security |🔴 Critical    |`$not` / `$eq`  |8           |
|US-ETS-03-01   |Traceability       |🟡 Medium      |`$push`         |3           |
