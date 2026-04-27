import { Request, Response } from "express";
import prisma from "../config/prisma";

export const updateProject = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { htmlCode } = req.body;

    const updated = await prisma.project.update({
      where: { id },
      data: {
        htmlCode,
      },
    });

    res.status(200).json({
      message: "Project updated successfully",
      updated,
    });
  } catch (error) {
    res.status(500).json({
      message: "Update failed",
    });
  }
};