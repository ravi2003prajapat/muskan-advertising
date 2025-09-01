import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load .env config
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // built-in parser

// Nodemailer transporter using Gmail SMTP with explicit config
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL for port 465
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection error:", error);
  } else {
    console.log("SMTP server is ready to send messages");
  }
});

// Route to send email
app.post("/send-details", async (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({ success: false, message: "Name and number are required." });
  }

  try {
    const mailOptions = {
      from: `"Muskan Website" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || "jjnprinters@gmail.com",
      subject: "New User Details",
      text: `You received new details:\n\nName: ${name}\nPhone: ${number}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Details sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ success: false, message: error.message || "Failed to send email." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
