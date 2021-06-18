var mysql, con, maybe, local_cfg, remote_cfg, fn;
mysql = require("mysql");

local_cfg = {
  host: "localhost",
  user: "root",
  password: "virio0216",
  database: "exocortex"
}

remote_cfg = {
  host: "sedecilliard.com",
  user: "u7966147_root",
  password: "OyusPA!U@elG",
  database: "u7966147_default"
}

fn = function(x){
	var con;
	con = mysql.createConnection(x);
	return new Promise((resolve, reject)=>{
		con.connect((err)=>{
			if (err) reject(err) 
			else resolve(con)
		});
	})
}

exports.local = ()=>{return fn(local_cfg)}

exports.remote = ()=>{return fn(remote_cfg)}
