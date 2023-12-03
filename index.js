require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const config = require("./configs");
config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", require("./routes/routes"));

server.listen(port, () => {
  console.log("listening on *: " + port);
});
