const express = require("express");
const { register_user, login_user } = require("../controllers/controller_register");

const auth_router = express.Router()
auth_router.post("/signup", register_user)
auth_router.post("/login", login_user)

module.exports = auth_router