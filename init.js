import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
