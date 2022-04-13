const router = require('express').Router()
const Yoti = require('yoti')
const { yotiClient } = require('../utils/config')


router.post('/', (req, res) => {
  let dynamicPolicy = new Yoti.DynamicPolicyBuilder()
  const { mobile, email } = req.body

  if (mobile) {
    dynamicPolicy.withWantedAttributeByName('phone_number')
  }
  if (email) {
    dynamicPolicy.withWantedAttributeByName('email_address')
  }

  dynamicPolicy.withWantedRememberMe(true)

  dynamicPolicy = dynamicPolicy.build()


  const dynamicScenario = new Yoti.DynamicScenarioBuilder()
    .withCallbackEndpoint('/home')
    .withPolicy(dynamicPolicy)
    .build();

  yotiClient.createShareUrl(dynamicScenario)
    .then((shareUrlResult) => {
      const shareUrl = shareUrlResult.getShareUrl()
      res.json({ shareUrl })
    })
    .catch(err => {
      res.status(err?.status).json(err)
    })

})

module.exports = router;

