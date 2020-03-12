// Dependencies
// =============================================================
var express = require("express");
const mysql = require("mysql2");
const dbConfig = require("./DB/config/config");

//Setup Mysql DB connection
// var pool = mysql.createPool({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB
// });

dbConnectionInfo = {
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
};

var dbconnection = mysql.createPool(dbConnectionInfo);

// Attempt to catch disconnects
dbconnection.on("connection", function(connection) {
  console.log("DB Connection established");

  connection.on("error", function(err) {
    console.error(new Date(), "MySQL error", err.code);
  });
  connection.on("close", function(err) {
    console.error(new Date(), "MySQL close", err);
  });
});

module.exports = dbconnection;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
const host = "0.0.0.0";

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./DB/routes/api-routes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

module.exports = app;
