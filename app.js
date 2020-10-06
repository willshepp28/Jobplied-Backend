const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const authenticationAPI = require("./api/authentication.api");
const userAPI = require("./api/user.api");
const jobAPI = require("./api/jobs.api");
const PORT = process.env.PORT || 3000;


app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (request, response) => {
    return response.status(200).json("You have entered the Jobplied route");
});


app.use("/api/authentication", authenticationAPI);
app.use("/api/user", userAPI);
app.use("/api/job", jobAPI);


app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));