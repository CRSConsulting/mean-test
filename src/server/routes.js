const express = require('express');
const router = express.Router();

const heroService = require('./hero.service');

router.get('/heroes', (req, res) => {
  heroService.getHeroes(req, res);
});

router.post('/hero', (req, res) => {
  heroService.postHero(req, res);
});

router.put('/hero/:id', (req, res) => {
  heroService.putHero(req, res);
});

router.delete('/hero/:id', (req, res) => {
  heroService.deleteHero(req, res);
});

router.get('/mobiles', (req, res) => {
  heroService.insertManyObjs();
});

router.post('/mobile', (req, res) => {
  heroService.insertMobile();
});


module.exports = router;
