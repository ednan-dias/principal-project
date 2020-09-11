const {Schema, model} = require('mongoose')

const LogSchema = new Schema({
    Objeto: {
        type: Object,
    }
})

const Log = model('Log', LogSchema)

module.exports = Log