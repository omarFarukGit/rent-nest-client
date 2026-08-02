# RentNest Frontend API Integration

This document describes how the RentNest frontend communicates with the backend API.

---

# Base URL

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

# Authentication API

## User Authentication

| Feature | Method | Endpoint |
|---|---|---|
| Register User | POST | `/users/register` |
| Login User | POST | `/auth/login` |
| Refresh Token | POST | `/auth/refresh-token` |
| Get Current User | GET | `/users/me` |
| Update Profile | PATCH | `/users/me` |

### Used In

- Register Page
- Login Page
- Navbar User Menu
- Profile Page
- Protected Routes
- Dashboard Authorization


### Authentication System

Frontend uses:

- JWT Access Token
- Refresh Token
- HTTP Only Cookie
- Role Based Authorization

---

# Property API Integration


## Public Property APIs

| Feature | Method | Endpoint |
|---|---|---|
| Get All Properties | GET | `/properties` |
| Get Property Details | GET | `/properties/:id` |


### Used In

- Home Page
- Property Listing Page
- Search
- Filter
- Property Details Page


---

## Landlord Property APIs

| Feature | Method | Endpoint |
|---|---|---|
| Create Property | POST | `/properties` |
| Get My Properties | GET | `/properties/landlord` |
| Update Property | PATCH | `/properties/:id` |
| Delete Property | DELETE | `/properties/:id` |
| Toggle Availability | PATCH | `/properties/:id/toggle-availability` |


### Used In

- Landlord Dashboard
- My Properties Page
- Create Property Form
- Edit Property Page
- Property Management Table


---

# Category API Integration


| Feature | Method | Endpoint |
|---|---|---|
| Get All Categories | GET | `/categories` |
| Get Category Details | GET | `/categories/:id` |
| Create Category | POST | `/categories` |
| Update Category | PATCH | `/categories/:id` |
| Delete Category | DELETE | `/categories/:id` |


### Used In

- Property Create Form
- Property Filter
- Admin Category Management


---

# Rental Request API Integration


## Tenant Rental APIs


| Feature | Method | Endpoint |
|---|---|---|
| Create Rental Request | POST | `/rentals` |
| Get My Rental Requests | GET | `/rentals/my-requests` |
| Get Rental Details | GET | `/rentals/:id` |
| Cancel Rental Request | PATCH | `/rentals/:id/cancel` |


### Used In

- Property Details Page
- Tenant Dashboard
- My Rentals Page


---

## Landlord Rental APIs


| Feature | Method | Endpoint |
|---|---|---|
| Get Rental Requests | GET | `/rentals/landlord` |
| Update Request Status | PATCH | `/rentals/:id/status` |


Supported Actions:

- Approve Request
- Reject Request


### Used In

- Landlord Dashboard
- Rental Request Management


---

# Payment API Integration


| Feature | Method | Endpoint |
|---|---|---|
| Create Payment | POST | `/payments/create` |
| Get My Payments | GET | `/payments` |
| Get Payment Details | GET | `/payments/:id` |
| Payment Statistics | GET | `/payments/stats` |


### Payment Features

Frontend displays:

- Payment History
- Transaction ID
- Payment Status
- Paid Amount
- Pending Amount
- Total Payment Count


### Used In

- Checkout Page
- Payment Success Page
- Tenant Payment Dashboard
- Landlord Payment Dashboard


---

# Review API Integration


| Feature | Method | Endpoint |
|---|---|---|
| Get Property Reviews | GET | `/reviews/property/:propertyId` |
| Create Review | POST | `/reviews` |


### Used In

- Property Details Page
- Review Section


---

# Admin API Integration


## User Management


| Feature | Method | Endpoint |
|---|---|---|
| Get All Users | GET | `/admin/users` |
| Get User Details | GET | `/admin/users/:id` |
| Update User Status | PATCH | `/admin/users/:id/status` |
| Delete User | DELETE | `/admin/users/:id` |


---

## Property Management


| Feature | Method | Endpoint |
|---|---|---|
| Get All Properties | GET | `/admin/properties` |
| Update Property | PATCH | `/admin/properties/:id` |
| Delete Property | DELETE | `/admin/properties/:id` |


---

## Rental Management


| Feature | Method | Endpoint |
|---|---|---|
| Get All Rental Requests | GET | `/admin/rentals` |
| Get Rental Details | GET | `/admin/rentals/:id` |
| Update Rental Status | PATCH | `/admin/rentals/:id/status` |
| Delete Rental | DELETE | `/admin/rentals/:id` |


---

# Frontend Module Mapping


| Frontend Module | Backend API |
|---|---|
| Authentication | Register, Login, Refresh Token, Profile |
| Home Page | Properties, Categories |
| Property Listing | Properties, Filters |
| Property Details | Property Details, Reviews, Rental Request |
| Tenant Dashboard | My Rentals, Payments |
| Landlord Dashboard | My Properties, Rental Requests, Payments |
| Admin Dashboard | Users, Properties, Rentals, Categories |
| Payment System | Create Payment, Payment History |


---

# Error Handling


Frontend handles following API errors:


| Status Code | Description |
|---|---|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 500 | Internal Server Error |


Error handling methods:

- Centralized API handler
- Server Action error handling
- Toast notifications
- Redirect for unauthorized users


---

# Pagination & Filtering


Supported features:

- Pagination
- Search
- Sorting
- Filtering


Example:


```
GET /properties?page=1&limit=10
```


Query Parameters:

```
page
limit
sortBy
sortOrder
status
category
search
```


---

# Technology Stack


## Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Server Components
- Server Actions


## Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL


## Security

- JWT Authentication
- Refresh Token
- HTTP Only Cookie
- Role Based Authorization


---

# API Integration Status

| Module | Status |
|---|---|
| Authentication | ✅ Completed |
| Properties | ✅ Completed |
| Categories | ✅ Completed |
| Rental Requests | ✅ Completed |
| Payments | ✅ Completed |
| Admin Management | ✅ Completed |
