import mongoose from "mongoose";

const truBuddyProfileSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, requird: true, ref: "User" }, // References the User model (optional)
	isVerified: { type: Boolean, default: false },
	highestQualification: String,
	AOE: [String], // Area of Expertise
	bankingDetails: {
		UPI: {
			upiId: String,
			mobileNo: String,
		},
		bankAccDetails: {
			bankName: String,
			accNo: String,
			IFSC: String,
			bankingName: String,
		},
	},
	createdAt: { type: Date, default: Date.now },
	updatedAt: Date,
});

const TruBuddyProfile =
	mongoose.models.TruBuddyProfile ||
	mongoose.model("TruBuddyProfile", truBuddyProfileSchema);

export default TruBuddyProfile;
