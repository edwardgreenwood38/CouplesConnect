const router = require('express').Router();
const db = require('../models');
const { Event } = db;   

// event routes
console.log("event controller");
const { title } = req.body

const event = await Event.create({ title})
res.json(event);

router.get('/', async (req, res) => {
const event = await Event.findAll();
res.json(event);
})

module.exports = router;
