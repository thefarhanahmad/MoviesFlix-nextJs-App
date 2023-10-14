import mongoose from "mongoose";

// importing mongodb url from env file and validate it
const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// making cache and validating
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}

// if everything good so creating function to connect database
const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  // If a connection does not exist, we check if a promise is already in progress. If a promise is already in progress, we wait for it to resolve to get the connection
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
    // console.log("DB connected successfully in try block!")
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  console.log("DB connected successfully !");
  return cached.conn;
};

export default dbConnect;
