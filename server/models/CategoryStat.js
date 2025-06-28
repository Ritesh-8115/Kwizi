import mongoose from "mongoose";

const CategoryStatSchema = new mongoose.Schema({
  userId: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  attempts: { type: Number, default: 0 },
  completed: { type: Number, default: 0 },
  averageScore: { type: Number, default: 0 },
  lastAttempt: Date,
});

export default mongoose.model("CategoryStat", CategoryStatSchema);
