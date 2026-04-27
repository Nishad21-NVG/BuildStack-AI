import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getSingleProject = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch project",
    });
  }
};