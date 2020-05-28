const verifyAuth = require('./index')

module.exports = app => {
    const profiles = require("../controllers/profile.controller")

    app.get("/profiles", verifyAuth, profiles.findAll)
}