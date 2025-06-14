const nodemailer = require("nodemailer");
require('dotenv').config();


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

module.exports.sendVerificationEmail = async (email, token) => {
    const verificationUrl = `http://localhost:8080/verify/${token}`;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Verify your account",
        html: `<p>Click the link to verify your email: <a href="${verificationUrl}">${verificationUrl}</a></p>`
    };

    await transporter.sendMail(mailOptions);
};
