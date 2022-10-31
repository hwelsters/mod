const nodemailer = require("nodemailer");

export const sendMail = async (
  email: String,
  subject: String,
  textBody: String,
  htmlBody: String
) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"split/" <${process.env.GMAIL_USER}>`, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: textBody, // plain text body
    html: htmlBody,
  });

  return `Message sent: ${info.messageId}`;
};
