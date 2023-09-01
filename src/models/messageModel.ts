import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    chatId: { type: mongoose.Schema.Types.ObjectId, required: true },
    senderId: { type: mongoose.Schema.Types.ObjectId, required: true },
    repliedOn: mongoose.Schema.Types.ObjectId, // This field might not be required in all cases
    content: { type: String, required: true },
    timestamp: { type: Date, required: true,  default: Date.now }
  });
  

  const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;