const express = require('express');
const router = express.Router();
const User = require('../models/data');

router.get('/add', (req, res) => {
  res.render('add')
});

router.get('/employed', (req, res) => {
  User.find({ job: {$ne:null} })
    .then((data) => {
      res.render('index', { users: data });
    });
});

router.get('/unemployed', (req, res) => {
  User.find({ job: null })
    .then((data) => {
      res.render('index', { users: data });
    });
});

router.get('/', (req, res) => {
  User.find()
    .then((data) => {
      res.render('index', { users: data });
    });
});



router.get('/:id', (req, res) => {
  User.findOne({ id: parseInt(req.params.id) })
    .then((data) => {
      res.render('profile', data);
    })
    .catch((err) => {
    console.log(err);
    })
});

router.post('/users/add', (req, res) => {
  new User(req.body).save()
  .then((mongoObj) => {
    res.redirect('/users')
  })
  .catch((err) => {
    res.send(err);
  })
})

module.exports = router;
