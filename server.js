const express = require('express');
const cors = require('cors');
const user_router = require('./routes/user-routes');
const recipe_router = require('./routes/recipe-routes');
const weekPlan_router = require('./routes/weekPlan-routes');
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log('Listening...');
    next();
});

app.use('/user', user_router);
app.use('/recipe', recipe_router);
app.use('/plan', weekPlan_router);
app.get('/deletethis', (req, res) => {
    res.send('it worked');
});

app.listen(8080);


module.exports = app;