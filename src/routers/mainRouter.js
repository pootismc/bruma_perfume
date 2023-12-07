const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('coming')
});

router.get('/scented-candles', function(req, res){
    res.render('coming')
});

router.get('/perfumes', function(req, res){
    res.render('perfume')
});

router.get('/001', function(req, res){
    res.render('001')
});

router.get('/002', function(req, res){
    res.render('002')
});

router.get('/003', function(req, res){
    res.render('003')
});

router.get('/contact', function(req, res){
    res.render('contact')
});

module.exports = router