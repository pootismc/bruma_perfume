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

module.exports = router