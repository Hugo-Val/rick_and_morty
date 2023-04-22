// JavaScript source code
const express = require('express');
const router = express.Router();
const  login  = require('../controllers/login');
const  postUser  = require('../controllers/postUser');

router.get('/login', login);
router.post('/login', postUser);




module.exports = router;