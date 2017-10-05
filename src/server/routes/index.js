const express = require('express');
const router = express.Router();
const mobileRoutes = require('./mobiles.routes');
const tangoRoutes = require('./tangos.routes')


  // register routes
router.use('/mobile', mobileRoutes);
router.use('/tango', tangoRoutes);

router.use('/*', function (req, res, next) {
  res.sendStatus(404)
})

router.use(function (err, req, res, next) {
  if (!err) {
    return next()
  }
  //log it
  console.error(err.stack);

  res.sendStatus(500)
})

module.exports = router;
