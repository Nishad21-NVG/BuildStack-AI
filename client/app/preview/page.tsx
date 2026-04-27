"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import AuthGuard from "@/components/AuthGuard";

export default function PreviewPage() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const savedHtml = localStorage.getItem("generatedHtml");
    if (savedHtml) {
      setHtml(savedHtml);
    }
  }, []);

  const handleSave = async () => {
    try {
      await axios.post("http://localhost:5000/api/projects/save", {
        name: "My Generated Website",
        htmlCode: html,
      });

      alert("Project saved successfully");
    } catch {
      alert("Save failed");
    }
  };

  return (
    <AuthGuard>
      <div className="w-full h-screen bg-black">
        <div className="p-4 border-b border-zinc-800 flex gap-4 bg-black">
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-lg bg-white text-black font-medium"
          >
            Save Project
          </button>

          <button
            onClick={() => (window.location.href = "/dashboard")}
            className="px-5 py-2 rounded-lg border border-zinc-700 text-white"
          >
            Back
          </button>
        </div>

        <iframe
          srcDoc={html}
          className="w-full h-[calc(100vh-70px)] border-none"
          title="Preview"
        />
      </div>
    </AuthGuard>
  );
}