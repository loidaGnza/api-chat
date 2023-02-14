const { success, error } = require("../utils/handleResponses");
const usersControllers = require("./users.controllers");

const getAllUsers = async (req, res) => {
    usersControllers
    .findAllUsers()
    .then((data) => {
        success({
        res,
        data,
        status: 200,
        message: "All users retrieved successfully",
        });
    })
    .catch((err) => {
        error({
        res,
        data: err,
        status: 400,
        message: "Bad request",
        });
    });
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    usersControllers
    .findUserById(id)
    .then((data) => {
    if (data) {
        success({
            res,
            data,
            status: 200,
            message: "User found",
        });
        } else {
        error({
            res,
            status: 404,
            message: "User not found",
        });
        }
    })
    .catch((err) => {
        error({
        res,
        data: err,
        status: 400,
        message: "Bad request",
        });
    });
};

const postUser = async (req, res) => {
    const userobj = req.body;
    usersControllers
    .createNewUser(userobj)
    .then((data) => {
        success({
        res,
        data,
        status: 201,
        message: "User created successfully",
        });
    })
    .catch((err) => {
        error({
        res,
        data: err,
        status: 400,
        message: "Error",
        });
    });
};

const patchUser = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
    const updatedUser = await usersControllers.updateUser(id, updateData);
    success({
        res,
        data: updatedUser,
        status: 200,
        message: "User updated successfully",
    });
    } catch (err) {
        error({
        res,
        data: err,
        status: 400,
        message: "Bad request",
    });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    usersControllers
    .deleteUser(id)
    .then((data) => {
        if (data) {
        success({
            res,
            data,
            status: 200,
            message: "User deleted successfully",
        });
        return;
        }
        error({
        res,
        status: 404,
        message: "User not found",
        });
    })
    .catch((err) => {
        error({
        res,
        data: err,
        status: 400,
        message: "Bad request",
        });
    });
};

module.exports = {
getAllUsers,
getUserById,
postUser,
patchUser,
deleteUser,
};