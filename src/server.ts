


import mongoose from "mongoose";
import app from "./app";
import config from "./config";


async function main() {
    try {
        await mongoose.connect(config.db_url as string);

    // const PORT=process.env.PORT;
  
    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
      })
    } catch (error) {
        console.log(error);
    }
    
  }

  main()