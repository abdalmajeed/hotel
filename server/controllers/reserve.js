const router = require('express').Router()
const { yotiTokenExtractor } = require('../utils/middleware');
const { yotiClient } = require('../utils/config')

const DB = require('../db')

router.post('/', yotiTokenExtractor, (req, res) => {
  const yotiToken = req.yotiToken
  const { name } = req.body

  yotiClient.getActivityDetails(yotiToken)
    .then((activityDetails) => {
      const profile = activityDetails.getProfile()
      // console.dir(profile)
      const phoneNumber = profile.getPhoneNumber()?.getValue()
      const emailAddress = profile.getEmailAddress()?.getValue();
      const rememberMeId = activityDetails.getRememberMeId();

      DB.reservations.push({
        name,
        phoneNumber,
        emailAddress,
        rememberMeId
      })
      // console.log('res ', DB.reservations)
      res.json(DB.reservations[DB.reservations.length - 1])
    })
    .catch(err => {
      console.log('err ', err)
      res.json(err)
    })

})

module.exports = router