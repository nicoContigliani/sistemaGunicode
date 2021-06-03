const express = require('express');
const router = express.Router();
const crud = require('../controllers/crud');
const user = require('../controllers/userControllers');


const sigin = require('../controllers/sigin')

router.get('/getUser',crud.get)
// router.post('/save', crud.save);


router.get('/sigin',sigin.get);
router.post('/sigin',sigin.post);

router.get('/user',user.get);
router.post('/user',user.save);
router.post('/user/:id',user.update);
router.delete('/user/:id',user.deletes);




module.exports= router;