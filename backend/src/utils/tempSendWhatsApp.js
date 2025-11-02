import twilio from "twilio";

export const sendWhatsApp = async (phone, message) => {
  const client = twilio(
    process.env.TWILIO_API_KEY_SID,
    process.env.TWILIO_API_KEY_SECRET,
    { accountSid: process.env.TWILIO_ACCOUNT_SID }
  );

  try {
    const response = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:${phone}`,
      body: `New Notification!\n\n${message}\n\n– Notification System`,
    });

    console.log("WhatsApp message sent:", response.sid);
    return response.sid;
  } catch (error) {
    console.error("WhatsApp sending error:", error.message);
    throw error;
  }
};
