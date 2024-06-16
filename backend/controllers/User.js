const router = require('express').Router();

// login/signup routes
router.post('/', async (req, res) => {
    const { name, password, email } = req.body;
    const user = await user.create({ name, password, email });
    res.json(user);
})

router.get('/', async (req, res) => {
    const user = await user.findAll();
    res.json(user);
})

module.exports = router;

