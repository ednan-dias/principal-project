const {Schema, model} = require('mongoose')

const LogWhatsSchema = new Schema({
    Objeto: {
        type: Object,
    }
})

const LogWhats = model('LogWhats', LogWhatsSchema)

module.exports = LogWhats