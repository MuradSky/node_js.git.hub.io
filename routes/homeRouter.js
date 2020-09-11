const express = require("express");
const homeController = require("../controller/homeController.js");
const homeRouter = express.Router();
homeRouter.use("/id/:id", homeController.id)
homeRouter.use("/postuser", homeController.postUser)
homeRouter.use("/add", homeController.add);
homeRouter.use("/users", homeController.users);
homeRouter.use("/", homeController.home);
module.exports = homeRouter;