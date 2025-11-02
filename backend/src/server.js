import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import notificationRoutes from "./routes/notificationRoutes.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: ["https://notification-feature.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/notifications", notificationRoutes);

app.get("/", (req, res) => res.send("Notification Backend Running!"));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { dbName: "notifications" })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
