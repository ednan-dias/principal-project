const express = require('express')

const UserController = require('./controllers/UserController')
const SmsController = require('./controllers/SmsController')
const WhatsController = require('./controllers/WhatsController')

const routes = express.Router()

routes.post('/register', UserController.register)
routes.post('/login', UserController.login)

routes.post('/send-sms', SmsController.sendSms)
routes.post('/send-whats', WhatsController.sendWhats)


module.exports = routes