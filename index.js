// console.log("Hello World")
import express, { request, response } from "express";
import mongoose from "mongoose";
import { User } from "./models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userRoute from "./routes/user.js";
import cors from "cors";
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose"
import { Category } from "./models/category.js";
import { Score } from "./models/score.js";
import { Question } from "./models/questions.js";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/user", userRoute);

// app.get("/", (request, response) => {
//   response.send("Hello World");
// });
// app.get("/hello", (request, response) => {
//   console.log(typeof request.query);
//   response.send("Hello " + request.query.name);
// });
// app.get("/:id", (request, response) => {
//   response.send("Reel");
// });

// app.post("/register", async (request, response) => {
//   console.log("someone is trying to register");
//   const { name, password, email } = reqest.body;
//   try {
//     const user = await User.findOne({email})
//     if(user) return response.status(400).send({message:"User already exist"})
//       const encryptedPassword= bcrypt.hashSync(password,10)
//       const newUser=new User({name,password:encryptedPassword,email})

//   await newUser.save();
//     return response.status(201).send("register success");
//   } catch (error) {
//     console.log(error);
//      return response.status(500).send({message:"Internel error",error:error.message});
//   }
// });
// app.post("/login",async (request,response)=>{

// })

mongoose
  .connect(
    "mongodb+srv://ritikaraj204:oitgCwHTMO5Q7Y32@cluster0.ft1bk.mongodb.net/TEEDYHUB?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database Connected");
    AdminJS.registerAdapter({
      Resource:AdminJSMongoose.Resource,
      Database:AdminJSMongoose.Database
    })
    const admin = new AdminJS({
      resources:[User,Question,Category,Score],

      
    });



    const adminRouter = AdminJSExpress.buildRouter(admin);
    app.use(admin.options.rootPath, adminRouter);
    app.listen(5000, (error) => {
      if (error) console.log("Error occured" + error);
      else console.log("Server started on port 5000");
    });
    
  })
  .catch((error) => {
    console.log("error");
  });


