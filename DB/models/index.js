if (!global.hasOwnProperty("db")) {
  var Sequelize = require("sequelize"),
    sequelize = null;

  if (process.env.CLEARDB_DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
      dialect: "mysql",
      port: 3306,
      host: "0.0.0.0",
      logging: true //false
    });
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize("example-app-db", "root", null);
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Login: sequelize.import(__dirname + "/Login"),
    Pantry: sequelize.import(__dirname + "/Pantry"),
    Groceries: sequelize.import(__dirname + "/Groceries")
    // add your other models here
  };

  /*
      Associations can be defined here. E.g. like this:
      global.db.User.hasMany(global.db.SomethingElse)
    */
}

module.exports = global.db;
