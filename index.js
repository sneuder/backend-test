import Express from "express";
import router from "./routes/index.js";
import db from "./db.js";

const app = Express();

app.use("/api", router);

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
  db();
});
