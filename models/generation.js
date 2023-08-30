import mongoose, { Schema } from "mongoose";

const generationSchema = new Schema({
  userId: {
    type: String,
  },

  profileImage: {
    type: String,
  },

  prompt: {
    type: String,
  },

  url: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Generation =
  mongoose.models.Generation || mongoose.model("Generation", generationSchema);

export default Generation;
