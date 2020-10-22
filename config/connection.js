var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "u5cp61ta4jl4hqch",
  password: "bv083980t7dx97s5",
  database: "c6w85tbis2zvqlxw"
});

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Password1",
//   database: "burgers_db"
// });

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
