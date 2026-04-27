import { Request, Response } from "express";
import prisma from "../config/prisma";

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await prisma.project.delete({
      where: { id },
    });

    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete failed",
    });
  }
};