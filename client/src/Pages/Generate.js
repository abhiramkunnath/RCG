import React, { useState } from "react";
import axios from "axios";
import "../Styles/Generate.scss";

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    const imgBox = document.querySelector(".imgBox");
    imgBox.style.backgroundImage =
      "url(" + URL.createObjectURL(e.target.files[0]) + ")";
  };

  const speakText = (text) => {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(text);

    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[2]; // Choose a specific voice

    // Speak the text
    speechSynthesis.speak(utterance);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const label = document.querySelector("#label");
    if (!image) {
      label.innerHTML = "Please Upload an Image";
      label.style.backgroundColor = "#ffaeae";
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:5000/detect-object",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error("Error detecting object:", error);
      setResult({ error: "Failed to detect object or generate compliment." });
    }
  };

  return (
    <div className="App">
      <h1>Let Us Shower Your Pics with Random Love!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          id="image"
          onChange={handleImageChange}
        />
        <label htmlFor="image" for="image" id="label">
          Upload Image Here
        </label>
        <div className="imgBox"></div>
        <button type="submit" className="btn">
          Give Compliments
        </button>
      </form>
      {result && (
        <div>
          {result.error ? (
            <p>{result.error}</p>
          ) : (
            <>
              <p className="compliment">{result.compliment}</p>
              {speakText(result.compliment)}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
