const router = require('express').Router()
const { yotiTokenExtractor } = require('../utils/middleware')
const { yotiClient } = require('../utils/config')

const DB = require('../db')

router.post('/', yotiTokenExtractor, (req, res) => {
  const yotiToken = req.yotiToken

  yotiClient.getActivityDetails(yotiToken)
    .then((activityDetails) => {
      const rememberMeId = activityDetails.getRememberMeId();

      const found = DB.reservations.filter(item => item.rememberMeId === rememberMeId)[0];

      if (found !== undefined) {
        DB.reservations = DB.reservations.filter(item => item.rememberMeId !== rememberMeId)
        console.log(DB.reservations)
        console.log('cancel remId ', rememberMeId)
        console.log('found ', found)
        res.json({ msg: `Reservation has been cancelled for ${found.name}` })
      } else {
        res.json({ msg: 'Reservation was not found' })
      }
    })
    .catch(err => {
      console.log('err ', err)
      res.json(err)
    })
})

module.exports = router