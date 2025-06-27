import mongoose from "mongoose";

const UserStatsSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  categoryStats: [
    {
      category: {
        name: String,
        // optionally add more like _id, description etc.
      },
      attempts: Number,
      completed: Number,
      averageScore: Number,
      lastAttempt: Date,
    },
  ],
});

export default mongoose.model("UserStats", UserStatsSchema);
