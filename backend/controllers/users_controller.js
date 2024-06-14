const router = require('express').Router();
// const db = require('./db');

// const { User } = db;

// Login route
router.post('/', (req, res) => {
    const { username, password, email } = req.body;
    User.create({ username, password, email })
    res.status(201).send('User created');
})

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.status(200).send(users);
})

module.exports = router;

