import mongoose from "mongoose";

const UserStatsSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  categoryStats: [
    {
      category: { name: String },
      attempts: { type: Number, default: 0 },
      completed: { type: Number, default: 0 },
      averageScore: { type: Number, default: 0 },
      lastAttempt: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model("UserStats", UserStatsSchema);
