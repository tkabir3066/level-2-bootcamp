import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import validator from "validator";

const userSchema = new Schema<IUser>({
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
      values: ["user", "admin", "superadmin"],
      message: "Role is not valid, got {value} role",
    },
    default: "user",
  },
});

const User = model("User", userSchema);

export default User;
