import express from "express";
import { getProjects } from "../controllers/getProjectsController";

const router = express.Router();

router.get("/", getProjects);

export default router;