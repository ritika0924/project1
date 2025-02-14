import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
categoryName:String,
categoryDescription:String,
categoryImage:String


})
export const Category = mongoose.model("category",categorySchema)