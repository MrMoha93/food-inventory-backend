## Features
This repository contains the backend of the Foods Project, built with Node.js, TypeScript, and Express. 

 **Authentication**  
  Secure login functionality with support for admin roles and protected routes.

- **User Management**  
  Create, update, and manage users through dedicated endpoints.

- **Category and Food Item Handling**  
  Add, edit, and delete food categories and individual food items.

- **Middleware**  
  Custom middleware for authentication and admin permission checks.

- **API Routes**  
  Organized route structure for:
  - /auth (login & access)
  - /users
  - /categories
  - /foods

- **Schema Validation with Zod**  
  Ensures robust validation for authentication, user, and food data.

- **Database via Prisma**  
  Uses Prisma ORM with a PostgreSQL database, defined in schema.prisma.

## Getting Started

To run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/MrMoha93/food-inventory-backend.git
cd food-inventory-backend
```

### 2. Set up environment variables

In the backend directory create a .env file and add the following variables:

```env
DATABASE_URL=your-neon-database-url
JWT_SECRET=your-secret-key
```
### 3. Install dependencies

```bash
npm install
```

### 4. Run server

```bash
nodemon index.ts
```

