import express from "express";
import { saveProject } from "../controllers/saveProjectController";

const router = express.Router();

router.post("/save", saveProject);

export default router;