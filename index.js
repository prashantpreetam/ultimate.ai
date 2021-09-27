'use strict'

require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || '5000'
require('./infra/database/mongoDB')()
app.use(bodyParser.json())

app.use('/v1/message-response', require('./modules/message_response/controllers/response_controller'))

// start server
app.listen(port, () =>{
  console.log(`Server started on port : ${port}`)
})