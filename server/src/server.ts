import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes";
import projectRoutes from "./routes/projectRoutes";
import saveProjectRoutes from "./routes/saveProjectRoutes";
import getProjectsRoutes from "./routes/getProjectsRoutes";
import singleProjectRoutes from "./routes/singleProjectRoutes";
import deleteProjectRoutes from "./routes/deleteProjectRoutes";
import updateProjectRoutes from "./routes/updateProjectRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("BuildStack API Running 🚀");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/projects", saveProjectRoutes);
app.use("/api/all-projects", getProjectsRoutes);
app.use("/api/project", singleProjectRoutes);
app.use("/api/delete-project", deleteProjectRoutes);
app.use("/api/update-project", updateProjectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});