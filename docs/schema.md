```mermaid
erDiagram
    CONCERT {
        string concert_id PK
        string name
        date date
        string location
    }

    SCHEDULE {
        string schedule_id PK
        string concert_id FK
        string activity_name
        time start_time
        time end_time
    }

    ZONE {
        string zone_id PK
        string name
        number total_capacity
        string concert_id FK
    }

    TICKET_TYPE {
        string ticket_type_id PK
        string type_name
        string description
        string zone_id FK
    }

    PRICE_LOG {
        string price_id PK
        string ticket_type_id FK
        number amount
        date valid_from
        date valid_to
    }

    PAYMENT_METHOD {
        string method_id PK
        string method_name
        string provider
    }

    TRANSACTION {
        string transaction_id PK
        string attendee_id FK
        string method_id FK
        number total_amount
        datetime payment_date
        string status
    }

    TICKET {
        string ticket_id PK
        string ticket_type_id FK
        string attendee_id FK
        string transaction_id FK
        string status
        boolean has_food_access
    }

    ATTENDEE {
        string attendee_id PK
        string name
        string email
    }

    CONCERT ||--o{ SCHEDULE : manages
    CONCERT ||--o{ ZONE : hosts
    ZONE ||--o{ TICKET_TYPE : offers
    TICKET_TYPE ||--o{ PRICE_LOG : has_history
    TICKET_TYPE ||--o{ TICKET : generates
    ATTENDEE ||--o{ TRANSACTION : makes
    PAYMENT_METHOD ||--o{ TRANSACTION : used_in
    TRANSACTION ||--o{ TICKET : pays_for
