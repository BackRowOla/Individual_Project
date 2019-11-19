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
// const weekPlan = sequelize.import(__dirname + '/weekPlan-model');

// Association

//one to many
User.hasMany(Recipe);
Recipe.belongsTo(User);

// sequelize.sync({ force: true }).then(() => {
//     User.create({ username: 'admin', email: 'admin@gmail.com', password: 'admin' });
//     User.create({ username: 'Ola', email: 'o@gmail.com', password: 'pass1' });
//     Recipe.create({ name: 'Pizza', cooking_length: 35, meal_period: 'Lunch', ingredients: 'Pizza Dough. Toppings, Tomato Sauce, Cheese', cooking_method: '1) Stretch/roll out pizza dough. 2) Spread sauce evenly across surface of dough, be careful not to add too much. 3) Add cheese on top of sauce. 4) Generously place toppings. 5) Place in pre-heated oven for 25 mins at 180 Degree"s Celcius', userId: 1 });
// });
sequelize.sync();

module.exports = {
    User,
    Recipe,
    // weekPlan
};