# Task Management System RESTful API

This project provides a RESTful API for a Task Management System that allows users to create, edit, delete, and list tasks. Users can also mark tasks as completed.

## Features

- User Registration and Login (with JWT authentication)
- Task Management:
  - Create tasks
  - Update tasks
  - Delete tasks
  - List tasks
  - Mark tasks as completed

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (JSON Web Tokens) for authentication
- bcrypt for password hashing

## Setup

1. Clone or download this repository:
   
   git clone https://github.com/salihkaankoc/task-manager-api.git
   
   cd task-manager-api
   
2. Install the necessary dependencies:
 
   npm install
   
3. Create a .env file and fill it with the following:

   <img width="236" alt="Ekran Resmi 2024-07-25 16 44 31" src="https://github.com/user-attachments/assets/86095d6c-8cbb-454c-968e-cae55f7cc69a">

4. Start the server

   npm start



**API Usage**

User Registration

URL: /api/auth/register

Method: POST

Body:

<img width="250" alt="Ekran Resmi 2024-07-25 16 46 07" src="https://github.com/user-attachments/assets/824e5fac-dd60-4bde-be92-e792729caa88">

**User Login**

URL: /api/auth/login

Method: POST

Body:


<img width="250" alt="Ekran Resmi 2024-07-25 16 46 55" src="https://github.com/user-attachments/assets/e4ea36e5-b786-450f-92f6-302aefc55483">

Protected Routes

For routes that require authentication, you need to add a token to the request headers.

**Example: Create a Task**

URL: /api/tasks

Method: POST

Headers:

Authorization: Bearer <your_token>

Body:




<img width="414" alt="Ekran Resmi 2024-07-25 16 47 48" src="https://github.com/user-attachments/assets/61f29f11-01cd-4cba-af26-a64b3219ea4a">

**Update a Task**

URL: /api/tasks/:id

Method: PUT

Headers:

Authorization: Bearer <your_token>

Body:

<img width="414" alt="Ekran Resmi 2024-07-25 16 48 41" src="https://github.com/user-attachments/assets/d05d5083-b160-43e7-b788-20969c09b036">



Project Structure


<img width="239" alt="Ekran Resmi 2024-07-25 16 49 43" src="https://github.com/user-attachments/assets/18156d43-f056-4f12-9719-9446b9f8bf5d">



