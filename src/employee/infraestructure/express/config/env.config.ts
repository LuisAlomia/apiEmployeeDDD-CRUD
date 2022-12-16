import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || "9001",
  mongo_ury: process.env.DB_URY_MONGO,
};
