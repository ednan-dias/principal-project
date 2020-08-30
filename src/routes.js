const express = require('express')
const SmsController = require('./controllers/SmsController')

const routes = express.Router()

routes.post('/send-sms', SmsController.sendSms)

module.exports = routes