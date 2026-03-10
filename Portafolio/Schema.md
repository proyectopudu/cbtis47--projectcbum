
erDiagram
    CONCERT {
        string concert_id PK
        string name
        date date
        string location
    }

    ZONE {
        string zone_id PK
        string name
        number total_capacity
        number available_capacity
        string concert_id FK
    }

    TICKET_TYPE {
        string ticket_type_id PK
        string type_name
        string description
        number price
        string zone_id FK
    }

    TICKET {
        string ticket_id PK
        number price
        string ticket_type_id FK
        string concert_id FK
        string zone_id FK
        string attendee_id FK
        string status
    }

    ATTENDEE {
        string attendee_id PK
        string name
        string email
    }

    CONCERT ||--o{ ZONE : hosts
    ZONE ||--o{ TICKET_TYPE : offers
    TICKET_TYPE ||--o{ TICKET : generates
    CONCERT ||--o{ TICKET : includes
    ZONE ||--o{ TICKET : belongs_to
    ATTENDEE ||--o{ TICKET : purchases
