import mongoose from "mongoose";

const diarySchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  date: Date,
  mood: { type: mongoose.Schema.Types.ObjectId, ref: "Mood" }, // References the Mood model
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // References the User model (optional)
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

const DailyMood = mongoose.models.DailyMood || mongoose.model("DailyMood", diarySchema);

export default DailyMood;
