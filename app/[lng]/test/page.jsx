"use client";
import React, { useState, useRef } from "react";

const TranslatePDF = () => {
  const [file, setFile] = useState(null);
  const [translation, setTranslation] = useState(null);
  const [error, setError] = useState(null);

  const fileRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null); // Clear previous errors
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setError("Please select a PDF file to translate.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/translate", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Something went wrong with the translation.");
      }

      const data = await response.json();
      setTranslation(data.translation);
      setError(null); // Clear previous errors
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-[70dvh]">
      <h1>PDF Translator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          ref={fileRef}
          onChange={handleFileChange}
          accept=".pdf"
        />
        <button type="submit">Translate</button>
      </form>
      {error && <p className="error">{error}</p>}
      {translation && <div className="translation">{translation}</div>}
    </div>
  );
};

export default TranslatePDF;
