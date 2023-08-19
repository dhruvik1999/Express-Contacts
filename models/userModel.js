const mongoose = require('mongoose');

const User = mongoose.Schema({
    username : {
        type : String,
        require : [true, 'Please provide username']
    },
    email : {
        type : String,
        require : [true, 'Please provide email'],
        unique : [true, 'dumplicate email address']
    },
    password : {
        type : String,
        require : [true, 'Please providepassword']
    }
},{
    timestamps : true
});

module.exports = mongoose.model('User', User)