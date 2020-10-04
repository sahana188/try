const express     =  require("express");
const bodyParser  =  require("body-parser");
const app         =  express();
const cors        =  require('cors')
const port        =  8080;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require("./routes/index");
app.use("/", routes);
app.use("/pizza",routes);


app.set("port", process.env.PORT || port);
app.listen(app.get("port"), () => {
  console.log("Server started on port " + app.get("port"));
});