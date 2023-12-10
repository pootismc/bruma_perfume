const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('home')
});

router.get('/collabs', function(req, res){
    res.render('coming')
});

router.get('/perfumes', function(req, res){
    res.render('products')
});

router.get('/perfumes/001', function(req, res){
    res.render('001')
});

router.get('/perfumes/002', function(req, res){
    res.render('002')
});

router.get('/perfumes/003', function(req, res){
    res.render('003')
});

router.get('/contact', function(req, res){
    res.render('contact')
});

router.get('/disclaimer', function(req, res){
    res.render('disclaimer')
});

module.exports = router