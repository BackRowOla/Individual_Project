const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/all', async (req, res) => {
    res.send(await models.weekPlan.findAll());
});

router.post('/add', async(req, res) => {
    await models.weekPlan.create({
        day: req.body.day,
        userId: req.body.userId,
        recipeId: req.body.recipeId,
        meal_period: req.body.meal_period
    });
    res.status(201).send('plan added');
});

module.exports = router;