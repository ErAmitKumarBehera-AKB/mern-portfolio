const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Root route to check backend is alive
app.get("/", (req, res) => {
  res.send("MERN Portfolio Backend is Running ✅");
});

// ✅ Contact route (POST)
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact form submission:", { name, email, message });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Message from Portfolio - ${name}`,
      text: `You received a new message from:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Email sending error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
