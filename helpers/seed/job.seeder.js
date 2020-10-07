


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

const newCreateJob = (id, company_name, company_description, job_title, job_description,  city,state, source, saved_for_later, employment_type, remote, experience_level, notes, pay_range, url) => {
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


module.exports = newCreateJob;