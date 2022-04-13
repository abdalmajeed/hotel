const yotiTokenExtractor = (req, res, next) => {
  req.yotiToken = decodeURI(req.body.token)
  next()
}

module.exports = {
  yotiTokenExtractor
}