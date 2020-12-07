import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (this.password && this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

export default mongoose.model("User", UserSchema);
