// modules & globals
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();




// express settings
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
// serve static frontend in prodution mode
if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, 'frontend')));
}

// controller & routes
app.use(express.urlencoded({ extended: true }));

app.use('/users', require('./controllers/users_controller'));
app.use('/registration', require('./controllers/registration_controller'));




// listen for connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
});
