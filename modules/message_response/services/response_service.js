const responseRepository = require('./../repositories/responseRepository')
const responseConfig = require('./../configs/default')

const getResponseForIntent = async (intent) => {
    let response = responseConfig.messages.noAvailableResponse
    if (intent) {
        responseObject = await responseRepository.getResponseFromIntent(intent)
        if (responseObject && responseObject.reply) {
            response = responseObject.reply
        }
    }
    return response
}

module.exports = {
    getResponseForIntent
}