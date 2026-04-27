"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import AuthGuard from "@/components/AuthGuard";

export default function EditorPage() {
  const [html, setHtml] = useState("");
  const [projectId, setProjectId] = useState("");

  useEffect(() => {
    const savedHtml = localStorage.getItem("generatedHtml");
    const savedId = localStorage.getItem("projectId");

    if (savedHtml) setHtml(savedHtml);
    if (savedId) setProjectId(savedId);
  }, []);

  const saveChanges = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/update-project/${projectId}`,
        { htmlCode: html }
      );

      alert("Project updated successfully");
    } catch {
      alert("Update failed");
    }
  };

  return (
    <AuthGuard>
      <main className="min-h-screen bg-black text-white grid grid-cols-2">
        <div className="p-6 border-r border-zinc-800">
          <h1 className="text-3xl font-bold mb-6">Editor</h1>

          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full h-[70vh] bg-zinc-900 rounded-xl p-4 outline-none"
          />

          <button
            onClick={saveChanges}
            className="mt-5 px-6 py-3 rounded-xl bg-white text-black font-semibold"
          >
            Save Changes
          </button>
        </div>

        <iframe
          srcDoc={html}
          className="w-full h-screen border-none bg-white"
          title="Preview"
        />
      </main>
    </AuthGuard>
  );
}