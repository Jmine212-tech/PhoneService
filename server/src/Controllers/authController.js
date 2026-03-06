import users from "../models/users.js"

//login, logout, refresh, register
export async function register (req,res){
    const {name, email, password} = req.body;
    try{
        await users.create({
            name,
            email,
            password
        })
        console.log("create new user")
    }catch(error){
        console.error("--Error in register--", error)
        res.status(500).json({message:"internal error!"})
    }
}
