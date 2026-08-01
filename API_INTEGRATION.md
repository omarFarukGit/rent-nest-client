# API_INTEGRATION.md

# RentNest Frontend API Integration

This document describes how the frontend integrates with the RentNest backend API.

## Base URL

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

# Authentication

| Frontend Feature | Method | Endpoint |
|-----------------|--------|----------|
| Register | POST | `/users/register` |
| Login | POST | `/auth/login` |
| Refresh Token | POST | `/auth/refresh-token` |
| Get Current User | GET | `/users/me` |

### Used In

- Register Page
- Login Page
- Protected Routes
- Navbar User Menu
- Profile Page

---

# Properties

## Public

| Feature | Method | Endpoint |
|---------|--------|----------|
| Get All Properties | GET | `/properties` |
| Get Property Details | GET | `/properties/:id` |

### Used In

- Home Page
- Property Listing
- Search & Filters
- Property Details Page

---

## Landlord

| Feature | Method | Endpoint |
|---------|--------|----------|
| Create Property | POST | `/properties` |
| Get My Properties | GET | `/properties/landlord` |
| Update Property | PATCH | `/properties/:id` |
| Delete Property | DELETE | `/properties/:id` |
| Toggle Availability | PATCH | `/properties/:id/toggle-availability` |

### Used In

- Dashboard → My Properties
- Add Property Form
- Edit Property
- Property Table

---

# Categories

| Feature | Method | Endpoint |
|---------|--------|----------|
| Get Categories | GET | `/categories` |
| Get Category | GET | `/categories/:id` |
| Create Category | POST | `/categories` |
| Update Category | PUT | `/categories/:id` |
| Delete Category | DELETE | `/categories/:id` |

### Used In

- Property Form
- Admin Category Management
- Filter Sidebar

---

# Rental Requests

## Tenant

| Feature | Method | Endpoint |
|---------|--------|----------|
| Create Rental Request | POST | `/rentals` |
| Get My Requests | GET | `/rentals/my-requests` |
| Cancel Request | PATCH | `/rentals/:id/cancel` |
| Get Single Request | GET | `/rentals/:id` |

### Used In

- Property Details
- My Rentals Page

---

## Landlord

| Feature | Method | Endpoint |
|---------|--------|----------|
| Get Rental Requests | GET | `/rentals/landlord` |
| Approve/Reject Request | PATCH | `/rentals/:id/status` |

### Used In

- Dashboard → Rental Requests

---

# Reviews

| Feature | Method | Endpoint |
|---------|--------|----------|
| Get Property Reviews | GET | `/reviews/property/:propertyId` |
| Create Review | POST | `/reviews` |

### Used In

- Property Details
- Review Form

---

# Payments

| Feature | Method | Endpoint |
|---------|--------|----------|
| Create Payment | POST | `/payments/create` |
| Get Payment History | GET | `/payments` |
| Payment Statistics | GET | `/payments/stats/all` |
| Get Payment Details | GET | `/payments/:id` |

### Used In

- Checkout Page
- Payment Success Page
- Payment History
- Dashboard Statistics

---

# Admin

## Properties

| Feature | Method | Endpoint |
|---------|--------|----------|
| Get All Properties | GET | `/admin/properties` |
| Update Property | PATCH | `/admin/properties/:id` |
| Delete Property | DELETE | `/admin/properties/:id` |

---

## Users

| Feature | Method | Endpoint |
|---------|--------|----------|
| Get All Users | GET | `/admin/users` |
| Get User | GET | `/admin/users/:id` |
| Update User Status | PATCH | `/admin/users/:id` |

---

## Rentals

| Feature | Method | Endpoint |
|---------|--------|----------|
| Get All Rentals | GET | `/admin/rentals` |
| Get Rental Details | GET | `/admin/rentals/:id` |
| Update Rental Status | PATCH | `/admin/rentals/:id/status` |
| Delete Rental | DELETE | `/admin/rentals/:id` |

### Used In

- Admin Dashboard
- User Management
- Property Management
- Rental Management

---

# API Integration Summary

| Frontend Module | Backend APIs |
|----------------|--------------|
| Authentication | Register, Login, Refresh Token, Profile |
| Home | Get Properties, Categories |
| Property Details | Single Property, Reviews, Rental Request |
| Tenant Dashboard | My Rental Requests, Payments |
| Landlord Dashboard | My Properties, Rental Requests |
| Admin Dashboard | Users, Properties, Rentals, Categories |
| Payments | Create Payment, Payment History |

---

## Authentication

- JWT Access Token
- Refresh Token
- HTTP Only Cookies
- Protected Routes
- Role Based Authorization

---

## Error Handling

The frontend handles:

- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

using centralized API error handling and toast notifications.