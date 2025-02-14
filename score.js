import mongoose from "mongoose";



const scoreSchema = new mongoose.Schema({
correctAns:Number,
IncorrectAns:Number
  
  


})
export const Score = mongoose.model("score",scoreSchema)