# daba-cities

## Overview
Daba.Cities is a pioneering initiative focused on transforming urban spaces through sustainable, forward-thinking solutions. 
This landing page serves as the primary platform to showcase our mission, projects, and partnership opportunities.

## env file

NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=pk.eyJ1IjoiZnJ1a3VuZG8iLCJhIjoiY204cmx5MXdsMHByNTJsc2gyMWhlaXJuOSJ9.YmozHqAIheEmauWujS8ftA
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID=us-east-1_JhKuXUP38
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID=23mjqcqhgl2bl11lst1dvn3at5


# 📡 API Specification for Daba Platform Backend

This document lists all **required backend endpoints** for the Daba platform, as used by the frontend. It covers:

1. 🔐 Authentication (Custom Auth replacing AWS Cognito)
2. 👤 Users (Investor / Owner)
3. 🏠 Properties
4. ❤️ Favorites
5. 📃 Leases & Payments
6. 📝 Applications

---

## 🔐 1. Authentication (Custom Auth)
We are replacing AWS Cognito with our own authentication system.

### POST `/auth/signup`
Registers a new user with detailed personal information.
```json
{
  "firstName": "John",
  "familyName": "Doe",
  "otherNames": "",
  "dateOfBirth": "1990-01-01",
  "email": "john@example.com",
  "telephone": "+212612345678",
  "nationality": "Moroccan",
  "countryOfResidence": "Morocco",
  "idPassportNumber": "AB123456",
  "username": "johndoe",
  "password": "securePassword",
  "confirmPassword": "securePassword",
  "role": "owner" | "seeker" | "investor"
}
```
**Response:**
```json
{
  "message": "User registered successfully",
  "userId": "123abc",
  "token": "jwt.token.here"
}
```

### POST `/auth/login`
Log in with username & password or initiate Google login.
```json
// Login with username
{
  "username": "johndoe",
  "password": "securePassword"
}
```
**OR:**
```json
// Login with Google (frontend handles OAuth flow)
{
  "provider": "google",
  "token": "google_oauth_token_here"
}
```
**Response:**
```json
{
  "token": "jwt.token.here",
  "user": { ... }
}
```

### GET `/auth/me`
Returns the authenticated user's details.
```http
GET /auth/me
Authorization: Bearer <jwt-token>
```
**Response:**
```json
{
  "user": { ... },
  "role": "investor"
}
```

---

## 👤 2. Users

### GET `/investors/:id`
Fetch investor by ID

### PUT `/investors/:id`
Update investor profile
```json
{
  "name": "...",
  "bio": "..."
}
```

### GET `/owners/:id`
Fetch owner by ID

### PUT `/owners/:id`
Update owner profile

---

## 🏘 3. Properties

### GET `/properties`
Get filtered list of properties (optional query params)
```http
?location=Kigali&beds=2&baths=1&priceMin=200&priceMax=1000
```

### GET `/properties/:id`
Get full property details

### POST `/properties`
Create a new property (form-data)

---

## ❤️ 4. Favorites
Investor favorites a property

### POST `/investors/:id/favorites/:propertyId`
Add to favorites

### DELETE `/investors/:id/favorites/:propertyId`
Remove from favorites

---

## 🏠 5. Manager (Owner) Properties

### GET `/owners/:id/properties`
Get all properties owned by user

---

## 📃 6. Leases & Payments

### GET `/leases`
Get all leases

### GET `/properties/:id/leases`
Get leases for a specific property

### GET `/leases/:id/payments`
Get payments for a lease

---

## 📝 7. Applications

### GET `/applications`
Query by userId and userType
```http
/applications?userId=abc123&userType=investor
```

### POST `/applications`
Create new application
```json
{
  "propertyId": 1,
  "investorId": "...",
  "message": "..."
}
```

### PUT `/applications/:id/status`
Update status of an application
```json
{
  "status": "approved" | "rejected" | "pending"
}
```

---

## 🔁 Notes
- All protected routes require `Authorization: Bearer <JWT>` header.
- Replace all Cognito references with your own user store using JWT.
