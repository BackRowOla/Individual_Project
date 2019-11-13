const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'meal_prep',
    'root',
    'password',
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
);

const User = sequelize.import(__dirname + '/user-model');

// sequelize.sync({force: true});
sequelize.sync();

module.exports = {
    User
};