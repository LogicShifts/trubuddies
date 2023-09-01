import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  senderId: { type: mongoose.Schema.Types.ObjectId, required: true },
  repliedOn: mongoose.Schema.Types.ObjectId, // This field might not be required in all cases
  content: { type: String, required: true },
  timestamp: { type: Date, required: true }
});

const chatSchema = new mongoose.Schema({
  backgroundImage: String, // This field might not be required in all cases
  participants: {
    buddy: { type: mongoose.Schema.Types.ObjectId, required: true },
    truBuddy: { type: mongoose.Schema.Types.ObjectId, required: true }
  },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  messages: { type: [messageSchema] }
});

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);

export default Chat;