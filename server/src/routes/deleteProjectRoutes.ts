import express from "express";
import { deleteProject } from "../controllers/deleteProjectController";

const router = express.Router();

router.delete("/:id", deleteProject);

export default router;