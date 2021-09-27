const express = require('express')
const router = express.Router()

const responseService = require('./../services/response_service')
const intentService = require('./../../intent/services/ultimate_intent')

// TODO : Add data validator middleware
// TODO add auth middleware
// TODO add rate limiter
router.post("/", async (req, res, next) => {
  try {
    const { message, botId } = req.body
    const intent = await intentService.getIntent(message, botId)
    // TODO : Add logger instead of console.log
    // TODO add better exceptions
    console.log(`returned intent: ${intent}`)
    const reply = await responseService.getResponseForIntent(intent)
    res.json({msg: reply})
  } catch (e) {
      console.log(e)
      res.status(500).json({'msg': 'Something went wrong'})
  }
})

module.exports = router
