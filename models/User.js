import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  nickname: String,
  email: String,
  profileUrl: String,
  facebookId: Number,
  githubId: Number,
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
  clips: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});

const model = mongoose.model("User", UserSchema);

export default model;
