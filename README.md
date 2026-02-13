# E2eTransactionUtilityFrontend

A minimal full stack application built with Angular and Java to demonstrate end-to-end CRUD operations, clean architecture, and client-server data flow.

## Goal
Demonstrate a simple, well structured full-stack application with clear separation between backend and frontend responsibilities.

## Tech Stack
- Frontend: Angular (standalone components)
- Backend: Java, Spring Boot
- Persistence: In-memory / lightweight database
- Communication: REST API (JSON)

## Core Features
- Create, read, update, and delete transactions
- Filter transactions by type (income / expense)
- Persistent storage via backend API

## Architectural Overview

### Frontend (Angular)
- Presentational components for UI rendering
- Container component for state and orchestration
- Dedicated service later for HTTP communication
- TypeScrupt models mirroring backend DTOs

###Backend (Java)
- REST controllers handling HTTP requests
- Service layer containing business logic
- Repository layer for persistence
- Global CORS config for frontend integration

## API Endpoints
- `GET /transactions`
- `POST /transactions`
- `PUT /transactions/{id}`
- `DELETE /transactions/{id}`

# Screenshots

### Create Transaction
![Create](https://github.com/user-attachments/assets/20fe0b81-3d02-4941-acac-8e713f6ece1c)

### Transaction List
![List](https://github.com/user-attachments/assets/d69b958b-aebf-4257-bd66-8f492fb9f4de)

### Edit Transaction
![Edit](https://github.com/user-attachments/assets/cd7604ca-0a17-47de-905f-018341725edd)

## Non-Goals
- Authentication or user accounts
- Charts, budgets, or analytics
- Advanced validation or pagination
- UI polish beyond basic usability


