var mysql = require('mysql');
//conn variable for connection from database
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dec_alumni"
});
//check database connection
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connection sucessfully");
});

module.exports = conn;