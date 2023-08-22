import mongoose from "mongoose";

const buddyProfileSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, requird: true, ref: "User" }, // References the User model (optional)
	dailyMoods: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mood" }],
	createdAt: { type: Date, default: Date.now },
	updatedAt: Date,
});

const BuddyProfile =
	mongoose.models.BuddyProfile ||
	mongoose.model("BuddyProfile", buddyProfileSchema);

export default BuddyProfile;
