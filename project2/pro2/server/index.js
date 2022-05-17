import express from "express";
//const res = require("express/lib/response");
import bodyParser from "body-parser";
//const router = express.Router();
//app.use(express.static(path.join(__dirname, "public")));
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Instaverse API");
});

const CONNECTION_URL =
  "mongodb+srv://sam:1046@shelter.pibny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
  )
  .catch((err) => console.error(err.message));
