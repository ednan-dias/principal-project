const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    email: String,
    password: String,
    name: String,
    photo: String,
})

const User = model('User', UserSchema)

module.exports = User