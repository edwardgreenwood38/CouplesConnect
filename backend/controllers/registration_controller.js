const router = require('express').Router();
import User from  '../models/user';

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

