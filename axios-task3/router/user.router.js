const express = require('express');
const user = require('../controller/user.controller');

const router = express.Router();

router.get('/getData',user.getData);
router.get('/getUserData',user.getUserData);
router.post('/addUser',user.addUser);
router.post('/addUserData',user.addUserData)


module.exports = router;
