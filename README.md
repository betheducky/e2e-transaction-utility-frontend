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

## API Endpoints
- `GET /transactions`
- `POST /transactions`
- `PUT /transactions/{id}`
- `DELETE /transactions/{id}`

## Non-Goals
- Authentication or user accounts
- Charts, budgets, or analytics
- Advanced validation or pagination
- UI polish beyond basic usability

## Status
In progress