"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import AuthGuard from "@/components/AuthGuard";

type Project = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  htmlCode: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await axios.get("http://localhost:5000/api/all-projects");
    setProjects(res.data);
  };

  const openProject = (html: string) => {
    localStorage.setItem("generatedHtml", html);
    window.location.href = "/preview";
  };

  const editProject = (
    e: React.MouseEvent,
    id: number,
    html: string
  ) => {
    e.stopPropagation();
    localStorage.setItem("projectId", String(id));
    localStorage.setItem("generatedHtml", html);
    window.location.href = "/editor";
  };

  const deleteProject = async (
    e: React.MouseEvent,
    id: number
  ) => {
    e.stopPropagation();

    await axios.delete(
      `http://localhost:5000/api/delete-project/${id}`
    );

    fetchProjects();
  };

  return (
    <AuthGuard>
      <main className="min-h-screen bg-black text-white px-8 py-10">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project.htmlCode)}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 cursor-pointer hover:border-white transition"
            >
              <h2 className="text-2xl font-semibold">
                {project.name}
              </h2>

              <p className="text-zinc-400 mt-2">
                {project.description}
              </p>

              <p className="text-sm text-zinc-500 mt-4 mb-4">
                {new Date(project.createdAt).toLocaleString()}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={(e) =>
                    editProject(e, project.id, project.htmlCode)
                  }
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
                >
                  Edit
                </button>

                <button
                  onClick={(e) =>
                    deleteProject(e, project.id)
                  }
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </AuthGuard>
  );
}