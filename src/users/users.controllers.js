const Users = require("../models/users.models");
const uuid = require ('uuid')

const findAllUsers = async () => {
  const data = await Users.findAll();
  return data;
};

const findUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createNewUser = async (userObj) => {
//   const data = await Users.create(user);
//   return data;

const newUser = {
    id:uuid,
    firstName : userObj.firstName,
    lastName : userObj.lastName,
    email: userObj.email,
    password: userObj.password,
    profileImage: userObj.profileImage,
    phone : userObj.phone
}
const data = await Users.create(newUser)
return data
};


const updateUser = async (id, user) => {
    const data = await Users.update(user, {
    where: {
    id,
    },
    });
    return data;
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  findAllUsers,
  findUserById,
  createNewUser,
  updateUser,
  deleteUser,
};