import express from "express"
const authRoute = express.Router()

import {register} from "../Controllers/authController.js"


//login, logout, refresh, register
authRoute.post("/register", register)

export default authRoute;