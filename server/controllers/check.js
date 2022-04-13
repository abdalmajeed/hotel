const router = require('express').Router()
const { yotiTokenExtractor } = require('../utils/middleware');
const { yotiClient } = require('../utils/config')

const DB = require('../db')


router.post('/', yotiTokenExtractor, (req, res) => {
  const yotiToken = req.yotiToken

  yotiClient.getActivityDetails(yotiToken)
    .then((activityDetails) => {
      const rememberMeId = activityDetails.getRememberMeId();
      const reservation = DB.reservations.filter(item => item.rememberMeId === rememberMeId)[0]
      console.log('check res ', reservation)
      res.json({ ...reservation })
    })
    .catch(err => {
      console.log('err ', err)
      res.json(err)
    })
})

module.exports = router