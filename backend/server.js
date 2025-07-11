import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import connectDB from './config/mongodb.js';
import http from 'http';
import userRouter from './routes/userRoute.js';
import messageRouter from './routes/messageRoute.js';
import { Server } from "socket.io";

dotenv.config();

// const PORT=5000;

const app = express();
const server = http.createServer(app);

export const io = new Server(server, {
  cors: { origin: "*" }
});

export const userSocketMap = {};

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log("User Connected", userId);

  if (userId) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User Disconnected", userId);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

connectDB();

app.use(express.json({ limit: '10mb' }));
app.use(cors());

app.use("/api/status", (req, res) => res.send("Server is live"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);
app.get('/', (req, res) => res.send('Hello from Ashish'));
app.get('/ashishh', (req, res) => res.send('Hello from Ashishh'));

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



export default app;
