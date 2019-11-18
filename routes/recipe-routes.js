const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/all', async(req, res) => {
    res.send(await models.Recipe.findAll());
});

router.get('/:id', async(req, res) => {
    const result = await models.Recipe.findAll({
        where: {
            userId: req.params.id
        }
    });
    res.send(result);
});

router.post('/add', async(req, res) => {
    await models.Recipe.create({
        name: req.body.name,
        cooking_length: req.body.cooking_length,
        meal_period: req.body.meal_period,
        ingredients: req.body.ingredients,
        cooking_method: req.body.cooking_method,
        userId: req.body.userId 
    });
    res.status(201).send('Recipe added successfully');
});

module.exports = router;