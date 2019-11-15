const express = require('express');
const cors = require('cors');
const user_router = require('./routes/user-routes');
const recipe_router = require('./routes/recipe-routes');
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log('Listening...');
    next();
});

app.use('/user', user_router);
app.use('/recipe', recipe_router);

app.listen(8080);