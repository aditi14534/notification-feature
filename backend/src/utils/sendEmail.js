import nodemailer from "nodemailer";

export const sendEmail = async (to, message) => {
  try {
    console.log("Sending email to:", to);

    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_HOST,
      port: parseInt(process.env.BREVO_PORT),
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Aditi Notification System" <a73284276@gmail.com>`, // verified sender email
      to,
      subject: "Notification from Aditi's Project",
      text: message,
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>New Notification</h2>
          <p>${message}</p>
          <p style="color: gray;">Sent by Aditi's Notification System</p>
        </div>
      `,
    });

    console.log("Email sent successfully via Brevo to:", to);
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
};
