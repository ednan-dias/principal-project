const express = require('express')
const SmsController = require('./controllers/SmsController')
const WhatsController = require('./controllers/WhatsController')


const routes = express.Router()

routes.post('/send-sms', SmsController.sendSms)
routes.post('/send-whats', WhatsController.sendWhats)


module.exports = routes