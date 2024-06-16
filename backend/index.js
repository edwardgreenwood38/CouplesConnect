// modules & globals
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();





// express settings
app.use('/user', require('./controllers/User'));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
// serve static frontend in prodution mode
if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, 'frontend')));
}

// controller & routes
app.use(express.urlencoded({ extended: true }));






// listen for connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
});
