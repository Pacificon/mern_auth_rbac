# mern_auth_rbac - Full-Stack Application with React, Node.js, and MongoDB

This is a full-stack web application built with **React** for the frontend, **Node.js/Express** for the backend, and **MongoDB** for the database. The application provides features like user registration, login, role-based access control (Admin and User).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Testing the Application Locally](#testing-the-application-locally)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features

- User registration_ and login functionality.
- Role-based access control (Admin, User).
- Admin panel.
- Logout functionality.
- Secure JWT authentication.

## Tech Stack

- **Frontend**: React, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Setup Instructions

### Backend Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Pacificon/mern_auth_rbac.git
   cd mern_auth_rbac
   ```

2. **Install Dependencies**

   Navigate to the `backend/` directory:
   ```bash
   cd backend
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the server/ folder and add the following environment variables:

   ```env
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

   - `MONGO_URI`: Your MongoDB connection string (can use MongoDB Atlas or a local MongoDB instance).
   - `JWT_SECRET`: A secret key used for signing JSON Web Tokens.

4. **Start the Backend Server**

   Run the backend server locally:

   ```bash
   nodemon server.js
   ```

   The backend should now be running on http://localhost:5000.

### Frontend Setup

1. **Install Frontend Dependencies**

   Navigate to the `frontend/` directory:

   ```bash
   cd frontend
   npm install
   ```

2. **Update API URL in Frontend**

   Make sure the frontend is calling the correct backend API endpoint (e.g., http://localhost:5000/api/).

   - If you're running the backend locally, the API URL should be set to http://localhost:5000/api/.
   - For production, update the URL to point to your deployed API.

3. **Start the React App**

   Run the frontend server locally:

   ```bash
   npm start
   ```

   The frontend should now be running on http://localhost:3000.

## Testing the Application Locally

### Register a New User

Open the frontend in your browser (http://localhost:3000). Navigate to the Register page and create a new user by filling in the form with the required details.

### Login

After registering, go to the Login page, enter the credentials you used for registration, and log in.

### Access the Welcome Page

After logging in, you should be redirected to the Welcome page. The role of the user will be displayed, and if the user is an Admin, there will be an Admin Panel button.

### Admin Panel

If the logged-in user has an Admin role, they will have access to the Admin Panel.

### Logout

You can log out by clicking the Logout button on the Welcome page. The session will end, and you will be redirected to the login page.

## Deployment

### Option 1: Deploy on Heroku

1. **Set Up Heroku CLI**

   Install the Heroku CLI and log in:

   ```bash
   heroku login
   ```

2. **Create a Heroku App**

   In your project root, run:

   ```bash
   heroku create
   ```

3. **Push Code to Heroku**

   Push the code to Heroku's Git repository:

   ```bash
   git push heroku master
   ```

4. **Set Up Environment Variables on Heroku**

   Set the MongoDB URI and JWT secret:

   ```bash
   heroku config:set MONGO_URI=your_mongo_connection_string
   heroku config:set JWT_SECRET=your_jwt_secret
   ```

5. **Access the App**

   Your app will be accessible at the Heroku URL. You can visit it using:

   ```bash
   heroku open
   ```

## Contributing

If you want to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.


