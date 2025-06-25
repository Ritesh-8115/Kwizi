const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/categories");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
