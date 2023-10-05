import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

const startServer = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(4000, () =>
      console.log(`App is running at Port: ${4000 || process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};
startServer();
