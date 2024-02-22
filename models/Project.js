import mongoose, { Schema, models } from "mongoose";

const projectSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    dept: {
      type: String,
      required: true,
    },
    sem: {
      type: String,
      required: true,
    },
    srcCode: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Project = models.Project || mongoose.model("Project", projectSchema);
export default Project;
