const router = require("express").Router();
const createUser = require("../helpers/seed/user.seeder");
const createJob = require("../helpers/seed/job.seeder");

router.get("/", (request, response) => {
    return response.status(200).json("Youve entered the authentication api endpoint");
});


router.get("/testHash", async (request, response) => {
    const Bob = await createUser("Bob","Dole");

    return response.status(200).json(Bob);
});



module.exports = router;