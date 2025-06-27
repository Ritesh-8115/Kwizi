import express from "express";
import UserStats from "../models/UserStats.js"; // must include `.js`

const router = express.Router();

// GET user stats by userId
router.get("/user/:userId/stats", async (req, res) => {
  try {
    const stats = await UserStats.findOne({ userId: req.params.userId });

    if (!stats) {
      return res.status(404).json({ error: "Stats not found" });
    }
    res.json(stats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
