const dbPool = require("../config/database");

module.exports.sql = (qry, params, callback) => {
  if (!params) {
    params = [];
  }
  dbPool.getConnection((err, conn) => {
    if (err) {
      throw err;
    }
    conn.query(qry, params, (err, res) => {
      conn.end();
      callback(err, res);
    });
  });
};
