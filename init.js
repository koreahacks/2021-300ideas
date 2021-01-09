import dotenv from "dotenv";
import app from "./app";
import "./db";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
