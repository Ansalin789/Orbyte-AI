const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend's origin
  })
);

app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log("Received request:", { name, email, phone, message });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "info@orbyte.ai",
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error.message);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to send email",
        error: error.message,
      });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
