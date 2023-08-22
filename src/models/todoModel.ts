import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  dueTime: String, // Assuming you want to store time as a string
  isCompleted: { type: Boolean, default: false },
  isCompletedVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const ToDo = mongoose.models.ToDo || mongoose.model("ToDo", todoSchema);

export default ToDo;
