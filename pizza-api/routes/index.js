var express = require("express");
var router = express.Router();
const Pizza = require("../models/pizza_model");

//get all Pizza 
router.get('/',(req, res) => {
    Pizza.getAllPizza('', (err, pData) => {
        if (err) 
        {
          console.log(err);
        } 
        else 
        {
          pList = pData;
        }
     return res.json({pList:pList});
     });
    });

//get pizza details by id
router.get('/pizza/(:id)',(req, res) => {
  var p_id = req.params.id;
      Pizza.getPizzaById(p_id, (err, pDetails) => {
          if (err)
           {
            console.log(err);
           }
          else 
          {
            pListDetails = pDetails;
          }
        return res.json({pListDetails:pListDetails});
       });
      });

//update order status
    router.put("/update/:id", (req, res) => {
        const putData = req.body;
        const idToPutData = req.params.id;
        Pizza.updateSt(idToPutData,putData,(err,sd)=>{
          if(err)
          {
            console.log(err);
          }
          else
          {
            result = sd
          }
          return res.json({result:result})
        });
      });

module.exports = router;

