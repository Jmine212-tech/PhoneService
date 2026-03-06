import mongoose from 'mongoose'

const users_schema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    role:{
        type: String,
        require: true,
        enum: ["admin", "user"]
    },
})

const users = mongoose.model("users", users_schema)
export default users;