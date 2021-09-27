require('dotenv').config()
require('./../../../infra/database/mongoDB')()
const intentService = require('../../../modules/intent/services/ultimate_intent')

test('Message to intent testing', async () => {
    // TODO test cases should be picked from config
    const reply = await intentService.getIntent('Hi', '5f74865056d7bb000fcd39ff')
    expect(reply).toBe('Greeting')
})
