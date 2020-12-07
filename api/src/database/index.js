import "dotenv/config";

import mongoose from "mongoose";

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    mongoose
      .connect(process.env.MONGO_URL, {
        //  auth: {
        //    user: process.env.MONGO_USER,
        //    password: process.env.MONGO_PASS,
        //  },
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      })
      .then(
        () => {
          console.log("Database connected");
        },
        (err) => {
          /** handle initial connection error */

          console.log("Error in database connection. ", err);
        }
      );
  }
}

export default new Database();
