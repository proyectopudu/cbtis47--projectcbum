
# 🎯 Product Goal

> "To build an online reservation platform (Event Ticket System) for mass ticket sales, capable of processing concurrent transactions with zero data loss, guaranteeing real-time capacity consistency, and offering advanced financial auditing tools through optimized NoSQL queries."

---germain

# 📑 Product Backlog

## 🧱 Epic 1: Capacity Management and Logistics (Requested by: Operations Director)

This epic addresses the strict control of ticket inventory and secure access management to prevent overbooking.

### PBI-01: Atomic Inventory Control and Overbooking Prevention

```text
User Story:
As an Event Organizer (Organizing Committee),
I want to update the available ticket inventory by subtracting capacity atomically and immediately with each successful purchase,
So that the venue's capacity limit is respected and ticket oversales are legally avoided.

Acceptance Criteria:
Given that the event "Concierto 2026" has an available capacity of 10 tickets,
When a customer executes a digital payment for 1 ticket,
Then the database must apply the $inc operator with a value of -1 on the disponibles field,
And the event capacity must update immediately to 9,
And no other execution thread should be able to read the previous value during the transaction.

Unit Testing Approach:
Test: Execute 50 simultaneous purchase requests on an event with a capacity limited to 40.
The test is successful if the numerical field decreases exactly to 0 and rejects the 10 remaining requests, validating the atomicity of $inc.

PBI-02: Search and Identity Validation at Access Points

User Story:
As an Event Staff Receptionist,
I want to search for an attendee using their unique identifier within the database,
So that I can validate their ticket at the access gate in less than 50ms and speed up the entrance queue.

Acceptance Criteria:
Given that the user with the attendee ID "a1" and name "Alice Johnson" exists in the asistentes collection,
When the staff enters "a1" into the search terminal at the access point,
Then the query must be executed using the findOne() method,
And it must return a direct JSON object { } containing Alice's data,
And it must not return a list or array [] to avoid delays in the scanner software.

Unit Testing Approach:
Test: Invoke the search function passing an existing parameter. Verify that the returned data type is an object
(typeof resultado === 'object'), that it is not null (null), and that the MongoDB server response time is below the established technical threshold.

🧱 Epic 2: Auditing, Reporting, and Financial Security (Requested by: Finance Director)
This epic focuses on the use of advanced comparison and logical operators to ensure monetary transparency.

PBI-03: Financial Revenue Channel Segmentation

User Story:
As a Finance Director (CFO) of the Ticketing Company,
I want to filter transactions based on a list of approved banking payment methods,
So that I can calculate exact bank commissions and segment revenue at the end of the day.

Acceptance Criteria:
Given that there are transactions registered with payment methods "pm1" (Card), "pm2" (Bank Transfer), and "pm3" (Cash),
When the financial analyst executes the query using the array operator $in: ["pm1", "pm2"],
Then the system must return only the documents whose method_id field matches those values,
And it must automatically exclude all transactions made with the "pm3" method.

Unit Testing Approach:
Test: Insert controlled data into the Transaction collection.
Execute the query with the $in operator and verify through an assertion that no document in the result contains the value "pm3" in the method_id attribute.


PBI-04: Isolation and Reporting of Anomalous Transactions

User Story:
As a System Security Auditor,
I want to isolate transaction documents whose amounts differ from the established standard price or whose statuses are unsuccessful,
So that I can identify financial anomalies or attempted fraud in online transactions.

Acceptance Criteria:
Given a financial dataset of transactions with varying amounts of 200 and 500 units,
When the Query Developer executes the query using the inverse logic "total_amount": { $not: { $eq: 200 } },
Then the MongoDB console must hide records with a value of 200,
And it must display on screen documents with higher amounts such as 500 or null values,
And the response must allow the auditor to export the suspicious records to a review file.

Unit Testing Approach:
Test: Evaluate the exclusion query against a test suite. The test passes if,
when introducing 5 documents (three with a value of 200 and two with a value of 500), the final query count returns exactly 2 documents,
ensuring that the $not operator performed the discard properly.


🧱 Epic 3: Traceability and Data Quality (Repository Maintenance)
This epic ensures that documentation, seeds, and history logs maintain a high technical standard within the development environment.

PBI-05: Internal Modification History in Tickets

User Story:
As a Technical Support Engineer,
I want to add informative notes or change logs within the same reservation document,
So that full traceability of a ticket's lifecycle is maintained without fragmenting the database into multiple tables.

Acceptance Criteria:
Given that a ticket in "PENDING" status requires a support clarification,
When the technician adds the comment "Cliente reporta problemas con el banco",
Then the Query Developer must execute a statement using the $push operator,
And the comment must be appended to the end of an internal array named logs,
And the user's previous information must remain intact without suffering any overwrites.

Unit Testing Approach:
Test: Execute the $push update script on a test document. Verify that the logs property is an instance of an array (Array.isArray())
and that its length (length) increases exactly by 1 after the operation.
