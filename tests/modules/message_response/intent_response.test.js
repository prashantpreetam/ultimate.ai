require('dotenv').config()
require('./../../../infra/database/mongoDB')()
const responseService = require('../../../modules/message_response/services/response_service')
const caseConfig = require('./test_case_config')

test('Intent to reply testing', async () => {
    const reply = await responseService.getResponseForIntent('Greeting')
    expect(reply).toBe('Hello :) How can I help you?')
})
