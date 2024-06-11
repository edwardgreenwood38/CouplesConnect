// index.js

const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const db = require('./models');

const app = express();
const port = 5000;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Users routes
app.get('/users', async (req, res) => {
  const users = await db.User.findAll();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const user = await db.User.create(req.body);
  res.json(user);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
