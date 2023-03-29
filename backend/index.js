const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const routes = require("./app/routes/routes.routes");

//cors options
const corsMethod = {
  origin: "*",
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
};
app.use(cors(corsMethod));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded({ extended: true }));

///use toutes
app.use("/api", routes);

///database connection
mongoose.connect(process.env.DB);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

//run sever
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
