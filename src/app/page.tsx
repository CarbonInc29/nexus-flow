"use client";

import { useState } from "react";

export default function Home() {
  const [repoUrl, setRepoUrl] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ repoUrl, accessToken }),
    });

    if (response.ok) {
      alert("Form submitted successfully!");
    } else {
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded shadow-md">
        <h1 className="text-2xl font-bold">Trigger CI/CD Workflow</h1>

        <label className="flex flex-col">
          GitHub Repository URL:
          <input
            type="url"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            className="p-2 border rounded"
            required
          />
        </label>

        <label className="flex flex-col">
          GitHub Access Token:
          <input
            type="password"
            value={accessToken}
            onChange={(e) => setAccessToken(e.target.value)}
            className="p-2 border rounded"
            required
          />
        </label>

        <button type="submit" className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}
