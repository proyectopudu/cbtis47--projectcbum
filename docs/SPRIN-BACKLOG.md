# 🎟️ Sprint Backlog — Event Ticket System
### Sprint 1 · Core Foundations & Atomic Operations

---

> **Repository:** `cbtis47--projectcbum`
> **Branch:** `sprint/1-core-foundations`
> **Stack:** Java · Spring Boot · MongoDB · Maven
> **Sprint Duration:** June 02 – June 13, 2026 · 2 weeks

---

## 📋 Table of Contents

- [Product Goal](#-product-goal)
- [1. Sprint Goal](#1-sprint-goal)
- [2. Capacity Plan](#2-capacity-plan)
- [3. Epics & User Stories](#3-epics--user-stories)
  - [Epic 1 — Capacity Management](#-epic-1--capacity-management-and-logistics)
  - [Epic 2 — Financial Security](#-epic-2--auditing-reporting-and-financial-security)
  - [Epic 3 — Traceability](#-epic-3--traceability-and-data-quality)
- [6. Impediments & Dependencies](#6-impediments--dependencies)
- [7. Definition of Done](#7-definition-of-done-dod)
- [Backlog Summary](#-backlog-summary)

---

## 🎯 Product Goal

> Build an online reservation platform for mass ticket sales, capable of processing concurrent transactions with **zero data loss**, guaranteeing **real-time capacity consistency**, and offering advanced financial auditing tools through optimized **NoSQL queries**.

---

## 1. Sprint Goal

> At the end of this sprint, the system will **atomically manage ticket inventory**, allow staff to **validate attendee identities in under 50 ms**, **segment financial revenue by payment channel**, **detect anomalous transactions**, and maintain a **full modification history** per ticket — all backed by optimized MongoDB operators.

| Parameter | Value |
|-----------|-------|
| Sprint | `sprint-1` |
| Start | `2026-06-02` |
| End | `2026-06-13` |
| Total Points | `29 pts` |
| Database | MongoDB |
| Backend | Java 17 + Spring Boot 3 |

---

## 2. Capacity Plan

| Member | Role | Hours |
|--------|------|-------|
| Ana García | Backend / MongoDB | 20h |
| Luis Torres | Frontend / UI | 20h |
| María Soto | Full Stack | 20h |
| Carlos Ramos | QA / Testing | 20h |
| **Total** | | **80h** |

---

## 3. Epics & User Stories

---

## 🧱 Epic 1 — Capacity Management and Logistics

> Strict control of ticket inventory and secure access management to prevent overbooking at all event venues.

---

### `US-ETS-01-01` — Atomic Inventory Control and Overbooking Prevention

| Field | Value |
|-------|-------|
| **Priority** | 🔴 Critical |
| **Story Points** | `8` |
| **MongoDB Operator** | `$inc` |
| **Assignee** | Backend Dev |

#### 📖 User Story

```
AS     an Event Organizer
I WANT to subtract ticket inventory atomically on each successful purchase
SO     the venue capacity limit is respected and oversales are legally avoided
```

#### ✅ Acceptance Criteria

| # | Given | When | Then |
|---|-------|------|------|
| 1 | Event `"Concierto 2026"` has `disponibles: 10` | A customer completes a purchase | System subtracts `1` immediately |
| 2 | A purchase is being processed | Another user checks availability | Old count is NOT shown until transaction ends |
| 3 | Subtraction finishes | — | Field shows `9` in real time |

#### 🗄️ MongoDB Document — Event Schema

```json
// Collection: events
{
  "_id": ObjectId("64f1a2b3c4d5e6f7a8b9c0d1"),
  "name": "Concierto 2026",
  "venue": "Auditorio Nacional",
  "date": ISODate("2026-07-15T20:00:00Z"),
  "capacity": 500,
  "disponibles": 10,
  "price": 200.00,
  "status": "ACTIVE"
}
```

#### ☕ Java Implementation — Atomic `$inc` with Spring Data MongoDB

```java
// TicketService.java
@Service
@Transactional
public class TicketService {

    @Autowired
    private MongoTemplate mongoTemplate;

    /**
     * US-ETS-01-01: Atomically decrements available tickets.
     * Uses $inc to prevent race conditions on concurrent purchases.
     */
    public PurchaseResult purchaseTicket(String eventId, String userId) {

        Query query = new Query(
            Criteria.where("_id").is(new ObjectId(eventId))
                    .and("disponibles").gt(0)   // Guard: only if stock > 0
        );

        Update update = new Update()
            .inc("disponibles", -1);            // Atomic decrement

        FindAndModifyOptions options = FindAndModifyOptions
            .options().returnNew(true);         // Return updated document

        Event updatedEvent = mongoTemplate.findAndModify(
            query, update, options, Event.class
        );

        if (updatedEvent == null) {
            throw new OverbookingException("No available tickets for event: " + eventId);
        }

        Order order = buildOrder(userId, updatedEvent);
        return new PurchaseResult(order, updatedEvent.getDisponibles());
    }
}
```

```java
// OverbookingException.java
public class OverbookingException extends RuntimeException {
    public OverbookingException(String message) {
        super(message);
    }
}
```

#### 🧪 Unit Test

```java
// TicketServiceTest.java
@SpringBootTest
class TicketServiceTest {

    @Autowired
    private TicketService ticketService;

    @Autowired
    private EventRepository eventRepository;

    @Test
    @DisplayName("US-ETS-01-01: Inventory decrements atomically after purchase")
    void shouldDecrementInventoryAtomically() {
        // Given
        Event event = eventRepository.save(
            Event.builder().name("Concierto 2026").disponibles(10).build()
        );

        // When
        PurchaseResult result = ticketService.purchaseTicket(
            event.getId(), "user-001"
        );

        // Then
        assertThat(result.getRemainingTickets()).isEqualTo(9);
    }

    @Test
    @DisplayName("US-ETS-01-01: Throws OverbookingException when no tickets available")
    void shouldThrowWhenNoTicketsAvailable() {
        Event soldOut = eventRepository.save(
            Event.builder().name("Sold Out Event").disponibles(0).build()
        );

        assertThrows(OverbookingException.class, () ->
            ticketService.purchaseTicket(soldOut.getId(), "user-002")
        );
    }
}
```

---

### `US-ETS-01-02` — Search and Identity Validation at Access Points

| Field | Value |
|-------|-------|
| **Priority** | 🟠 High |
| **Story Points** | `5` |
| **MongoDB Operator** | `findOne()` |
| **Performance SLA** | `< 50 ms` |
| **Assignee** | Backend Dev |

#### 📖 User Story

```
AS     an Event Staff Receptionist
I WANT to find an attendee by their unique ID in under 50 ms
SO     I can validate their ticket at the access gate quickly
```

#### ✅ Acceptance Criteria

| # | Given | When | Then |
|---|-------|------|------|
| 1 | Attendee `"Alice Johnson"` is registered | Staff scans her ID | System finds record via `findOne()` |
| 2 | Record is found | Response is returned | Returns JSON object `{}`, NOT array `[]` |
| 3 | Lookup is triggered | Response time measured | Result appears in **< 50 ms** |

#### 🗄️ MongoDB Document — Attendee Schema

```json
// Collection: attendees
{
  "_id": ObjectId("64f1a2b3c4d5e6f7a8b9c0d2"),
  "uniqueId": "ATT-2026-00123",
  "fullName": "Alice Johnson",
  "email": "alice@example.com",
  "eventId": ObjectId("64f1a2b3c4d5e6f7a8b9c0d1"),
  "ticketType": "VIP",
  "status": "VALID",
  "checkedIn": false
}
```

#### 📐 MongoDB Index (Required for < 50ms SLA)

```javascript
// Run once on DB setup — ensures fast lookup by uniqueId
db.attendees.createIndex({ "uniqueId": 1 }, { unique: true })
```

#### ☕ Java Implementation — `findOne()` via Repository

```java
// AttendeeRepository.java
@Repository
public interface AttendeeRepository extends MongoRepository<Attendee, String> {

    /**
     * US-ETS-01-02: Returns a single attendee object (not a list)
     * Maps to MongoDB findOne() — uses the unique index on uniqueId
     */
    Optional<Attendee> findByUniqueId(String uniqueId);
}
```

```java
// AttendeeService.java
@Service
public class AttendeeService {

    @Autowired
    private AttendeeRepository attendeeRepository;

    /**
     * Validates attendee at access gate.
     * Returns Optional to force null-safe handling — never returns an array.
     */
    public AttendeeDTO validateAtGate(String uniqueId) {
        return attendeeRepository
            .findByUniqueId(uniqueId)
            .map(AttendeeDTO::fromEntity)
            .orElseThrow(() -> new AttendeeNotFoundException(
                "No attendee found with ID: " + uniqueId
            ));
    }
}
```

```java
// AttendeeController.java
@RestController
@RequestMapping("/api/attendees")
public class AttendeeController {

    @Autowired
    private AttendeeService attendeeService;

    /**
     * GET /api/attendees/{uniqueId}
     * Returns {} (object) — never [] (array)
     */
    @GetMapping("/{uniqueId}")
    public ResponseEntity<AttendeeDTO> findAttendee(@PathVariable String uniqueId) {
        AttendeeDTO attendee = attendeeService.validateAtGate(uniqueId);
        return ResponseEntity.ok(attendee);     // 200 OK + single JSON object
    }
}
```

#### 🧪 Unit Test

```java
@SpringBootTest
class AttendeeServiceTest {

    @Autowired
    private AttendeeService attendeeService;

    @Test
    @DisplayName("US-ETS-01-02: Returns single object, not list, within 50ms")
    void shouldReturnSingleObjectUnder50ms() {
        long start = System.currentTimeMillis();

        AttendeeDTO result = attendeeService.validateAtGate("ATT-2026-00123");

        long elapsed = System.currentTimeMillis() - start;

        assertThat(result).isNotNull();
        assertThat(result).isInstanceOf(AttendeeDTO.class); // {} not []
        assertThat(elapsed).isLessThan(50L);
    }
}
```

---

## 🧱 Epic 2 — Auditing, Reporting, and Financial Security

> Advanced comparison and logical operators to ensure full monetary transparency and fraud detection.

---

### `US-ETS-02-01` — Financial Revenue Channel Segmentation

| Field | Value |
|-------|-------|
| **Priority** | 🟠 High |
| **Story Points** | `5` |
| **MongoDB Operator** | `$in` |
| **Assignee** | Full Stack Dev |

#### 📖 User Story

```
AS     a Finance Director (CFO)
I WANT to filter transactions by approved banking payment methods
SO     I can calculate exact bank commissions and segment daily revenue
```

#### ✅ Acceptance Criteria

| # | Given | When | Then |
|---|-------|------|------|
| 1 | Approved methods: `Card`, `Bank Transfer` | CFO generates end-of-day report | Only those two methods appear |
| 2 | Some transactions were paid in `Cash` | CFO generates report | Cash is **excluded** |
| 3 | Filter applied | Results shown | Every record is exclusively `Card` or `Bank Transfer` |

#### 🗄️ MongoDB Document — Transaction Schema

```json
// Collection: transactions
{
  "_id": ObjectId("64f1a2b3c4d5e6f7a8b9c0d3"),
  "orderId": "ORD-2026-00456",
  "userId": ObjectId("64f1a2b3c4d5e6f7a8b9c0d4"),
  "total_amount": 200.00,
  "payment_method": "Card",
  "status": "SUCCESS",
  "createdAt": ISODate("2026-06-02T14:30:00Z")
}
```

#### ☕ Java Implementation — `$in` Filter

```java
// ReportService.java
@Service
public class ReportService {

    @Autowired
    private MongoTemplate mongoTemplate;

    private static final List<String> APPROVED_METHODS =
        List.of("Card", "Bank Transfer");       // $in filter values

    /**
     * US-ETS-02-01: Segments revenue by approved banking channels.
     * Uses MongoDB $in operator to include only Card and Bank Transfer.
     */
    public List<Transaction> getBankingRevenueReport(LocalDate date) {

        Query query = new Query(
            Criteria.where("payment_method").in(APPROVED_METHODS)    // $in
                    .and("status").is("SUCCESS")
                    .and("createdAt").gte(date.atStartOfDay())
                                    .lt(date.plusDays(1).atStartOfDay())
        );

        return mongoTemplate.find(query, Transaction.class);
    }
}
```

#### 🧪 Unit Test

```java
@Test
@DisplayName("US-ETS-02-01: Cash transactions excluded from banking report")
void shouldExcludeCashTransactions() {
    List<Transaction> results = reportService.getBankingRevenueReport(
        LocalDate.of(2026, 6, 2)
    );

    assertThat(results).isNotEmpty();
    assertThat(results)
        .extracting(Transaction::getPaymentMethod)
        .doesNotContain("Cash")                     // Cash excluded
        .containsAnyOf("Card", "Bank Transfer");    // Only approved methods
}
```

---

### `US-ETS-02-02` — Isolation and Reporting of Anomalous Transactions

| Field | Value |
|-------|-------|
| **Priority** | 🔴 Critical |
| **Story Points** | `8` |
| **MongoDB Operator** | `$not` / `$eq` |
| **Standard Price** | `200.00` |
| **Assignee** | Backend Dev |

#### 📖 User Story

```
AS     a System Security Auditor
I WANT to isolate transactions whose amounts differ from the standard price
       or whose statuses are unsuccessful
SO     I can identify financial anomalies or attempted fraud
```

#### ✅ Acceptance Criteria

| # | Given | When | Then |
|---|-------|------|------|
| 1 | Standard price is `200` | Auditor runs anomaly report | `total_amount = 200` is **NOT** flagged |
| 2 | Transaction with `total_amount = 500` exists | Auditor runs report | Flagged as **suspicious** |
| 3 | Transaction with `total_amount = null` exists | Auditor runs report | Flagged as **unverifiable** |

#### ☕ Java Implementation — `$not` / `$eq` Filter

```java
// AuditService.java
@Service
public class AuditService {

    @Autowired
    private MongoTemplate mongoTemplate;

    private static final double STANDARD_PRICE = 200.00;

    /**
     * US-ETS-02-02: Detects transactions that deviate from the standard price.
     * Uses $not + $eq to exclude the normal price and flag everything else.
     * Also catches null amounts (unverifiable transactions).
     */
    public List<Transaction> getAnomalousTransactions() {

        // Flag 1: amount != 200 (includes null)
        Criteria notStandardPrice = Criteria.where("total_amount")
            .not().is(STANDARD_PRICE);                      // $not + $eq

        // Flag 2: status is not SUCCESS
        Criteria failedStatus = Criteria.where("status")
            .not().is("SUCCESS");

        Query query = new Query(
            new Criteria().orOperator(notStandardPrice, failedStatus)
        );

        return mongoTemplate.find(query, Transaction.class);
    }
}
```

#### 🧪 Unit Test

```java
@Test
@DisplayName("US-ETS-02-02: Flags amount=500 and null; ignores amount=200")
void shouldFlagAnomalousAndNullAmounts() {
    List<Transaction> anomalies = auditService.getAnomalousTransactions();

    List<Double> amounts = anomalies.stream()
        .map(Transaction::getTotalAmount)
        .toList();

    assertThat(amounts).doesNotContain(200.00);     // Standard price NOT flagged
    assertThat(amounts).contains(500.00);            // Overpriced flagged
    assertThat(anomalies)
        .anyMatch(t -> t.getTotalAmount() == null);  // Null flagged
}
```

---

## 🧱 Epic 3 — Traceability and Data Quality

> Ensures that documentation, seed data, and history logs maintain a high technical standard within the development environment.

---

### `US-ETS-03-01` — Internal Modification History in Tickets

| Field | Value |
|-------|-------|
| **Priority** | 🟡 Medium |
| **Story Points** | `3` |
| **MongoDB Operator** | `$push` |
| **Assignee** | Full Stack Dev |

#### 📖 User Story

```
AS     a Technical Support Engineer
I WANT to append notes or change logs into the same reservation document
SO     full traceability of a ticket's lifecycle is maintained
       without fragmenting the database into multiple tables
```

#### ✅ Acceptance Criteria

| # | Given | When | Then |
|---|-------|------|------|
| 1 | Ticket in `"PENDING"` status | Technician adds `"Customer reported a bank issue"` | Note appended to `logs[]` via `$push` |
| 2 | Note is saved | Ticket is reopened | New note appears at the **end** of the list |
| 3 | Update completes | All ticket fields checked | No existing customer data modified or lost |

#### 🗄️ MongoDB Document — Ticket with Logs

```json
// Collection: tickets
{
  "_id": ObjectId("64f1a2b3c4d5e6f7a8b9c0d5"),
  "orderId": "ORD-2026-00456",
  "attendeeId": ObjectId("64f1a2b3c4d5e6f7a8b9c0d2"),
  "eventId": ObjectId("64f1a2b3c4d5e6f7a8b9c0d1"),
  "status": "PENDING",
  "ticketType": "General",
  "logs": [
    {
      "timestamp": ISODate("2026-06-02T10:00:00Z"),
      "author": "support-agent-01",
      "note": "Ticket created successfully"
    },
    {
      "timestamp": ISODate("2026-06-02T11:30:00Z"),
      "author": "support-agent-02",
      "note": "Customer reported a bank issue"    // appended via $push
    }
  ]
}
```

#### ☕ Java Implementation — `$push` Log Entry

```java
// LogEntry.java (embedded document)
@Document
public class LogEntry {
    private Instant timestamp;
    private String author;
    private String note;

    public LogEntry(String author, String note) {
        this.timestamp = Instant.now();
        this.author = author;
        this.note = note;
    }
    // getters...
}
```

```java
// TicketSupportService.java
@Service
public class TicketSupportService {

    @Autowired
    private MongoTemplate mongoTemplate;

    /**
     * US-ETS-03-01: Appends a log entry to ticket.logs[] via $push.
     * Does NOT overwrite any existing fields — only appends to the array.
     */
    public void addLogEntry(String ticketId, String author, String note) {

        Query query = new Query(
            Criteria.where("_id").is(new ObjectId(ticketId))
        );

        LogEntry entry = new LogEntry(author, note);

        Update update = new Update()
            .push("logs", entry);               // $push — appends to end of array

        UpdateResult result = mongoTemplate.updateFirst(query, update, Ticket.class);

        if (result.getMatchedCount() == 0) {
            throw new TicketNotFoundException("Ticket not found: " + ticketId);
        }
    }
}
```

#### 🧪 Unit Test

```java
@Test
@DisplayName("US-ETS-03-01: Log appended to end; existing fields unchanged")
void shouldAppendLogWithoutModifyingExistingFields() {
    // Given
    Ticket ticket = ticketRepository.save(
        Ticket.builder().status("PENDING").attendeeId("user-001").build()
    );
    String originalStatus = ticket.getStatus();

    // When
    ticketSupportService.addLogEntry(
        ticket.getId(),
        "support-agent-02",
        "Customer reported a bank issue"
    );

    // Then
    Ticket updated = ticketRepository.findById(ticket.getId()).orElseThrow();

    assertThat(updated.getLogs()).isNotEmpty();
    assertThat(updated.getLogs().getLast().getNote())
        .isEqualTo("Customer reported a bank issue");   // Appended at end

    assertThat(updated.getStatus()).isEqualTo(originalStatus); // Unchanged
    assertThat(updated.getAttendeeId()).isEqualTo("user-001"); // Unchanged
}
```

---

## 6. Impediments & Dependencies

| # | Impediment | Impact | Owner | Status |
|---|------------|--------|-------|--------|
| 1 | MongoDB Atlas write-concern not configured for atomic `$inc` | Blocks US-ETS-01-01 | Backend Dev | 🔴 Open |
| 2 | Index on `attendee.uniqueId` not created — <50ms SLA at risk | Blocks US-ETS-01-02 | Backend Dev | 🔴 Open |
| 3 | Standard price (`200`) not confirmed by PO | Blocks US-ETS-02-02 tests | Product Owner | 🟡 Pending |
| 4 | Staging environment with seed data not ready | Blocks QA | DevOps | 🟡 Pending |

---

## 7. Definition of Done (DoD)

- [ ] Code reviewed and approved via Pull Request (min. 1 reviewer)
- [ ] Unit tests written with **≥ 80% coverage** on new functionality
- [ ] Each MongoDB operator tested in isolation:
  - [ ] `$inc` — atomic decrement verified under concurrent load
  - [ ] `findOne()` — returns `{}` not `[]`, response < 50ms
  - [ ] `$in` — cash transactions excluded from results
  - [ ] `$not` / `$eq` — standard price not flagged; `null` and anomalies flagged
  - [ ] `$push` — log appended at end; no existing fields mutated
- [ ] REST endpoints documented in Swagger / OpenAPI
- [ ] Feature deployed to staging with no critical errors
- [ ] No critical or blocking bugs open in QA
- [ ] Acceptance criteria signed off by Product Owner
- [ ] English code comments updated where applicable

---

## 📊 Backlog Summary

| User Story | Epic | Priority | MongoDB Operator | Story Points |
|------------|------|----------|-----------------|:---:|
| US-ETS-01-01 | Capacity Management | 🔴 Critical | `$inc` | 8 |
| US-ETS-01-02 | Capacity Management | 🟠 High | `findOne()` | 5 |
| US-ETS-02-01 | Financial Security | 🟠 High | `$in` | 5 |
| US-ETS-02-02 | Financial Security | 🔴 Critical | `$not` / `$eq` | 8 |
| US-ETS-03-01 | Traceability | 🟡 Medium | `$push` | 3 |
| **TOTAL** | | | | **29** |

---

> 📁 Related docs: [`PRODUCT_BACKLOG.md`](./PRODUCT_BACKLOG.md)
> 🔗 Branch: `git checkout -b sprint/1-core-foundations`
