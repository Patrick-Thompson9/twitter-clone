import mongoose, { model, models } from "mongoose";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { emit } from "process";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
  image: String,
  username: String,
});

const User = models?.User || model("User", UserSchema);

export default User;
