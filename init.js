import dotenv from "dotenv";
import app from "./app";
import "./db";

dotenv.config();

import "./models/Comment";
import "./models/User";
import "./models/Recipe";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
