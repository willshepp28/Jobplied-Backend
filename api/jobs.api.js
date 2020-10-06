const router = require("express").Router();



router.get("/", (request, response) => {
    return response.status(200).json("Youve entered the jobs api endpoint");
});


module.exports = router;