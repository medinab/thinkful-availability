const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.listen(PORT, (error) => {
    if(error) console.log(error);
    console.log(`Listening on port: ${PORT}`);
});

module.exports = app;