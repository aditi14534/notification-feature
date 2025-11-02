import nodemailer from "nodemailer";

export const sendEmail = async (to, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_HOST,
      port: parseInt(process.env.BREVO_PORT),
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    await transporter.sendMail({
      from: '"Aditi Notification System" <noreply@mail.brevo.com>', // Brevo verified domain
      replyTo: "aditi30102003@gmail.com",
      subject: "Notification from Aditi's Project",
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;"> New Notification</h2>
            <p style="color: #555; font-size: 16px; line-height: 1.6;">${message}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="color: #999; font-size: 12px; text-align: center;">
              Sent by Aditi's Notification System
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully via Brevo to:", to);
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
};
// import nodemailer from "nodemailer";

// export const sendEmail = async (to, message) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: process.env.BREVO_HOST,
//       port: process.env.BREVO_PORT,
//       auth: {
//         user: process.env.BREVO_USER,
//         pass: process.env.BREVO_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Notification System" <${process.env.BREVO_USER}>`,
//       to,
//       subject: "Notification from Aditi’s Project",
//       text: message,
//     });

//     console.log("Email sent successfully via Brevo");
//   } catch (error) {
//     console.error("Email sending error:", error);
//     throw error;
//   }
// };
