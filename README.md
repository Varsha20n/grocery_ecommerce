# Grocer - Ecommerce Application

A full-featured ecommerce application built with MERN stack (MongoDB, Express, React, Node.js) with Stripe payment integration.

## Features

- User Authentication (Login/Register)
- Product Management (Admin)
- Shopping Cart
- Checkout Process (Shipping → Confirm Order → Payment)
- Order Management
- Stripe Payment Integration
- Responsive Design

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (Local or Atlas)
- Stripe Account (for payments)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd grocer
```

### 2. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 3. Environment Variables Setup

Create/update the configuration file at `backend/config/config.env`:

```env
# Server Configuration
PORT=5000

# Cookie Expire (in days)
COOKIE_EXPIRE=7

# Database Configuration
# For local MongoDB:
DB_URI=mongodb://localhost:27017/grocer
# Or for MongoDB Atlas:
DB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/grocer

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here_change_in_production
JWT_EXPIRE=5d

# Cloudinary Configuration (for image uploads)
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe Payment Configuration
# Get these from https://dashboard.stripe.com/test/apikeys
STRIPE_API_KEY=pk_test_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# Node Environment
NODE_ENV=DEVELOPMENT
```

### 4. Get Stripe API Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Sign up or Log in
3. Go to **Developers → API Keys**
4. Copy your **Publishable key** (starts with `pk_test_`)
5. Copy your **Secret key** (starts with `sk_test_`)
6. Update the config.env file with these keys

## Running the Application

### Option 1: Run Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
# App opens on http://localhost:3000
```

### Option 2: Run with Concurrently (Recommended)

Install concurrently in root:
```bash
npm install concurrently --save-dev
```

Run both servers:
```bash
npm run dev
```

## Seeding Data

### Seed Products

This will create sample products in the database:

```bash
cd backend
node seeder.js
```

To reset and reseed:
```bash
cd backend
node seeder.js -d
```

### Seed Users (Admin & Test Users)

This will create admin and test user accounts:

```bash
cd backend
node seedUsers.js
```

**Default Users Created:**
- **Admin:** admin@kanchan.com / admin123
- **Test User:** test@kanchan.com / test123

## Testing the Payment Flow

1. **Start the application** (backend + frontend)
2. **Login** with test user or register new account
3. **Add products** to cart
4. **Proceed to Checkout:**
   - Fill shipping details (select Country and State)
   - Click Continue → Confirm Order
   - Click Proceed To Payment
5. **Use Stripe Test Card:**

| Field | Test Value |
|-------|------------|
| Card Number | 4242 4242 4242 4242 |
| Expiry | Any future date (e.g., 12/28) |
| CVC | Any 3 digits (e.g., 123) |
| ZIP | Any valid ZIP (e.g., 12345) |

6. **Complete Payment** - You should see success page and cart will be empty

## Project Structure

```
grocer/
├── backend/
│   ├── config/
│   │   └── config.env          # Environment variables
│   ├── controllers/            # Route controllers
│   ├── middleware/             # Auth, error handling
│   ├── models/                # Mongoose models
│   ├── routes/                # API routes
│   ├── utils/                 # Utility functions
│   ├── seeder.js              # Product seeder
│   ├── seedUsers.js           # User seeder
│   ├── server.js              # Server entry point
│   └── app.js                 # Express app
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── actions/           # Redux actions
│   │   ├── components/        # React components
│   │   ├── constants/         # Action constants
│   │   ├── reducers/         # Redux reducers
│   │   ├── store.js          # Redux store
│   │   └── App.js            # Main app component
│   └── package.json
├── package.json                # Root package.json
└── README.md
```

## API Endpoints

### User Routes
- `POST /api/v1/register` - Register new user
- `POST /api/v1/login` - Login user
- `GET /api/v1/logout` - Logout user
- `GET /api/v1/me` - Get current user
- `PUT /api/v1/password/update` - Update password
- `POST /api/v1/password/forgot` - Forgot password
- `PUT /api/v1/password/reset/:token` - Reset password

### Product Routes
- `GET /api/v1/products` - Get all products
- `GET /api/v1/product/:id` - Get single product
- `POST /api/v1/admin/product/new` - Create product (Admin)
- `PUT /api/v1/admin/product/:id` - Update product (Admin)
- `DELETE /api/v1/admin/product/:id` - Delete product (Admin)

### Order Routes
- `POST /api/v1/order/new` - Create new order
- `GET /api/v1/orders/me` - Get my orders
- `GET /api/v1/order/:id` - Get order details
- `GET /api/v1/admin/orders` - Get all orders (Admin)

### Payment Routes
- `POST /api/v1/payment/process` - Process payment
- `GET /api/v1/stripeapikey` - Get Stripe API key

## Troubleshooting

### Payment Shows "Invalid Card"
- Make sure you're using Stripe **test keys** (pk_test_ / sk_test_)
- Use the test card: 4242 4242 4242 4242
- Restart backend after changing config.env

### Cart Not Clearing After Order
- This was a bug that's been fixed
- Clear browser localStorage and try again

### MongoDB Connection Error
- Make sure MongoDB is running locally or check Atlas URI
- Verify DB_URI in config.env

### Shipping Continue Button Not Working
- Make sure to select both Country AND State
- The button only enables when both are selected

## License

Copyright © 2021 Kanchan. All rights reserved.
