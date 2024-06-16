const router = require('express').Router();
const db = require('../models');
const { User } = db;   


// login/signup routes
router.post('/', async (req, res) => {
    console.log("user controller");
    const { name, password, email } = req.body
  
    const user = await User.create({ name, password, email })
    res.json(user);
})

router.get('/', async (req, res) => {
    const user = await User.findAll();
    res.json(user);
})

module.exports = router;

