// app.js
const { MongoClient } = require("mongodb");
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}

