# 🏠 RentNest - Rental Property Marketplace

> **Find & List Rental Properties with Ease**

RentNest is a modern, responsive rental property marketplace built with **Next.js**.  
It provides a complete rental ecosystem where tenants can find properties, landlords can manage listings, and admins can moderate the platform.

This project is a **Frontend Application** that consumes a backend API.

---

## 🚀 Live Demo

🔗 Live URL:https://rent-nest-client-five.vercel.app/

---

---

# ✨ Features

## 🌍 Public Features

### 🏘️ Property Browsing

- Responsive property grid layout
- Optimized images using Next.js Image
- Property price, location, category and amenities display
- Property details page with complete information

### 🔎 Advanced Search & Filtering

- Search by location
- Filter by:
  - Price range
  - Property category
  - Amenities
- Dynamic filtering experience

### 📄 Property Details

- Image gallery
- Property description
- Landlord information
- Rental request CTA

---

# 👤 Authentication

## Register

- User registration
- Role selection:
  - Tenant
  - Landlord
  - Admin
- Form validation

## Login

- Secure authentication flow
- Role-based dashboard redirect

---

# 🏠 Tenant Features

Tenant users can:

✅ Browse rental properties  
✅ View property details  
✅ Submit rental requests  
✅ Track request status  
✅ Make payments  
✅ View payment history  
✅ Submit reviews after rental completion

### Rental Request Status

| Status    | Badge     |
| --------- | --------- |
| PENDING   | 🟡 Yellow |
| APPROVED  | 🔵 Blue   |
| REJECTED  | 🔴 Red    |
| ACTIVE    | 🟢 Green  |
| COMPLETED | ⚪ Gray   |

---

# 🏘️ Landlord Features

Landlords can:

✅ View dashboard overview  
✅ Create property listings  
✅ Upload property images  
✅ Update property information  
✅ Delete properties  
✅ Manage availability status  
✅ Approve rental requests  
✅ Reject rental requests  
✅ View tenant history  
✅ Track earnings

---

# 📊 Admin Features

Admins can:

✅ View platform statistics  
✅ Manage users  
✅ Ban / Unban users  
✅ Monitor properties  
✅ Review rental activities

---

# 💳 Payment Integration

Supported payment flow:

- Stripe Checkout

Payment pages:

```
/payment/success
/payment/cancel
```

Flow:

```
Rental Approved
        ↓
Proceed Payment
        ↓
Payment Gateway
        ↓
Success / Cancel Page
```

---

# 🛠️ Technology Stack

## Frontend

- Next.js 15 / 16
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Lucide React
- Sonner Toast Notification

---

## Backend Integration

Backend API:

- REST API
- JWT Authentication
- Role Based Authorization

Backend Technology:

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL

---

# 📂 Project Structure

```
src
│
├── app
│   ├── (public)
│   │   ├── page.tsx
│   │   └── properties
│   │
│   ├── auth
│   │   ├── login
│   │   └── register
│   │
│   ├── dashboard
│   │   ├── tenant
│   │   ├── landlord
│   │   └── admin
│   │
│   └── payment
│
├── components
│   ├── ui
│   ├── shared
│   └── modules
│
├── actions
│
├── hooks
│
├── utils
│
└── types
```

---

# 🔐 Route Protection

Implemented with:

- Next.js Middleware
- Role based route protection

Example:

```
Tenant
/dashboard


Landlord
/landlord-dashboard


Admin
/admin-dashboard
```

---

# 🔄 Application Flow

## Tenant Flow

```
Register/Login

      ↓

Browse Properties

      ↓

Property Details

      ↓

Submit Rental Request

      ↓

Wait For Approval

      ↓

Payment

      ↓

Review Submission
```

## Landlord Flow

```
Register/Login

      ↓

Dashboard

      ↓

Create Property

      ↓

Manage Requests

      ↓

Approve / Reject

      ↓

Receive Payment
```

---

# 📡 API Integration

Example APIs:

| Feature             | Method | Endpoint                 |
| ------------------- | ------ | ------------------------ |
| Properties          | GET    | /api/properties          |
| Property Details    | GET    | /api/properties/:id      |
| Register            | POST   | /api/auth/register       |
| Login               | POST   | /api/auth/login          |
| Rental Request      | POST   | /api/rentals             |
| Payments            | POST   | /api/payments/create     |
| Landlord Properties | GET    | /api/landlord/properties |
| Admin Users         | GET    | /api/admin/users         |

---

# ⚡ Performance & UX

Implemented:

✅ Responsive design  
✅ Loading skeleton  
✅ Error handling  
✅ Toast notifications  
✅ Optimistic UI updates  
✅ Accessible components  
✅ Mobile friendly dashboard

---

# ⚙️ Installation & Setup

Clone repository:

```bash
git clone https://github.com/yourusername/rentnest-frontend.git
```

Go to project:

```bash
cd rentnest-frontend
```

Install dependencies:

```bash
npm install
```

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=
```

Run development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 📦 Build for Production

```bash
npm run build
```

Start:

```bash
npm start
```

---

# 👨‍💻 Developer

**MD Omar Faruk**

Junior Full Stack Developer

Skills:

- Next.js
- React
- TypeScript
- Node.js
- Express.js
- Prisma
- PostgreSQL

---

# 📄 License

This project is created for educational purposes.

---

⭐ If you like this project, give it a star on GitHub.
