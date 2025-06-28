
import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema({
  questionId: String,
  optionId: String,
  isCorrect: Boolean,
});

export default ResponseSchema;
