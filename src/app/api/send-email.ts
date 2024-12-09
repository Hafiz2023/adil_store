
"use client";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    // Nodemailer transporter configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // App password for Gmail
      },
    });

    // Verify transporter connection
    await transporter.verify();

    // Mail options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send the form data to your own email
      subject: "New Form Submission",
      text: `You have a new form submission:
      
Name: ${name}
Email: ${email}
Message: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email. Check server logs." });
  }
};

export default sendEmail;
