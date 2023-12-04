const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
    res.render('coming')
});

router.get('/home', function(req, res){
    res.render('home')
});

router.get('/product', function(req, res){
    res.render('product')
});

router.get('/contact', function(req, res){
    res.render('contact')
});

module.exports = router