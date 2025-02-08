# Login System (React + Express + SQLite)

A simple login authentication system using React for the frontend and Express with SQLite for the backend.  
Validates user credentials against a database.

---

## Features
- User authentication with a login form  
- Backend validation using SQLite  
- Error handling for incorrect credentials and network issues  
- CORS enabled for local development  

---

## Tech Stack

### Frontend (React)
- React.js  
- Fetch API (for HTTP requests)  

### Backend (Node.js + Express + SQLite)
- Express.js  
- SQLite (lightweight database)  
- CORS (Cross-Origin Resource Sharing)  

---

## Setup & Installation



2. Backend Setup (Express & SQLite)

cd backend
npm install
nodemon server.js

Server runs at http://localhost:3001

3. Frontend Setup (React)

cd myapp
npm install
npm start

Frontend runs at http://localhost:3000

Usage
	1.	Open http://localhost:3000 in your browser
	2.	Enter username and password
	3.	Click Login
	4.	If correct, you see "Your password is correct, thank you!"
	5.	If incorrect, you see "Your password is incorrect, please try again."

Security To-Do
	•	Hash passwords instead of storing them in plain text
	•	Use environment variables for database connection
	•	Enforce HTTPS in production

License

This project is licensed under the MIT License.

Author

ahmed tamer
GitHub
https://github.com/Atamer77/loginForm

---


