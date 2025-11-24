import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    pprofileImage: {
      type: String,
      default: "",
    },

    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
  },

  { timestamps: true } //member since 2020 like this
);

const User = mongoose.model("User", UserSchema);

export default User;
