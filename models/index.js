const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'meal_prep',
    'root',
    'password', {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
);

const User = sequelize.import(__dirname + '/user-model');
const Recipe = sequelize.import(__dirname + '/recipe-model');

// Association

//one to many
Recipe.belongsTo(User);
User.hasMany(Recipe);

sequelize.sync({ force: true });
// sequelize.sync();

module.exports = {
    User,
    Recipe
};