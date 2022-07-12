import app from './app.js';

import sequelize from './db/connection.js';

const main = async () => {
  try {
    await sequelize.authenticate();
    app.listen('3000');
  } catch (error) {
    console.error(error);
  }
};

main();
