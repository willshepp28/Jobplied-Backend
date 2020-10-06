const router = require("express").Router();



router.get("/", (request, response) => {
    return response.status(200).json("Youve entered the user api endpoint");
});


module.exports = router;