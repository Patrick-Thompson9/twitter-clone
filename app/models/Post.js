import mongoose, { model, models } from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    author: { type: mongoose.Types.ObjectId, ref: "User" },
    text: String,
    likeCount: { type: Number, default: 0 },
    commentCount: { type: Number, default: 0 },
    shareCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Post = models?.Post || model("Post", PostSchema);

export default Post;
