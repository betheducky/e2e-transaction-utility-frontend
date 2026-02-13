# E2eTransactionUtilityFrontend

A minimal full stack application built with Angular and Java to demonstrate end-to-end CRUD operations, clean architecture, and client-server data flow.

## Goal
Demonstrate a simple, well structured full-stack application with clear separation between backend and frontend responsibilities.

## Tech Stack
- Frontend: Angular (standalone components)
- Backend: Java, Spring Boot
- Persistence: In-memory / lightweight database
- Communication: REST API (JSON)

---

## Core Features
- Create, read, update, and delete transactions
- Filter transactions by type (income / expense)
- Persistent storage via backend API

---

## Architectural Overview

### Frontend (Angular)
- Presentational components for UI rendering
- Container component for state and orchestration
- Dedicated service later for HTTP communication
- TypeScrupt models mirroring backend DTOs

### Backend (Java)
- REST controllers handling HTTP requests
- Service layer containing business logic
- Repository layer for persistence
- Global CORS config for frontend integration

---

# Screenshots

### Create Transaction
![Create](https://github.com/user-attachments/assets/20fe0b81-3d02-4941-acac-8e713f6ece1c)

### Transaction List
![List](https://github.com/user-attachments/assets/d69b958b-aebf-4257-bd66-8f492fb9f4de)

### Edit Transaction
![Edit](https://github.com/user-attachments/assets/cd7604ca-0a17-47de-905f-018341725edd)

---

## API Endpoints
- `GET /transactions`
- `POST /transactions`
- `PUT /transactions/{id}`
- `DELETE /transactions/{id}`

---

## Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/betheducky/e2e-transaction-utility-frontend.git
cd e2e-transaction-utility-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
ng serve
```

Navigate to `http://localhost:4200/` or your specified local development server URL. The application will automatically reload if you change any of the source files.

⚠️ Note:
The Angular app expects the Java API to be running at:
http://localhost:8080/api

Make sure the [backend server](https://github.com/betheducky/e2e-transaction-utility-backend/blob/main/README.md#local-setup) is started before running the frontend.

---

## Key Concepts Demonstrated

- Designing and consuming a REST API
- Handling CORS between frontend and backend
- Angular service layer and component architecture
- End-to-end CRUD data flow
- Form handling & event-driven UI communication

## Non-Goals

- Authentication or user accounts
- Charts, budgets, or analytics
- Advanced validation or pagination
- UI polish beyond basic usability

---

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


