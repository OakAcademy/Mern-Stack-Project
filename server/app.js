import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import storyRoutes from "./routes/stories.js";
import userRoutes from "./routes/users.js";

const app = express();

dotenv.config();

app.use(cors());

app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));

app.use("/stories", storyRoutes);
app.use("/user", userRoutes);

// const MONGO_URI =
//   "mongodb+srv://instaverse:instaverse123123@cluster0.60wh7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`));
  } catch (error) {
    console.error("Connection to MongoDB has failed", error.message);
  }
};
connectDB();

mongoose.connection.on("open", () =>
  console.log("Connection to database has been established successfully")
);
mongoose.connection.on("error", (err) => console.error(err));
