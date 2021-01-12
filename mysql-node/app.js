var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Napster0!",
  database: "list_it"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM list", function (err, result, fields) {
    if (err) throw err;
    	const items = result.map(e => e.item_name);
    	console.log(items)
  });
});