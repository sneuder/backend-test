import mongoose from "mongoose";

const db = () => {
  main().catch((err) => console.log(err));

  async function main() {
    // add the url mongo database
    await mongoose.connect();
  }
};

export default db;
