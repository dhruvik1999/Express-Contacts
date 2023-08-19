const mongoose = require('mongoose');

const contctSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please add contact name"]
    },
    email :{
        type : String,
        required : [true, "Please add contact email"]
    },
    phone : {
        type : String,
        required : [true, "Please add contact phoneno"]
    }
},
{
    timestamps : true
});


module.exports = mongoose.model("contacts", contctSchema);



