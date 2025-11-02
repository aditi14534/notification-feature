import nodemailer from "nodemailer";

export const sendEmail = async (to, message) => {
  try {
    //Step 1: Clean the email (remove extra spaces / line breaks)
    const cleanTo = (to || "").trim();

    if (!cleanTo) {
      throw new Error("Recipient email address missing!");
    }

    console.log("Sending email to:", cleanTo);

    //Step 2: Configure Brevo SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_HOST || "smtp-relay.brevo.com",
      port: parseInt(process.env.BREVO_PORT) || 587,
      secure: false, // Brevo works on port 587 (TLS)
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    // Step 3: Create styled email content
    const mailOptions = {
      from: `"Aditi Notification System" <${process.env.BREVO_USER}>`, // verified Brevo user
      to: cleanTo, //recipient
      replyTo: "aditi30102003@gmail.com", // optional for replies
      subject: "Notification from Aditi's Project",
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f9f9f9; padding:20px;">
          <div style="max-width:600px;margin:auto;background:#fff;padding:25px;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.1)">
            <h2 style="color:#333;margin-bottom:15px;">New Notification</h2>
            <p style="color:#555;font-size:16px;line-height:1.5;">${message}</p>
            <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
            <p style="font-size:12px;color:#888;text-align:center;">Sent automatically by Aditi's Notification System</p>
          </div>
        </div>
      `,
    };

    //Step 4: Send the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully via Brevo to:", cleanTo);
  } catch (error) {
    console.error("Email sending error:", error.message);
    throw error;
  }
};
