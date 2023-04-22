// JavaScript source code
const express = require('express');
const router = express.Router();
const  postFav = require('../controllers/postFav');
const  deleteFav  = require('../controllers/deleteFav');


router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;