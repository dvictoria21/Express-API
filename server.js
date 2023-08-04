import express from "express";
import db from "./db/connection.js";
import routes from "./routes/index.js";
import cors from "cors";

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json());
app.use("/", routes);
app.use(cors())

async function startServer() {
  try {
    console.clear();
    await app.listen(PORT);
    console.log(`Express server running on port: ${PORT}`);
  } catch (err) {
    console.error("Error starting server:", err);
  }
}

db.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

(async () => {
  try {
    await db;
    startServer();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
})();
