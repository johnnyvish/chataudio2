import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  userId: {
    type: String,
  },
  email: {
    type: String,
  },
  profileImage: {
    type: String,
  },
  generationsLeft: {
    type: Number,
    default: 100,
  },
  subscriptionType: {
    type: String,
    default: "Free",
  },
  stripeSubscriptionId: {
    type: String,
    default: "",
  },
  stripeCustomerId: {
    type: String,
    default: "",
  },
  stripeCurrentPeriodEnd: {
    type: Date,
    default: null,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
