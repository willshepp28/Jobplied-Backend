const encrypt = require("../encrypt/encrypt");


const createUser = async(firstname, lastname, password,) => {
    return {
      firstname: firstname,
      lastname: lastname,
      image_url: "https://www.ohea.org/cms/assets/uploads/2018/10/avatar.jpg",
      password: await encrypt("123")
    }
  };




module.exports = createUser;