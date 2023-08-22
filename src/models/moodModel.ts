import mongoose from "mongoose";


const moodSchema = new mongoose.Schema({
  feeling: { type: String, required: true },
  whyFeelingThisWay: String,
  activities: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

const Mood = mongoose.models.Mood || mongoose.model("Mood", moodSchema);

export default Mood;
