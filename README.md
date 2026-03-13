# E-Commerce Backend API

A comprehensive Node.js/Express backend for a full-featured e-commerce platform with user authentication, product management, shopping cart, order processing, and multiple payment gateway integrations.

## 🚀 Features

### User Management

- **User Registration** - Secure registration with email validation and password strength requirements
- **User Authentication** - JWT-based authentication with secure password hashing using bcrypt
- **Admin Login** - Separate admin authentication with environment-based credentials
- **User Cart Tracking** - Persistent cart data associated with user accounts

### Product Management

- **Add Products** - Create new products with multiple images and detailed information
- **List Products** - Retrieve all products from the database
- **Remove Products** - Delete products from the catalog
- **Single Product Details** - Fetch detailed information for individual products
- **Product Metadata** - Support for categories, subcategories, sizes, and bestseller status

### Shopping Cart

- **Add to Cart** - Add items to user's cart with size selection
- **Update Cart** - Modify item quantities in the cart
- **Get User Cart** - Retrieve the complete cart data for authenticated users

### Order Management

- **Multiple Payment Methods**
  - Cash on Delivery (COD)
  - Stripe Payment Gateway
  - Razorpay Payment Gateway
- **Order Placement** - Create orders with items, amounts, and delivery addresses
- **View All Orders** - Admin endpoint to view all orders in the system
- **View User Orders** - Retrieve order history for specific users
- **Update Order Status** - Admin ability to change order status (Order Placed, Processing, Shipped, Delivered, Cancelled)
- **Payment Verification** - Verify and process payments from Stripe and Razorpay

### Security & Middleware

- **User Authentication Middleware** - Protect user-specific routes
- **Admin Authentication Middleware** - Restrict admin operations to authorized personnel
- **File Upload Handling** - Multer middleware for product image uploads
- **CORS Support** - Cross-Origin Resource Sharing for frontend integration
- **Input Validation** - Email validation and password strength checking

### Cloud Integration

- **Cloudinary Integration** - Store and manage product images in the cloud
- **Image Optimization** - Automatic image processing and optimization

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcrypt
- **Validation:** validator.js
- **File Upload:** Multer
- **Cloud Storage:** Cloudinary
- **Payments:** Stripe, Razorpay
- **Environment Management:** dotenv

## 📋 Prerequisites

Before running the application, ensure you have:

- Node.js (v14 or higher)
- MongoDB instance (local or Atlas)
- Cloudinary account for image storage
- Stripe account and API keys
- Razorpay account and API keys

## ⚙️ Installation

1. **Clone or navigate to the backend directory:**

   ```bash
   cd BackEnd
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env` file with the following variables:**
   ```env
   PORT=5000
   MONGO_CONNECTION_URL=mongodb+srv://username:password@cluster.mongodb.net
   JWT_SECRET=your_jwt_secret_key
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=admin_password
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_SECRET_KEY=your_razorpay_secret_key
   ```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm run server
```

The server will start on the port specified in `.env` (default: 5000).

## 📡 API Endpoints

### User Routes (`/api/user`)

| Method | Endpoint    | Description         | Auth |
| ------ | ----------- | ------------------- | ---- |
| POST   | `/register` | Register a new user | No   |
| POST   | `/login`    | Login user          | No   |
| POST   | `/admin`    | Admin login         | No   |

### Product Routes (`/api/product`)

| Method | Endpoint  | Description                | Auth  |
| ------ | --------- | -------------------------- | ----- |
| POST   | `/add`    | Add new product            | Admin |
| GET    | `/list`   | List all products          | No    |
| POST   | `/remove` | Remove product             | Admin |
| POST   | `/single` | Get single product details | No    |

### Cart Routes (`/api/cart`)

| Method | Endpoint  | Description               | Auth |
| ------ | --------- | ------------------------- | ---- |
| POST   | `/add`    | Add item to cart          | User |
| POST   | `/update` | Update cart item quantity | User |
| POST   | `/get`    | Get user's cart           | User |

### Order Routes (`/api/order`)

| Method | Endpoint          | Description               | Auth  |
| ------ | ----------------- | ------------------------- | ----- |
| POST   | `/COD`            | Place order with COD      | User  |
| POST   | `/stripe`         | Place order with Stripe   | User  |
| POST   | `/razorpay`       | Place order with Razorpay | User  |
| POST   | `/alladminorders` | Get all orders            | Admin |
| POST   | `/userorders`     | Get user's orders         | User  |
| POST   | `/updatestatus`   | Update order status       | Admin |
| POST   | `/verifyStripe`   | Verify Stripe payment     | User  |
| POST   | `/verifyRazorpay` | Verify Razorpay payment   | User  |

## 📊 Database Models

### User Model

```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  cartData: Object
}
```

### Product Model

```javascript
{
  name: String,
  description: String,
  price: Number,
  image: Array,
  category: String,
  subCategory: String,
  sizes: Array,
  bestseller: Boolean,
  date: Number
}
```

### Order Model

```javascript
{
  userId: String,
  items: Array,
  amount: Number,
  address: Object,
  status: String,
  paymentMethod: String,
  payment: Boolean,
  date: Number
}
```

## 🔐 Authentication

The API uses JWT tokens for authentication. After successful login or registration, a token is returned which should be included in the `Authorization` header for protected routes:

```
Authorization: Bearer <token>
```

## 💳 Payment Integration

### COD (Cash on Delivery)

Simple order creation without immediate payment verification.

### Stripe

- Creates checkout sessions
- Handles payment verification
- Redirects to success/cancel URLs

### Razorpay

- Generates Razorpay orders
- Handles payment callbacks
- Verifies payment details

## 📝 Error Handling

All endpoints return a standard JSON response:

### Success Response

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error description"
}
```

## 🔧 Development

### Key Configuration Files

- `config/mongodb.js` - MongoDB connection configuration
- `config/cloudinary.js` - Cloudinary setup
- `middleware/authUser.js` - User authentication middleware
- `middleware/adminAuth.js` - Admin authentication middleware
- `middleware/multer.js` - File upload configuration

## 📦 Dependencies

- `express` - Web framework
- `mongoose` - MongoDB ODM
- `jsonwebtoken` - JWT authentication
- `bcrypt` - Password hashing
- `validator` - Input validation
- `multer` - File upload handling
- `cloudinary` - Cloud image storage
- `stripe` - Stripe payment gateway
- `razorpay` - Razorpay payment gateway
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management

## 🎯 Future Enhancements

- Product reviews and ratings system
- Wishlist functionality
- Email notifications
- Order tracking
- Inventory management
- Advanced analytics
- Discount and coupon system

## 📄 License

This project is property of the development team.

## 🤝 Support

For issues or questions, please contact the development team.

---

**Last Updated:** March 13, 2026
