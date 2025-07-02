const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // ✅ Load environment variables

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Parse incoming JSON

// POST /api/contact route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  console.log('Contact form submission:', { name, email, message });

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,   // ✅ From .env
        pass: process.env.GMAIL_PASS    // ✅ From .env
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New message from portfolio by ${name}`,
      text: message
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
