import mongoose, { model, models } from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    author: { type: mongoose.Types.ObjectId, ref: "User" },
    text: String,
  },
  { timestamps: true }
);

const Post = models?.Post || model("Post", PostSchema);

export default Post;
