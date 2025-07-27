# 📚 BOOKLY - Online Bookstore Platform

A modern, full-stack online bookstore application built with React, Node.js, and MongoDB. BOOKLY provides a seamless experience for users to browse, discover, and access educational books and courses.

## 🚀 Live Demo & Deployment


**Experience BOOKLY Live!**

* **Frontend (User Interface):** [https://book-store-mxyz.vercel.app/](https://book-store-mxyz.vercel.app/)
* **Backend (API Endpoint):** [https://bookstore-zii3.onrender.com](https://bookstore-zii3.onrender.com)
    * *Note: This is the base URL for the API. It is not designed to be browsed directly, but serves data to the frontend. Refer to the 'API Endpoints' section below for specific routes.*

---

## 🖼️ Landing Page Preview

Here's a preview of the BOOKLY online bookstore platform:

![BOOKLY Landing Page](https://github.com/AmanVerma0903/bookStore/blob/bfe1f60eba0aab875af02ac36b67ceef25237606/bookly.png)

---




## 🌟 Features

### 🔐 Authentication System
- **User Registration**: Secure signup with email validation
- **User Login**: Password-protected authentication
- **Session Management**: Persistent login state with localStorage
- **Protected Routes**: Course access requires authentication

### 📖 Book Management
- **Book Catalog**: Browse available books with images and details
- **Book Categories**: Organized by different categories
- **Book Details**: Complete information including title, price, and images
- **Search Functionality**: Find books quickly with search bar

### 🎓 Course System
- **Course Access**: Exclusive course content for registered users
- **Course Catalog**: Browse and explore available courses
- **Protected Course Routes**: Only authenticated users can access courses

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Modern Styling**: Built with Tailwind CSS and DaisyUI
- **Interactive Components**: Smooth animations and transitions
- **Toast Notifications**: Real-time feedback for user actions

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Toast notifications
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **React Slick** - Carousel/slider components

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
book store/
├── backend/
│   ├── controller/
│   │   ├── book.controller.js    # Book CRUD operations
│   │   └── user.controller.js    # User authentication
│   ├── model/
│   │   ├── book.model.js         # Book schema
│   │   └── user.model.js         # User schema
│   ├── route/
│   │   ├── book.route.js         # Book API routes
│   │   └── user.route.js         # User API routes
│   ├── index.js                  # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Banner.jsx        # Hero section
│   │   │   ├── Cards.jsx         # Book cards
│   │   │   ├── Course.jsx        # Course component
│   │   │   ├── Footer.jsx        # Footer component
│   │   │   ├── FreeBook.jsx      # Free book section
│   │   │   ├── Login.jsx         # Login modal
│   │   │   ├── Logout.jsx        # Logout component
│   │   │   ├── Navbar.jsx        # Navigation bar
│   │   │   └── SignUp.jsx        # Registration form
│   │   ├── context/
│   │   │   └── AuthProvider.jsx  # Authentication context
│   │   ├── Courses/
│   │   │   └── Courses.jsx       # Course listing page
│   │   ├── home/
│   │   │   └── Home.jsx          # Home page
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # App entry point
│   ├── public/                   # Static assets
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd book-store
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the backend directory:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The server will start on `http://localhost:3000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 🔧 API Endpoints

### User Authentication
- `POST /user/signup` - User registration
- `POST /user/login` - User login

### Book Management
- `GET /book` - Get all books
- `POST /book` - Add new book
- `GET /book/:id` - Get book by ID
- `PUT /book/:id` - Update book
- `DELETE /book/:id` - Delete book

## 🔐 Authentication Flow

1. **Registration**: Users can create accounts with email and password
2. **Login**: Secure authentication with bcrypt password hashing
3. **Session Management**: User data stored in localStorage
4. **Protected Routes**: Course access requires authentication
5. **Logout**: Clear session and redirect to home

## 🎨 UI Components

- **Navbar**: Responsive navigation with authentication status
- **Banner**: Hero section with call-to-action
- **Book Cards**: Display book information with images
- **Course Section**: Protected course content
- **Forms**: Login and registration with validation
- **Toast Notifications**: User feedback for actions

## 🔒 Security Features

- **Password Hashing**: bcryptjs for secure password storage
- **Input Validation**: Form validation on both frontend and backend
- **CORS Configuration**: Secure cross-origin requests
- **Environment Variables**: Sensitive data protection

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## 🚀 Deployment

### Backend Deployment
- Deployed to Render
- Set environment variables for production
- Configure MongoDB connection

### Frontend Deployment
- Build the application: `npm run build`
- Deployed to Vercel
- Configure API endpoints for production


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request






## 👨‍💻 Author

**Aman Verma**


Created with ❤️ for the BOOKLY online bookstore platform.

---


**BOOKLY** - Your gateway to knowledge and learning! 📚✨ 


