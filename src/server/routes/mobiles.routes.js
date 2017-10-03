const router = require('express').Router()
const mobilesController = require('../controllers/mobiles.controller')()
module.exports = router

router.get('/', mobilesController.getAll);
router.post('/', mobilesController.insert);
router.post('/many', mobilesController.insertAll);