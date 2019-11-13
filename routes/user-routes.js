const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/findUser/:user', async (req, res) => {
    const result = await models.User.findAll({
        where: {
            username: req.params.user
        }
    });
    res.send(result);
});

router.post('/add', async (req, res) =>{
    await models.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    res.status(201).send('User added successfully');
});

module.exports = router;