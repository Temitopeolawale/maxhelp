import dotenv from "dotenv";
import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/user";
import unitRouter from "./routes/unit";
import productRouter from "./routes/product";
import inventoryRoutes from "./routes/inventory";
import salesRoutes from "./routes/sales";
import feedbackRoutes from "./routes/feedback";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
app.use(morgan("dev"));
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  }),
);
const DB_URL = process.env.DB_URL!;

console.log(DB_URL);

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
} as ConnectOptions);

const conn = mongoose.connection;

conn.on("open", () => {
  console.log("Connected to MongoDB");
});
conn.on("error", (err) => {
  console.error(err);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRouter);
app.use("/unit", unitRouter);
app.use("/product", productRouter);
app.use("/inventory", inventoryRoutes);
app.use("/sales", salesRoutes);
app.use("/feedback", feedbackRoutes);

app.listen(port, () => {
  console.log("Server is running on port 3000");
});

