const  mongoose  = require("mongoose");

const Register_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    createdAt: { type: Date, default: Date.now }
})

const Login_schema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }
})

const RegisterSchema=  mongoose.model('RegisterSchema', Register_schema)
const LoginSchema=  mongoose.model('LoginSchema', Login_schema)

module.exports = {RegisterSchema, LoginSchema}