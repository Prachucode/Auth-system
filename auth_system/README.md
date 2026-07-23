# Auth System

Auth System is a modern authentication starter built with SvelteKit, MongoDB, and secure backend practices. It provides a solid foundation for applications that need user registration, validation, and account-management workflows with a polished, production-style structure.

## Overview

This project is designed as a scalable starting point for SaaS products, internal tools, and customer-facing applications that require a reliable authentication layer. The codebase is organized around clear routes, reusable server logic, and validation-driven form handling.

### Key features

- Secure user registration flow
- Input validation using Zod
- Password hashing with bcrypt
- MongoDB-backed persistence through Mongoose
- Modular SvelteKit route structure
- Tailwind-based UI styling

## Tech stack

- Frontend: SvelteKit, Svelte, Tailwind CSS, Vite
- Backend: Node.js, SvelteKit server actions
- Data layer: MongoDB with Mongoose
- Security: bcrypt, environment-based configuration, schema validation

## Project structure

```text
src/
  routes/
    registration/
    forgotpassword/
    resetpassword/
    mainpage/
  lib/
    server/
      db.js
      models/
      redis.js
    validators/
```

## Getting started

### Prerequisites

- Node.js 20+
- npm 10+
- A running MongoDB instance

### Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a local environment file:

```bash
MONGODB_URI=mongodb://127.0.0.1:27017/auth-system
```

4. Start the development server:

```bash
npm run dev
```

## Available scripts

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `MONGODB_URI` | Yes | Connection string for your MongoDB instance |

## Roadmap

- Complete login and session management
- Add password reset email delivery
- Introduce protected routes and role-based access control
- Harden security with rate limiting and audit logging

## License

This project is intended for development and educational use. Adjust the licensing terms to fit your production deployment requirements.
