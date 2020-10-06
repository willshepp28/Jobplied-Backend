


const createJob = (id, company_name, company_description, job_title, job_description, notes, pay_range, url) => {
    return {
        user_id: id,
        company_name: company_name,
        company_description: company_description,
        job_title: job_title,
        job_description: job_description,
        notes: notes || null,
        pay_range: pay_range,
        application_url: url,
        date: Date.now()
    }
};


module.exports = createJob;