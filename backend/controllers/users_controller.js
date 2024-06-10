const router = require('express').Router();
const db = require('./db');

const { User } = db;

router.post('/', (req, res) => {
    const { username, password } = req.body;
    User.create({ username, password })
    res.status(201).send('User created');
})

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.status(200).send(users);
})

module.exports = router;
