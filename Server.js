
const express = require('express');//light frame work to handle http requests

const cors = require('cors');//allow server to listen in 3001 port enable the front end 3000 to communicate with 3001 backend

const sqlite3 = require('sqlite3').verbose();//allow you to store data and retrieve user credentials verbose enable detailed error

const app = express();//create an instance of express application

app.use(cors({origin:'http://localhost:3000'})); //allow request only from this local host

app.use(express.json()); //convert incoming db to json format 

// Connect to SQLite database
let db = new sqlite3.Database('login.db', (err) => {
    if (err) {
        console.error('Database Connection Error:', err.message);//used to catch api failures //show error message
    } else {
        console.log(' Connected to the database');//show this text in the terminal
    }
});

// Login validation route
app.post('/validatePassword', (req, res) => {// => sympole in js used in arrow functions that has more thn one parameter
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Missing username or password" });//used for client error
    }

    const query = `SELECT * FROM login  WHERE username = ? and password = ? `;

    db.all(query, [username, password], (err, rows) => {
        if (err) {
            console.error('Database Query Error:', err);
            return res.status(500).json({ error: "Internal server error" });//network error
        }

        res.json({ validation: rows.length > 0 });//  theres data in the rows
    });
});

// Start server on port 3001
app.listen(3001, () => {
    console.log(' Server LISTENING on http://localhost:3001');
});