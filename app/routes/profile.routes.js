module.exports = app => {
    const profiles = require("../controllers/profile.controller");

    app.get("/profiles", profiles.findAll)
}