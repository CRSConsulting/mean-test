const express = require('express');
const router = express.Router();

const mobileService = require('./mobile.service');

router.get('/mobiles', (req, res) => {
  mobileService.getManyObjs(req, res);
});

router.post('/mobile', (req, res) => {
  mobileService.insertManyObjs(req, res)
});


module.exports = router;
