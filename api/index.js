import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from "cookie-parser";
dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(()=> {
    console.log('MongoDB is Connected')
})
.catch((err)=>{
    console.log(err)
});

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}!`)
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});