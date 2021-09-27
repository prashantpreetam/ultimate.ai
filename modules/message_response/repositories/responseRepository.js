const responseModel = require('../models/responseModel')

const getResponseFromIntent = (intent) => {
    return responseModel.findOne({ 'intent': intent })
}

module.exports = {
    getResponseFromIntent
}