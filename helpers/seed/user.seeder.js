const encrypt = require("../encrypt/encrypt");


const createUser = async(firstname, lastname) => {
    return await {
      firstname: firstname,
      lastname: lastname,
      image_url: "https://www.ohea.org/cms/assets/uploads/2018/10/avatar.jpg",
      password: await encrypt("123"),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  };



const createBulkUsers = () => {

}




module.exports = createUser;