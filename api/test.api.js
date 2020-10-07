const createUser = require("../helpers/seed/user.seeder");
const newCreateJob = require("../helpers/seed/job.seeder");

const router = require("express").Router();



router.get("/", (request, response) => {
    return response.status(200).json("You are in the test api endpoint");
});



router.get("/testCreateHash", async (request, response) => {
    const Bob = await createUser("Bob","Dole");

    return response.status(200).json(Bob);
});


router.get("/testCreateJob", (request, response) => {
    // (id, company_name, company_description, job_title, job_description, notes, pay_range, url)
    // id, company_name, company_description, job_title, job_description, city,state, source, saved_for_later, employment_type, remote, experience_level, notes, pay_range, url
    const job = newCreateJob(
        1, 
        "Jobot",
        "Jobot is a revolutionary career platform that combines AI - artificial intelligence with experienced recruiters to fill jobs...and provide incredible service to our clients and candidates in the process.",
        "Full-Stack Engineer",
        `Build solutions using your strong background in distributed systems, and large-scale database systems
        Research, analyze, design, develop and test the solutions that are appropriate for the business and technology strategies
        Participate in design discussions, code reviews and project related team meetings
        Develop technical & domain expertise and apply to solving product challenges.
        Build key systems that power C4 driven products along with OpenTable Engineering
        Improve performance and scalability of applications
        Full stack development with Node.js/Express.js/Sails.js, with front-end work (JQuery, Backbone.js/Angular.js, CSS3, HTML5)
        RESTFUL API Development
        Maintain and enhance portals and web applications
        Analyzing and fixing current production issues
        Diagnose functional issues, report bugs, and take ownership of issue resolution
        Primarily develop features for and maintain JavaScript applications
        Light work to enhance, maintain, and create microservices in Java
        Design, build, and unit test software in a collaborative environment
        Write clear, efficient, scalable, and maintainable code
        Participate in design and code reviews
        Participate regularly in an Agile team environment and schedule
        Collaborate with UI/UX designers, Product managers, and other front-end developers to create user friendly features and applications`,
        "SC",
        "Columbia",
        "Linkedin",
        false,
        "Full-Time",
        true,
        "Mid-Level",
        null,
        100000,
        "https://www.linkedin.com/jobs/"

        );


        return response.status(200).json(job);
})

module.exports = router;