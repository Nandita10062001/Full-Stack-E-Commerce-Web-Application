# Full-Stack E-Commerce Web Application

<div align="center">
  <h3>A modern, feature-rich e-commerce platform built with the MERN Stack</h3>
  
  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
  ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
  ![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
</div>


---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About The Project
This Full-Stack E-Commerce Web Application is something I built mainly to learn and revise core full-stack concepts. I wanted to understand how a complete system works end-to-end, especially on the backend side, while still making a fully functional website.
The project helped me explore how products are fetched and displayed, how user authentication works behind the scenes, how carts and orders are managed, and how all of this connects through clean APIs. My focus wasn’t on fancy UI design, it was about learning how to build everything from scratch, structuring the backend properly, and seeing how all the pieces of a real-world MERN application fit together.

---

## 🛠️ Built With

### Frontend
- **[React.js](https://reactjs.org/)** - UI library for building interactive user interfaces
- **[Redux](https://redux.js.org/)** - State management for predictable application state
- **[React Router](https://reactrouter.com/)** - Declarative routing for React applications
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client
- **[Bootstrap](https://getbootstrap.com/)** / **[Material-UI](https://mui.com/)** - UI component libraries

### Backend
- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment
- **[Express.js](https://expressjs.com/)** - Fast, minimalist web framework
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database for flexible data storage
- **[Mongoose](https://mongoosejs.com/)** - MongoDB object modeling tool

### Additional Technologies
- **[JWT](https://jwt.io/)** - Secure authentication and authorization
- **[Bcrypt](https://www.npmjs.com/package/bcrypt)** - Password hashing
- **[Stripe](https://stripe.com/)** / **[PayPal](https://www.paypal.com/)** - Payment processing integration

---

## ✨ Features

### User Features
- 🔐 **User Authentication & Authorization**
  - User registration and login
  - JWT-based authentication
  - Password encryption with bcrypt
  - Role-based access control (User/Admin)

- 🛍️ **Product Management**
  - Browse products by category
  - Advanced search and filtering
  - Product details with images and descriptions
  - Product ratings and reviews

- 🛒 **Shopping Cart**
  - Add/remove items from cart
  - Update product quantities
  - Real-time cart total calculation
  - Persistent cart across sessions

- 💳 **Checkout & Orders**
  - Secure checkout process
  - Multiple payment options (Stripe/PayPal integration)
  - Order confirmation and tracking
  - Order history for registered users

### Admin Features
- 📊 **Admin Dashboard**
  - Product CRUD operations
  - Category management
  - User management
  - Order management and status updates
  - Sales analytics and reporting

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0 or higher)
  ```bash
  node --version
  ```

- **npm** (v6.0 or higher)
  ```bash
  npm --version
  ```

- **MongoDB** (v4.0 or higher)
  - Install MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community)
  - Or use MongoDB Atlas for cloud database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nandita10062001/Full-Stack-E-Commerce-Web-Application.git
   cd Full-Stack-E-Commerce-Web-Application
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure Environment Variables**

   Create a `.env` file in the backend directory:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Database
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   # Or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

   # JWT Secret
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=30d

   # Payment Gateway (Stripe)
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

   # PayPal (Optional)
   PAYPAL_CLIENT_ID=your_paypal_client_id
   ```

   Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

5. **Seed the Database** (Optional)
   ```bash
   cd backend
   npm run seed
   ```

---

## 💻 Usage

### Running the Application

1. **Start MongoDB**
   ```bash
   # If running MongoDB locally
   mongod
   ```

2. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend server will run on `http://localhost:5000`

3. **Start the Frontend Application**
   ```bash
   cd frontend
   npm start
   ```
   The React app will run on `http://localhost:3000`

4. **Access the Application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000/api](http://localhost:5000/api)

### Default Admin Credentials
```
Email: admin@ecommerce.com
Password: admin123
```

---

## 📁 Project Structure

```
Full-Stack-E-Commerce-Web-Application/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/           # Route controllers
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   ├── middleware/            # Custom middleware
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/                # Mongoose models
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Category.js
│   ├── routes/                # API routes
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   └── userRoutes.js
│   ├── utils/                 # Utility functions
│   ├── .env                   # Environment variables
│   ├── server.js              # Entry point
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── ProductCard.js
│   │   │   └── Cart.js
│   │   ├── pages/             # Page components
│   │   │   ├── Home.js
│   │   │   ├── ProductDetails.js
│   │   │   ├── Cart.js
│   │   │   ├── Checkout.js
│   │   │   └── Admin/
│   │   ├── redux/             # Redux store, actions, reducers
│   │   │   ├── store.js
│   │   │   ├── actions/
│   │   │   └── reducers/
│   │   ├── services/          # API service functions
│   │   ├── utils/             # Helper functions
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register      # Register new user
POST   /api/auth/login         # User login
GET    /api/auth/profile       # Get user profile (Protected)
PUT    /api/auth/profile       # Update user profile (Protected)
```

### Products
```
GET    /api/products           # Get all products
GET    /api/products/:id       # Get single product
POST   /api/products           # Create product (Admin)
PUT    /api/products/:id       # Update product (Admin)
DELETE /api/products/:id       # Delete product (Admin)
POST   /api/products/:id/review # Add product review (Protected)
```

### Orders
```
POST   /api/orders             # Create new order (Protected)
GET    /api/orders/myorders    # Get user orders (Protected)
GET    /api/orders/:id         # Get order by ID (Protected)
PUT    /api/orders/:id/pay     # Update order to paid (Protected)
GET    /api/orders             # Get all orders (Admin)
PUT    /api/orders/:id/deliver # Update order to delivered (Admin)
```

### Users (Admin)
```
GET    /api/users              # Get all users (Admin)
GET    /api/users/:id          # Get user by ID (Admin)
PUT    /api/users/:id          # Update user (Admin)
DELETE /api/users/:id          # Delete user (Admin)
```

---

## 🗺️ Roadmap

- [x] User authentication and authorization
- [x] Product catalog with search and filtering
- [x] Shopping cart functionality
- [x] Checkout and order processing
- [x] Admin dashboard
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Order tracking system
- [ ] Email notifications
- [ ] Product recommendations
- [ ] Wishlist feature
- [ ] Product reviews and ratings improvement
- [ ] Multi-language support
- [ ] Mobile app version
- [ ] Advanced analytics dashboard

See the [open issues](https://github.com/Nandita10062001/Full-Stack-E-Commerce-Web-Application/issues) for a full list of proposed features and known issues.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Don't forget to give the project a star! ⭐ Thanks again!

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 📧 Contact

**Nandita Nandakumar**

- GitHub: [@Nandita10062001](https://github.com/Nandita10062001)
- Project Link: [https://github.com/Nandita10062001/Full-Stack-E-Commerce-Web-Application](https://github.com/Nandita10062001/Full-Stack-E-Commerce-Web-Application)

---

## 🙏 Acknowledgments

Resources and inspirations that helped build this project:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Redux Documentation](https://redux.js.org/introduction/getting-started)
- [Stripe API Documentation](https://stripe.com/docs/api)
- [JWT.io](https://jwt.io/) - For understanding JSON Web Tokens
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Font Awesome](https://fontawesome.com) - For icons
- [Shields.io](https://shields.io) - For badges

---

<div align="center">
  <p>Made with ❤️ using MERN Stack</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
