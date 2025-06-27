import dotenv from "dotenv";
import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import userStatsRoutes from "./routes/userStats.js";
import userRoutes from "./routes/user.js";
import categoryRoutes from "./routes/categories.js";
import clerkWebhook from "./routes/clerkWebhook.js";

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));


app.use("/api/user", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api", userStatsRoutes);
app.use("/api", clerkWebhook);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

