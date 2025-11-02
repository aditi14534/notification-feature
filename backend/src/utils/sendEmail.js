import nodemailer from "nodemailer";

export const sendEmail = async (to, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_HOST,
      port: process.env.BREVO_PORT,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Notification System" <${process.env.BREVO_USER}>`,
      to,
      subject: "Notification from Aditi’s Project",
      text: message,
    });

    console.log("Email sent successfully via Brevo");
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
};
