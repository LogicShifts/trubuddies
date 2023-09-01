import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  senderId: { type: mongoose.Schema.Types.ObjectId, required: true },
  repliedOn: mongoose.Schema.Types.ObjectId,
  content: { type: String, required: true },
  timestamp: { type: Date, required: true }
});

const groupChatSchema = new mongoose.Schema({
  groupName: { type: String, required: true },
  groupDescription: { type: String, required: true },
  profilePhoto: String,
  backgroundImage: String,
  participants: [{
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    isAdmin: { type: Boolean, default: false }
  }],
  onlyAdmin: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true }, // New field to track group activation status
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  messages: { type: [messageSchema] }
});

const GroupChat = mongoose.models.GroupChat || mongoose.model("GroupChat", groupChatSchema);

export default GroupChat;