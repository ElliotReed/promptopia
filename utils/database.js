import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log(`\x1b[32mMongoDB is already connected\x1b[0m]`);
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log(`\x1b[1mMongoDB connected\x1b[0m]`);
  } catch (error) {
    console.error(error);
  }
}