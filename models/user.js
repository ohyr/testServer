
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    userName: String,
    password: String
})

//db.users.find()
module.exports = mongoose.model('user',UserSchema)