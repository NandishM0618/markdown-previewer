import React from "react";
import "./App.css";
import { marked } from "marked";
import { useState } from "react";

export default function App(params) {
  const [markdown, setMarkdown] = useState("# Your Markdown Here");

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <div className="editor">
        <h2>Editor</h2>
        <textarea value={markdown} onChange={handleInputChange} />
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
      </div>
    </div>
  );
}
