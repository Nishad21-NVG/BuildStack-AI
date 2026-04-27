import express from "express";
import { getSingleProject } from "../controllers/getSingleProjectController";

const router = express.Router();

router.get("/:id", getSingleProject);

export default router;