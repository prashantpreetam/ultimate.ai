const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  intent: String,
  reply: String,
  description: String,
  created_by: String,
  created_at: Date,
  updated_at: {type: Date, default: Date.now}
}, { 
  toJSON: {
    getters: true
  }, 
  id: false,
  collection: 'response'})

// TODO: add indexing config

const Response = mongoose.model('Response', responseSchema)
module.exports = Response