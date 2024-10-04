const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

app.use(express.json());

db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)");
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    db.run("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], function(err) {
        if (err) {
            return res.status(500).json({ message: "Error creating user" });
        }
        res.status(201).json({ id: this.lastID });
    });
});

app.get('/users', (req, res) => {
    db.all("SELECT * FROM users", (err, rows) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching users" });
        }
        res.json(rows);
    });
});

app.listen(3001, () => {
    console.log('User service running on port 3001');
});
const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

app.use(express.json());

db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)");
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    db.run("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], function(err) {
        if (err) {
            return res.status(500).json({ message: "Error creating user" });
        }
        res.status(201).json({ id: this.lastID });
    });
});

app.get('/users', (req, res) => {
    db.all("SELECT * FROM users", (err, rows) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching users" });
        }
        res.json(rows);
    });
});

app.listen(3001, () => {
    console.log('User service running on port 3001');
});
