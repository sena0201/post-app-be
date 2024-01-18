import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import posts from "./routers/post.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

const URI =
  "mongodb+srv://admin:x3fujmwfam3KxSqJ@cluster0.wqm1ldw.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json({ limit: "30mb" }));
app.use(
  bodyParser.urlencoded({ extended: true, limit: "30mb" })
);
app.use(cors());

app.use("/posts", posts);

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
