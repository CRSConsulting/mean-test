const router = require('express').Router()
const mobilesController = require('../controllers/mobiles.controller')()
module.exports = router


router.get('/', mobilesController.getAll)
router.get('/keyword', mobilesController.getKeyword)
router.post('/', mobilesController.insert)
router.post('/sms', mobilesController.insertSMS)


