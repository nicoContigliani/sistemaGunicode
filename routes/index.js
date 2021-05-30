const express = require('express');
const router = express.Router();
const crud = require('../controllers/crud');
const sigin = require('../controllers/sigin')

router.get('/getUser',crud.get)
// router.post('/save', crud.save);


router.get('/sigin',sigin.get);
router.post('/sigin',sigin.post);



module.exports= router;