const { Profile } = require('../models')

exports.findAll = (req, res) => {
    Profile.findAll().then((profiles) => {
        res.send(profiles)
    })
}