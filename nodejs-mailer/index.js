/* eslint-disable no-undef */
const express = require("express");
const nodemailer = require("nodemailer");
const router = require("express").Router();
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 8000;

// envVariables to process.env:
require("dotenv").config();
const mail = process.env?.mail;
const password = process.env?.password;

// CORS middleware'i ekleyin
app.use(cors());

// Middleware for parsing JSON data
app.use(express.json());

// API endpoint for handling form submissions
const sendMail = (req, res) => {
  console.log(req.body);
  try {
    // Get form data from the request body
    const { name, email, company, message } = req.body;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: mail,
        pass: password,
      },
    });

    // Compose the email
    let mailOptions = {
      from: email,
      to: mail,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("ERROR", error);
        res.status(500).json({ error: "Internal server error" });
      } else {
        console.log("SUCCESS", info);
        res.status(200).json({ message: "Form submitted successfully" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Router kullanımını düzenle
app.use(router.post("/sendmail", sendMail));
app.use(router.get("/",  (req,res)=>res.status(200).json({ message: "Form submitted working" })));
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
