import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({ success: false, message: "Name and number are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Muskan Website" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER,
      subject: "New User Details",
      text: `You received new details:\n\nName: ${name}\nPhone: ${number}`,
    });

    return res.status(200).json({ success: true, message: "Details sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
}
