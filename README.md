# e-commerce-follow-along
### Project Overview: E-Commerce Application (MERN Stack)
This project will guide you through building a full-stack e-commerce web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). You will learn how to implement key functionalities such as user authentication, **product management, and **order handling while gaining hands-on experience with REST APIs, database schema design, and frontend development with React.

---

### Key Features:
- User Authentication: Secure login and registration with JWT.
- Product Management: CRUD operations for products, with features like filtering and sorting.
- Order Handling: Users can place and view orders.
- REST API: Build scalable API endpoints for managing users, products, and orders.
- Frontend: Responsive UI built with React for a smooth user experience.

---

### Core Concepts:
- MERN Stack: Using MongoDB, Express.js, React.js, and Node.js for full-stack development.
- REST APIs: Design and develop API endpoints for user and product management.
- Authentication: Implement secure login and session management.
- Database Schema: Design MongoDB schemas for users, products, and orders.

---

### Next Steps: 
1. Set up the development environment and install dependencies.
2. Implement a basic server using Node.js and Express.
3. Start building the React frontend and connect it to the backend.
4. Design MongoDB schemas for structured data storage.

This project will help you master the full-stack development process, from database to frontend, with a focus on scalability and user interaction.

 ### Milestone 2 ###
1. Created a structured folder hierarchy for the project.
2. Set up a React app for the frontend.
3. Set up a Node.js server for the backend.
4. Configured Tailwind CSS for streamlined styling.
5. Added optional extensions for improving development efficiency.
6. Built a functional and styled Login Page for the frontend.

### Milestone 3 ###

1. Set up dedicated folders for organizing backend code effectively.
2. Initialized and configured a Node.js server to handle API requests.
3. Connected the application to MongoDB to store and manage data.
4. Implemented basic error handling to ensure smooth server operation.

### Milestone 4 ###

This milestone focuses on implementing user data handling and file upload functionality. 

Key achievements include:  
1. User Model: Defined a blueprint for storing user data in the database, ensuring a consistent structure for user-related information.  
2. User Controller: Developed logic to manage user operations such as adding new users and retrieving user information.  
3. File Upload Setup: Integrated and configured Multer to enable file uploads (e.g., user profile images) and store them efficiently in the application.  

By completing this milestone, the application now supports user management and file uploads, enhancing its core functionality.

## MILESTONE 5 :-
1. Created a Sign-Up Page in React.
2. Implemented form validation for:
    Name (required)
    Email (valid format required)
    Password (minimum 2 characters)
    Password Confirmation (must match password)

4. Used React Router for navigation.

## Milestone 6 :-
## Milestone 6: User Registration and Authentication
1. User Creation Endpoint (/create-user):
 Implemented an endpoint to create a new user.
 Validated the email to ensure the user doesn’t already exist.
 Successfully handled file uploads (e.g., avatar) using multer.

 2. Password Hashing:
 Used bcryptjs to hash passwords before saving them to the database, ensuring secure password storage.

4. Error Handling:
Incorporated centralized error handling using a custom ErrorHandler class.
Applied catchAsyncErrors middleware to manage asynchronous errors in the routes.

5. User Data Storage:
Stored user details (e.g., name, email, password, avatar) in MongoDB with encrypted password.

6. Email Notification (Optional):
Integrated an email notification system to send a welcome email to the user after successful registration (using sendMail).

7. JWT Token Generation:
Added a method to generate JWT tokens upon user login (for future use in authentication routes).


### Milestone 7: Create Login Endpoint
Task Completed ✅
Implemented a login API endpoint.
Accepted user credentials (email/username and password).
Retrieved the corresponding user from the database.
Validated the password using bcrypt.
Compared the entered password with the stored hashed password for authentication.
Generated a JWT token upon successful login for authentication.
Implemented error handling for invalid credentials and server errors.

## Milestone -8 Progress:
Three files were made:
1. Product.jsx in Components/auth to store info. about product details.
2. user.js
3. data/js

We have createrd a reusable card component with props for product details.