# 🎟️ Event Ticket System — Sprint Backlog

---

## 🎯 Product Goal Reference

> Build an online reservation platform for mass ticket sales, capable of processing concurrent transactions with **zero data loss**, guaranteeing **real-time capacity consistency**, and offering advanced financial auditing tools through optimized **NoSQL queries**.

---

## 📋 Table of Contents

- [Sprint Goal](#-1-sprint-goal)
- [Sprint Parameters & Capacity Plan](#-2-sprint-parameters--capacity-plan)
- [Selected Epics & User Stories](#-3-selected-epics--user-stories)
  - [Epic 1 — Capacity Management and Logistics](#-epic-1--capacity-management-and-logistics)
    - [US-ETS-01-01: Atomic Inventory Control](#us-ets-01-01-atomic-inventory-control-and-overbooking-prevention)
    - [US-ETS-01-02: Identity Validation at Access Points](#us-ets-01-02-search-and-identity-validation-at-access-points)
  - [Epic 2 — Auditing, Reporting, and Financial Security](#-epic-2--auditing-reporting-and-financial-security)
    - [US-ETS-02-01: Revenue Channel Segmentation](#us-ets-02-01-financial-revenue-channel-segmentation)
    - [US-ETS-02-02: Anomalous Transaction Reporting](#us-ets-02-02-isolation-and-reporting-of-anomalous-transactions)
  - [Epic 3 — Traceability and Data Quality](#-epic-3--traceability-and-data-quality)
    - [US-ETS-03-01: Internal Modification History](#us-ets-03-01-internal-modification-history-in-tickets)
- [Impediments & Dependencies](#-6-impediments--dependencies)
- [Definition of Done (DoD)](#-7-definition-of-done-dod)
- [Backlog Summary](#-backlog-summary)

---

## 🏁 1. Sprint Goal

> At the end of this sprint, the system will **atomically manage ticket inventory**, allow staff to **validate attendee identities in under 50 ms**, **segment financial revenue by payment channel**, **detect anomalous transactions**, and **maintain a full modification history** per ticket — all backed by optimized MongoDB operators.

| Parameter | Value |
|-----------|-------|
| 🗓️ Sprint | Sprint 1 — Core Foundations |
| 📅 Start | June 02, 2026 |
| 📅 End | June 13, 2026 |
| ⏱️ Duration | 2 weeks |
| 🗄️ Database | MongoDB (NoSQL) |
| 🔢 Total Points | 29 story points |

---

## 👥 2. Sprint Parameters & Capacity Plan

| Team Member | Role | Capacity |
|-------------|------|----------|
| Ana García | Backend / MongoDB | 20h |
| Luis Torres | Frontend / UI | 20h |
| María Soto | Full Stack | 20h |
| Carlos Ramos | QA / Testing | 20h |
| **Total** | | **80h / 29 pts** |

---

## 🧩 3. Selected Epics & User Stories

---

### 🧱 Epic 1 — Capacity Management and Logistics

> Strict control of ticket inventory and secure access management to prevent overbooking at all event venues.

---

#### US-ETS-01-01: Atomic Inventory Control and Overbooking Prevention

**MongoDB Operator:** `$inc` &nbsp;|&nbsp; **Priority:** 🔴 Critical &nbsp;|&nbsp; **Story Points:** 8

##### User Story

> **As** an Event Organizer (Organizing Committee),
> **I want** to update the available ticket inventory by subtracting capacity atomically and immediately with each successful purchase,
> **So that** the venue's capacity limit is respected and ticket oversales are legally avoided.

##### Acceptance Criteria

| # | Given | When | Then |
|---|-------|------|------|
| 1 | Event `"Concierto 2026"` has `disponibles: 10` | A customer completes a successful payment for 1 ticket | The system immediately subtracts `1` from the available count |
| 2 | A purchase is being processed | Another user tries to check availability at the same time | The system does not show the old availability until the transaction ends |
| 3 | The subtraction is applied and the operation finishes | — | Available tickets now show `9` in real time |

##### Technical Tasks

- [ ] Atomic update using `$inc` on purchase confirmation
- [ ] `POST /orders` endpoint with inventory update
- [ ] Concurrent transaction guard (no race conditions)
- [ ] Real-time availability query after update
- [ ] Unit tests for concurrency scenarios

---

#### US-ETS-01-02: Search and Identity Validation at Access Points

**MongoDB Operator:** `findOne()` &nbsp;|&nbsp; **Priority:** 🟠 High &nbsp;|&nbsp; **Story Points:** 5

##### User Story

> **As** an Event Staff Receptionist,
> **I want** to search for an attendee using their unique identifier within the database,
> **So that** I can validate their ticket at the access gate in under 50 ms and speed up the entrance queue.

##### Acceptance Criteria

| # | Given | When | Then |
|---|-------|------|------|
| 1 | Attendee `"Alice Johnson"` is registered in the system | Staff scans or types her ID at the entrance terminal | The system finds her record instantly via `findOne()` |
| 2 | The record is found | The scanner reads the response | The system returns a **JSON object** `{}`, not an array `[]` |
| 3 | The lookup is triggered | Response time is measured | The result appears in **under 50 ms** |

##### Technical Tasks

- [ ] `GET /attendees/:id` endpoint using `findOne()`
- [ ] Index on `attendee.uniqueId` field for performance
- [ ] Response time test (assert < 50ms)
- [ ] Scanner / search UI component
- [ ] Validate response is `{}` not `[]`

---

### 🧱 Epic 2 — Auditing, Reporting, and Financial Security

> Advanced comparison and logical operators to ensure full monetary transparency and fraud detection.

---

#### US-ETS-02-01: Financial Revenue Channel Segmentation

**MongoDB Operator:** `$in` &nbsp;|&nbsp; **Priority:** 🟠 High &nbsp;|&nbsp; **Story Points:** 5

##### User Story

> **As** a Finance Director (CFO) of the Ticketing Company,
> **I want** to filter transactions based on a list of approved banking payment methods,
> **So that** I can calculate exact bank commissions and segment revenue at the end of the day.

##### Acceptance Criteria

| # | Given | When | Then |
|---|-------|------|------|
| 1 | Card and Bank Transfer are the approved payment methods | The CFO generates the end-of-day report | Only transactions from those two methods appear |
| 2 | Some transactions were paid in cash | The CFO generates the end-of-day report | Cash transactions are **not** included in the report |
| 3 | The report filter is applied | Results are displayed | Every record shown belongs exclusively to Card or Bank Transfer |

##### Technical Tasks

- [ ] `GET /reports/revenue` endpoint with `$in` filter
- [ ] Payment method filter logic (`["Card", "Bank Transfer"]`)
- [ ] End-of-day aggregation pipeline
- [ ] Revenue report UI with channel breakdown
- [ ] Integration test: cash excluded from results

---

#### US-ETS-02-02: Isolation and Reporting of Anomalous Transactions

**MongoDB Operator:** `$not` / `$eq` &nbsp;|&nbsp; **Priority:** 🔴 Critical &nbsp;|&nbsp; **Story Points:** 8

##### User Story

> **As** a System Security Auditor,
> **I want** to isolate transaction documents whose amounts differ from the established standard price or whose statuses are unsuccessful,
> **So that** I can identify financial anomalies or attempted fraud in online transactions.

##### Acceptance Criteria

| # | Given | When | Then |
|---|-------|------|------|
| 1 | The standard ticket price is `200` | The auditor runs the anomaly report | Transactions with exactly `total_amount = 200` are **not** flagged |
| 2 | A transaction with `total_amount = 500` exists | The auditor runs the anomaly report | That transaction is highlighted as suspicious |
| 3 | A transaction with `total_amount = null` exists | The auditor runs the anomaly report | That transaction is also flagged, as it cannot be verified |

##### Technical Tasks

- [ ] Anomaly detection query using `$not` / `$eq`
- [ ] Flag `null` amounts as unverifiable
- [ ] `GET /reports/anomalies` endpoint
- [ ] Audit report UI with suspicious items highlighted
- [ ] Unit tests: standard price not flagged, 500 and null flagged

---

### 🧱 Epic 3 — Traceability and Data Quality

> Ensures that documentation, seed data, and history logs maintain a high technical standard within the development environment.

---

#### US-ETS-03-01: Internal Modification History in Tickets

**MongoDB Operator:** `$push` &nbsp;|&nbsp; **Priority:** 🟡 Medium &nbsp;|&nbsp; **Story Points:** 3

##### User Story

> **As** a Technical Support Engineer,
> **I want** to add informative notes or change logs within the same reservation document,
> **So that** full traceability of a ticket's lifecycle is maintained without fragmenting the database into multiple tables.

##### Acceptance Criteria

| # | Given | When | Then |
|---|-------|------|------|
| 1 | A ticket is in `"PENDING"` status | A technician adds `"Customer reported a bank issue"` | The note is appended to the ticket's `logs` array via `$push` |
| 2 | The note is saved | The ticket is opened again | The new note appears at the **end** of the history list |
| 3 | The update is complete | All other ticket fields are checked | No existing customer data was modified or lost |

##### Technical Tasks

- [ ] `PATCH /tickets/:id/logs` endpoint using `$push`
- [ ] `logs` array field in Ticket model schema
- [ ] Ticket history panel UI
- [ ] Immutability tests: existing fields unchanged after push
- [ ] Seed data with sample log entries

---

## ⚠️ 6. Impediments & Dependencies

| # | Impediment | Owner |
|---|------------|-------|
| 1 | MongoDB Atlas cluster needs write-

## 📊 Backlog Summary

| User Story | Epic | Priority | MongoDB Operator | Story Points |
|------------|------|----------|-----------------|:------------:|
| US-ETS-01-01 | Capacity Management | 🔴 Critical | `$inc` | 8 |
| US-ETS-01-02 | Capacity Management | 🟠 High | `findOne()` | 5 |
| US-ETS-02-01 | Financial Security | 🟠 High | `$in` | 5 |
| US-ETS-02-02 | Financial Security | 🔴 Critical | `$not` / `$eq` | 8 |
| US-ETS-03-01 | Traceability | 🟡 Medium | `$push` | 3 |
| **Total** | | | | **29** |
