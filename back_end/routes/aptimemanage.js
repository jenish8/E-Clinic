const express = require('express');
const Aptime = require('../controllers/aptimeController');
const router = express.Router();

//fetch user => GET
router.get('/get_time/:time', Aptime.getShowTIme);

//insert user => Post
router.post('/add_time', Aptime.postDate);

router.get('/stime1/:date/:time', Aptime.getUserShowTime1);

router.get('/stime/:date', Aptime.getUserShowTime);

router.get('/alltime', Aptime.getAlltime);


module.exports = router;