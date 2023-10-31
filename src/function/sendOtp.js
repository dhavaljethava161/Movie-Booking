import { config } from "../config";
import nodemailer from "nodemailer";

async function email(user) {
  const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      user: `${config.etherial.email}`,
      pass: `${config.etherial.pass}`,
    },
  });

  return transporter.sendMail({
    from: `${config.credential.email}`,
    to: `${user.email}`,
    subject: `otp for verification`,
    text: "Hello world?==>",
  });
}
