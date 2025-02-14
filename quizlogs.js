import mongoose from "mongoose";
const quizlogsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  score: Number,
});
export const Quizlog = mongoose.model("quizlogs", quizlogsSchema);