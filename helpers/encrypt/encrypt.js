require("dotenv").config();

const bcrypt = require("bcrypt");



const generateHash = async(password) => {
    return await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
};


module.exports = generateHash;