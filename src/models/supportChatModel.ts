import mongoose from "mongoose";


const supportChatSchema = new mongoose.Schema({
    profilePhoto: String,
    backgroundImage: String,
    participants: {
        user:{
            userId: { type: mongoose.Schema.Types.ObjectId, required: true },
        },
        supportTeam:{
            userId: { type: mongoose.Schema.Types.ObjectId },
        }
      
    },
    isActive: { type: Boolean, default: false }, // New field to track support activation status
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  const SupportChat = mongoose.models.SupportChat || mongoose.model("SupportChat", supportChatSchema);
  
  export default SupportChat;