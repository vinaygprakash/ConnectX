require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = async ({email,subject,message}) => {
  console.log("bhjbhjbdj",email,subject,message)
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      // port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: 'vinay',
      to: `${email}`,
      subject: `${subject}`,
      text: `${message}`,
    };

    const resu = await transporter.sendMail(mailOptions);
    console.log(resu);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed");
  }
};

module.exports = sendEmail;
