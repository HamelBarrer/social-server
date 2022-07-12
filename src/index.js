import app from './app.js';

import sequelize from './db/connection.js';

import './models/user.js';

const main = async () => {
  try {
    await sequelize.sync();
    app.listen('3000');
  } catch (error) {
    console.error(error);
  }
};

main();
