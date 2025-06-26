import { Model, model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import {
  IAddress,
  IUser,
  UserInstanceMethod,
  UserStaticMethods,
} from "../interfaces/user.interface";
import validator from "validator";

const addressSchema = new Schema<IAddress>(
  {
    city: { type: String },
    street: { type: String },
    zip: { type: Number },
  },
  {
    _id: false,
  }
);

const userSchema = new Schema<IUser, UserStaticMethods, UserInstanceMethod>(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      trim: true,
      minlength: [3, "first name must be at least 3 characters, got {VALUE}"],
      maxlength: 10,
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      trim: true,
      minlength: [3, "last name must be at least 3 characters, got {VALUE}"],
      maxlength: 10,
    },
    age: {
      type: Number,
      required: true,
      min: [18, "Must be at least 18, got {VALUE}"],
      max: 60,
    },
    email: {
      type: String,
      unique: [true, "Email should be unique"],
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      // validate: {
      //   validator: function (value) {
      //     return /^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(value);
      //   },

      //   message: function (props) {
      //     return `Email ${props.value} is not valid`;
      //   },
      // },

      validate: [validator.isEmail, "Invalid Email sent {value}"],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      uppercase: true,
      enum: {
        values: ["USER", "ADMIN", "SUPERADMIN"],
        message: "Role is not valid, got {value} role",
      },
      default: "USER",
    },

    address: {
      type: addressSchema,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.method("hashPassword", async function (plainPassword) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(plainPassword, salt);

  return hashedPassword;
});

userSchema.static("hashPassword", async function (plainPassword) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(plainPassword, salt);

  return hashedPassword;
});

// const User = model("User", userSchema);
const User = model<IUser, UserStaticMethods>("User", userSchema);

export default User;
