const express = require("express");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/user");
const users = require("../controllers/users");
const passport = require("passport");
const router = express.Router({ mergeParams: true });

router
  .route("/register")
  .get(users.renderRegisterForm)
  .post(catchAsync(users.createUser));

router
  .route("/login")
  .get(users.renderLoginForm)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    users.loginUser
  );

router.get("/logout", users.logoutUser);

module.exports = router;
