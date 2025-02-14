import express from "express"
import {login,register,userprofile} from "../controllers/user.js"
import { verifyLogin } from "../middlewares/index.js"
const userRoute = express.Router()
userRoute.post("/login",login)
userRoute.post("/register",register)
userRoute.get("/userprofile",verifyLogin,userprofile)

export default userRoute