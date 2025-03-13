"use client";
import { useState } from "react";

export default function Chat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const sendPrompt = async () => {
    const res = await fetch("/api/ollama", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({prompt}),
    });

    const data = await res.json();
    setResponse(data.response);
    console.log(data.response)
  };

  return (
    <div>
      <p id = "beginning">Hello! This is a website with your personal AI helper. Start by asking your prompt below:</p>
      <textarea id = "boxarea"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt..."
      />
      <br></br>
      <button id = "sendbutton" onClick={sendPrompt}>
        Send
      </button>
      <hr></hr>
      <div>{response}</div>
    </div>
  );
}