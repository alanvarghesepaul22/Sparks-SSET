import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("DB connected");
    
  } catch (error) {
    throw new Error("Connection failed!");
  }
};
