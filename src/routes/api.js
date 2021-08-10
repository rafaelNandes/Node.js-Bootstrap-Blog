const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const posts = require('../model/posts')

router.get("/all", (request, response) => {
    response.json(JSON.stringify(posts.getAll()))
})

router.post("/new", bodyParser.json(), (request, response) => {
    let title = request.body.title
    let description = request.body.description

    posts.newPost(title, description)
    response.send("Post adicionado")
}) 

module.exports = router