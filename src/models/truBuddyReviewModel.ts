import mongoose from "mongoose";

const truBuddyReviewSchema = new mongoose.Schema({
  buddyId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  truBuddyId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  feedback: String, // Feedback field
  rating: { type: Number, min: 1, max: 5 }, // Rating field
});

const TruBuddyReview = mongoose.models.TruBuddyReview || mongoose.model("TruBuddyReview", truBuddyReviewSchema);

export default TruBuddyReview;
