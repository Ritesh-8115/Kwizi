import dotenv from "dotenv";
import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import userStatsRoutes from "./routes/userStatsRoutes.js";
import userRoutes from "./routes/user.js";
import categoriesRoutes from "./routes/categories.js";
import clerkWebhook from "./routes/clerkWebhook.js";
import apiRoutes from "./routes/api.js";
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";
import protectedRoutes from "./routes/protected.js";
import quizRoutes from "./routes/quiz.js";
import userQuizRoutes from "./routes/userQuizRoutes.js";

dotenv.config();

const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));


app.use("/api/user", userRoutes);
app.use("/api/user", userQuizRoutes);
app.use("/api", apiRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/categories", quizRoutes);
app.use("/api", userStatsRoutes);
app.use("/api", clerkWebhook);
app.use(ClerkExpressWithAuth());
app.use("/api", protectedRoutes);





app.listen(5000, () => console.log(`Server is now running on port ${PORT}`));

