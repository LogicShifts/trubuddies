import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Please provide a username"],
		unique: true,
	},
	email: {
		type: String,
		required: [true, "Please provide an email"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
	},
	roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
	profilePhoto: String,
	firstName: String,
	lastName: String,
	dob: Date,
	gender: String,
	phone: String,
	address: {
		street: String,
		city: String,
		country: String,
		zipCode: String,
	},
	isVerified: { type: Boolean, default: false }, // New field
	forgotPasswordToken: String, // New field
	forgotPasswordTokenExpiry: Date, // New field
	verifyToken: String, // New field
	verifyTokenExpiry: Date, // New field
	createdAt: { type: Date, default: Date.now },
	updatedAt: Date,
	isActive: { type: Boolean, default: true },
});

//const User = mongoose.model('User', userSchema);
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
