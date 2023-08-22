import mongoose from "mongoose";

const userRoleSchema = new mongoose.Schema({
    roleName: String,
    permissions: [String],
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
  });
  
  const UserRole = mongoose.models.UserRole || mongoose.model("UserRole", userRoleSchema);

  export default UserRole;
  