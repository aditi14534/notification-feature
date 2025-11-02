import express from "express";
import {
  sendNotification,
  getNotifications,
} from "../controllers/notificationController.js";

const router = express.Router();

// POST -> Send Notification (email + WhatsApp)
router.post("/", sendNotification);

// GET -> Get all notification history
router.get("/", getNotifications);

export default router;
