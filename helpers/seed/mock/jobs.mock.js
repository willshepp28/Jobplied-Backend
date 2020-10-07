const createJob = require("../../seed/user.seeder");


/**
 * 
 *        queryInterface.addColumn("Jobs", "city", {type: Sequelize.STRING}),
          queryInterface.addColumn("Jobs", "state", { type: Sequelize.STRING}),
          queryInterface.addColumn("Jobs", "source", { type: Sequelize.TEXT }),
          queryInterface.addColumn("Jobs", "saved_for_later", { type: Sequelize.BOOLEAN, defaultValue: false }),
          queryInterface.addColumn("Jobs", "employment_type", { type: Sequelize.STRING}),
          queryInterface.addColumn("Jobs", "remote", { type: Sequelize.BOOLEAN, defaultValue: false }),
          queryInterface.addColumn("Jobs", "experience_level", {type: Sequelize.STRING})
 * 


 * 
 * const createJob = (id, company_name, company_description, city,state, source, saved_for_later, employment_type, remote, experience_level, job_title, job_description, notes, pay_range, url) => {
    return {
        user_id: id,
        company_name: company_name,
        company_description: company_description,
        city: city,
        state: state,
        source: source,
        saved_for_later: saved_for_later,
        employment_type: employment_type,
        remote: remote,
        experience_level: experience_level,
        job_title: job_title,
        job_description: job_description,
        notes: notes || null,
        pay_range: pay_range,
        application_url: url,
        date: Date.now()
    }
};


1. Create a array with job objects
 */

 const jobSeeds = [
     
 ]


 const createBulkJobs = () => {

 };



 module.exports =  createBulkJobs;


 
