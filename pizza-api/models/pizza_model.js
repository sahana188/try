const dbPool = require("../config/database");
const cmodel = require("./common_model");

//get all pizza 
module.exports.getAllPizza = function(data, callback) {
  const qry = "SELECT * FROM  pizza_tb";
  cmodel.sql(qry, [], (err, res) => {
    callback(err, res);
  });
};

//get pizza by id
module.exports.getPizzaById = function(p_id, callback) {
  const qry = "SELECT * FROM  pizza_tb where id =  ?";
  const val = [p_id];
  cmodel.sql(qry, val, (err, res) => {
    callback(err, res);
  });
};

//update status
module.exports.updateSt = function(id,d,callback)
{
  const qry = "UPDATE pizza_tb SET status = ? WHERE id = ?";
  const val = [d.status,id];
  cmodel.sql(qry, val, (err, res) => {
    if(err){console.log(err);}
    else{
      const qry = "SELECT * FROM  pizza_tb where id =  ?";
      const val = [id];
      cmodel.sql(qry, val, (err, res) => {
        callback(err, res);
        });
      }
  });
}
