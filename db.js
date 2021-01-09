import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log(process.env);
  console.log("Connected to DB");
});
db.on("error", error => {
  console.log(`Error on DB Connection:${error}`);
});
