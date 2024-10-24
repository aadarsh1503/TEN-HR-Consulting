import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import multer from "multer";
import { upload } from "./middlewares/multer.js";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// POST endpoint for file upload and form data
app.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    const { firstName, lastName, email, countryCode, phone, currentCompany } =
      req.body;
    const resume = req.file;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !countryCode ||
      !phone ||
      !resume
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields except Current Company are required.",
      });
    }

    const fullName = `${firstName} ${lastName}`;

    // Sending email with the collected data
    const mail = await sendEmail(
      fullName,
      email,
      countryCode,
      phone,
      currentCompany || "N/A",
      resume
    );

    // Remove the uploaded resume after sending the email
    fs.unlinkSync(`uploads/${resume.filename}`);

    if (!mail)
      return res.status(400).json({
        success: false,
        message: "Could not send the email",
      });

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred on the server.",
    });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
