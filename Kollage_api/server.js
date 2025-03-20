require("dotenv").config();
const express = require("express");
const app = express();
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3500;

// Connect to MongoDB
connectDB();

// Middleware
app.use(logger); // Log requests
app.use(cors(corsOptions)); // Enable CORS with options
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies

// Serve static files
app.use("/", express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/root")); // Root route
app.use("/auth", require("./routes/authRoutes")); // Authentication routes
app.use("/paper", require("./routes/paperRoutes")); // Paper routes
app.use("/notes", require("./routes/notesRoutes")); // Notes routes
app.use("/internal", require("./routes/internalRoutes")); // Internal routes
app.use("/attendance", require("./routes/attendanceRoutes")); // Attendance routes
app.use("/time_schedule", require("./routes/timeScheduleRoutes")); // Time schedule routes
app.use("/staff", require("./routes/staffRoutes")); // Staff routes
app.use("/student", require("./routes/studentRoutes")); // Student routes
app.get("/test", (req, res) => {
  res.json({ message: "Test route is working!" });
});

// 404 Handler
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("json")) {
    res.json({ message: "404 Not Found", details: "No paths found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// Error Handler
app.use(errorHandler);

// MongoDB Connection Events
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  logEvents(
    `${err.no}:${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});

// Uncaught Exception Handler
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  logEvents(`Uncaught Exception: ${err.message}`, "uncaughtExceptions.log");
  process.exit(1);
});