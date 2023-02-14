const router = require("express").Router();
const usersServices = require("./users.services");


router.get('/', usersServices.getAllUsers);

router.get("/users/:id", usersServices.getUserById);

router.post("/users", usersServices.postUser);

router.patch("/users/:id", usersServices.patchUser);

router.delete("/users/:id", usersServices.deleteUser);

module.exports = router;