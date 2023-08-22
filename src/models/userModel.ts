import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	userId: {
		type: Number, 
		required: [true, "userId must be provided"],
		unique: true,
	},
	displayName: {
		type: String,
		required: [true, "Please provide a display name"],
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
	role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
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
	emailVerifyToken: String, // New field
	emailVerifyTokenExpiry: Date, // New field
	createdAt: { type: Date, default: Date.now },
	updatedAt: Date,
	isActive: { type: Boolean, default: true },
});

//const User = mongoose.model('User', userSchema);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
