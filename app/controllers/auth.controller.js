const { User } = require('../models')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

exports.login = (req, res) => {
    // User.findOne({ where: req.body})
    //     .then((user) => {
    //         var token = jwt.sign({ email: user.email }, process.env.TOKEN_JWT, { expiresIn: 3600 })
    //         res.status(200).send({ auth: true, token: token })
    //     })
    //     .catch((err) => {
    //         res.status(400).send({ auth: false, msg: 'Falha na autenticação' })
    //     })

    User.findOne({ where: { email: req.body.email }})
        .then((user) => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (result) {
                        var token = jwt.sign({ email: user.email }, process.env.TOKEN_JWT, { expiresIn: 3600 })
                        res.status(200).send({ auth: true, token: token })
                    } else {
                        res.status(400).send({ auth: false, msg: 'Falha na autenticação' })
                    }
                })
            } else {
                res.status(400).send({ auth: false, msg: 'Falha na autenticação' })
            }
        })
        .catch((err) => {
            res.status(400).send({ auth: false, msg: 'Falha na autenticação' })
        })
}

exports.register = (req, res) => {

}

exports.logout = (req, res) => {
    res.status(200).send({ auth: false, token: null })
}
