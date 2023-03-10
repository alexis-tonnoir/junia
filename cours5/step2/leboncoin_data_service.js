const mysql = require('mysql');

class LeboncoinDataService {
  static _intance = null;

  static getInstance() {
    if (LeboncoinDataService._intance == null) {
      LeboncoinDataService._intance = new LeboncoinDataService()
    }
    return LeboncoinDataService._intance
  }

  constructor() {
    if (LeboncoinDataService._intance != null) {
      throw new Error("New instance cannot be created!!");
    }
    this.con = mysql.createConnection({
      host: 'localhost',
      user: 'junia_user',
      password: 'junia_user',
      database: 'junia'
    });

    this.con.connect(err => {
      if (err) throw err;
      else console.log('connection established')
    });

    // Fermeture de la connexion lors de la terminaison du processus
    process.on('SIGINT', () => {
      connection.end();
      process.exit();
    });
  }

  read() {
    const sql = "SELECT * FROM annonces";
    console.log('Connexion établie avec la base de données');
    this.con.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  }

  insertOrUpdate(annonce) {
    const sql = `INSERT INTO annonces (id, title, description) VALUES ('${annonce.id}', '${annonce.title}', '${annonce.description}') 
       ON DUPLICATE KEY UPDATE title = '${annonce.title}', description = '${annonce.description}'`;
    this.con.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`Annonce ${annonce.id} insérée ou mise à jour avec succès`);
      this.con.end();
    });
  }
}

module.exports = {
  getService: function () {
    return LeboncoinDataService.getInstance();
  }
}