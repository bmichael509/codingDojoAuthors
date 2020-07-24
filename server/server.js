const port = 8000;
const db_name = "authors";
const express = require("express");
const cors = require("cors");
const app = express();

require("./config/mongoose.config")(db_name);

app.use(cors());
// for our server to receive JSON: req.body will be undefined without this
app.use(express.json());

app.use(express.urlencoded({ extended: true }))
// Long form:
// const routesFunct = require("./routes/city.routes");
//routesFunc(app)

// Short hand, impor tht efunction from routes.js and immediately execute it
require("./routes/author.routes")(app)

app.listen(port, () => {
    console.log(`Listening on port ${port} for requests to respond to`);
});