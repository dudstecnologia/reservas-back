const verifyAuth = require('./index')

module.exports = app => {
    const auth = require("../controllers/auth.controller");

    app.post('/login', auth.login)

    app.get('/logout', verifyAuth, auth.logout)
}