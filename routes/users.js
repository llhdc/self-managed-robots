const express = require('express');
const router = express.Router();
const User = require('../models/data');

router.get('/:id', (req, res) => {
  User.findOne({ id: parseInt(req.params.id) })
    .then((data) => {
      res.render('profile', data);
    });
});

router.get('/add', (req, res) => {
  res.render('addUser')
})

module.exports = router;
