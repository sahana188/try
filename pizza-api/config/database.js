const dbConfig = {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "pizza_db"
  };
  const mariadb = require("mariadb/callback");
  module.exports = mariadb.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    database: dbConfig.database,
    password: dbConfig.password,
    connectionLimit: 5
  });
  