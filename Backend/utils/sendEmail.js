import { text } from 'express';
import nodemailer from 'nodemailer';

export const sendEmail = async(options) =>{
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
            }
            });

            const mailOptions = {
                from: process.env.SMTP_EMAIL,
                to: options.email,
                subject: options.subject,
                text:`${options.message} \n\n Email of User Who Sent The Message: ${options.userEmail}`,
            }
            await transporter.sendMail(mailOptions);
}

export default sendEmail;