const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    profileimage: String
})

const User = mongoose.model('Users', userSchema)

module.exports = User