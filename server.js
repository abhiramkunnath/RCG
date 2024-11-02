const express = require("express");
const multer = require("multer");
const cors = require("cors");
const Groq = require("groq-sdk");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Set up multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Endpoint for handling image uploads and object detection
app.post("/detect-object", upload.single("image"), async (req, res) => {
  try {
    const imageBuffer = req.file.buffer.toString("base64");

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "detect main object in the image in one word and give a short random compliment about that object in second person, only give back the compliment",
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${imageBuffer}`,
              },
            },
          ],
        },
      ],
      model: "llama-3.2-90b-vision-preview",
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null,
    });

    const compliment = chatCompletion.choices[0].message.content;

    res.json({ compliment: compliment });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to detect object or generate compliment." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
