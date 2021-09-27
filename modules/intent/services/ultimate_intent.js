const axios = require('axios')
const config = require('./../ configs/config')

const getIntent = async (message, botId) => {
    let matchedIntent = null
    const headers = {
        'content-type': 'application/json',
        'accept': 'application/json',
        'authorization': config.ultimateAPI.auth
    }
    const data = {
        botId: botId,
        message: message
    }
    const url = `${config.ultimateAPI.baseUrl}intents`
    const response = await axios.post(url, data, { headers: headers })
    if (response && response.data && response.data.intents) {
        const intents = response.data.intents
        const threshold = config.threshold
        let { name, confidence } = intents.reduce((confidentIntent, intent) => intent.confidence > confidentIntent.confidence || 0 ? intent : confidentIntent)
        if ( confidence > threshold ) {
            matchedIntent = name
        }
    }
    return matchedIntent
}

module.exports = {
    getIntent
}