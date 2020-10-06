const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;


app = express();


app.get("/", (request, response) => {
    return response.status(200).json("You have entered the Jobplied route");
});


app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));