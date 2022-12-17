import { connect, set } from "mongoose";

const DB_URI = `${process.env.DB_URY_MONGO}`;

const dbInit = async () => {
  set("strictQuery", true);
  await connect(DB_URI);
  console.log("MONGODB CONNECT");
};

export default dbInit;
