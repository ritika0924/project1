import mongoose from "mongoose";



const questionSchema = new mongoose.Schema({

  question:String,
  options: [String],
  correctOption:String,
  category:String,
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"category"
  }


})
export const Question = mongoose.model("question",questionSchema)