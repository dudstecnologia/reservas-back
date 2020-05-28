const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    const authToken = req.headers.authorization

    if (authToken) {
        const token = authToken.split(' ')[1];

        jwt.verify(token, process.env.TOKEN_JWT, (err, user) => {
            if (err) {
                return res.status(401).send({ auth: false, msg: 'Não autorizado' })
            }

            req.user = user
            next()
        })
    } else {
        res.status(401).send({ auth: false, msg: 'Não autorizado' })
    }
}