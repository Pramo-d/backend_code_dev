// require('dotenv').config({path:'./env'});

import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from './app.js';

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    
    app.Listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongoDB connection failed !!!", err);
  });

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  } catch (error) {
    console.log("error", error);
  }
})();
*/
