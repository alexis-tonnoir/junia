const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'junia_user',
  password: 'junia_user',
  database: 'junia',
  insecureAuth : true
});

con.connect(err => {
  if(err) throw err;
  else console.log('connection established')
});

con.query('SELECT * FROM annonces', (err, result) => {
  if(err) throw err;
  console.log(result);
});

nest new nestjs-project