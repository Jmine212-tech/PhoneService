import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config()

export default async function connected_DB(){
    const DB_URL = process.env.USER_DB
    try{
        await mongoose.connect(DB_URL)
        console.log("connected DB")
    }catch(error){
        console.error("--error in connected_DB--",error)
    }
}