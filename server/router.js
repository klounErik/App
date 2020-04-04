const express = require('express')
const Router = express.Router()
const User = require('./Users')

Router.get('/users', (req, res) => {
    User.find({}).then(function (users) {
        res.send(users)
    })
})

Router.post('/user/create', (req, res) => {

    let person = {
        username: req.body.username,
        password: req.body.password,
        profileimage: req.body.profileimage
    }

        User.findOne({username: req.body.username}).then((user) =>{
            if(user){
                res.sendStatus(500).json("Could not create user")
            } else {
                User.create(person).then((user) => {
                    res.send(user)
                })
            }
        })
    })

    Router.post('/user/delete', (req, res) => {

        User.findById({ _id: req.body._id }).then(function (user) {
            User.deleteOne(user).then((user) => {
                res.send(user)
            })
        })

    })

    module.exports = Router