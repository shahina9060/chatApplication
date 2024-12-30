const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
dotenv.config();

connectDB();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(bodyParser.json());

app.use("/api", userRoutes);

// Create HTTP server
const server = createServer(app);

// Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Set up socket.io connection
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Listen for events from the client
  socket.on("chat", (chat) => {
    console.log("Message received:", chat);
    // Broadcast the message to all connected clients
    io.emit("chat", chat);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

// Start the server
server.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
