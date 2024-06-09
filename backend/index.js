const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const port = 3000;

const sequelize = new Sequelize({
  dialect: 'postgres',
  storage: './database.sqlite'
});


const User = require('./models/user')(sequelize);
const Event = require('./models/event')(sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log("Database synced!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
