import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
	isVerified: { type: Boolean, default: false },
	title: { type: String, required: true },
	description: { type: String, required: true },
	publishedOn: { type: Date, required: true },
	author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	url: { type: String, required: true },
    tags:[String],
	createdAt: { type: Date, default: Date.now },
	updatedAt: Date,
});

const Article =
	mongoose.models.Article || mongoose.model("Article", articleSchema);

export default Article;
