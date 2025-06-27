
import express from "express";
import UserStats from "../models/UserStats.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { userId, email } = req.body;

  try {
    // Check if user stats already exist
    const existing = await UserStats.findOne({ userId });
    if (existing) return res.status(200).json(existing);

    const newStats = new UserStats({
      userId,
      categoryStats: [], // can prepopulate if needed
    });

    await newStats.save();
    res.status(201).json(newStats);
  } catch (err) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

export default router;
