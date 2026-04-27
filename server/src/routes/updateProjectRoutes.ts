import express from "express";
import { updateProject } from "../controllers/updateProjectController";

const router = express.Router();

router.put("/:id", updateProject);

export default router;