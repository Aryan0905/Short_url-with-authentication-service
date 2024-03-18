const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({   // creating a schema for the user
  name: {   // name of the user 
    type: String,
    required: true,
  },
    email: {   // email of the user
        type: String,
        required: true,
        unique: true,
    },
    password: {   // password of the user
        type: String,
        required: true,
    },
},
    {timestamps: true}  // to get the time of creation and updation of the data

);

const user = mongoose.model('user', userSchema);  // creating a model for the schema

module.exports = user;  // exporting the model