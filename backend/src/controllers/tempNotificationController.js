import Notification from "../models/notification.js";
import { sendEmail } from "../utils/sendEmail.js";
import { sendWhatsApp } from "../utils/sendWhatsApp.js";

export const sendNotification = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const notification = new Notification({ name, email, phone, message });

  try {
    // Send email
    await sendEmail(email, message);
    notification.emailSent = true;

    // Send WhatsApp
    await sendWhatsApp(phone, message);
    notification.whatsappSent = true;

    // Save record
    await notification.save();

    res.json({
      success: true,
      message: "Notification sent successfully!",
      data: notification,
    });
  } catch (error) {
    console.error("Error sending notification:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send notification",
      error: error.message,
    });
  }
};

export const getNotifications = async (req, res) => {
  const all = await Notification.find().sort({ createdAt: -1 });
  res.json({ success: true, data: all });
};
