const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const port = 3000;

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const User = require('./models/User')(sequelize);
const Event = require('./models/Event')(sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log("Database synced!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
