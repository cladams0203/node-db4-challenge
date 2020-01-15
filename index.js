const express = require('express')
const cors = require('cors')
const db = require('./data/db')
const server = express()
server.use(express.json())
server.use(cors())

server.get('/api/recipes', (req,res) => {
    db.find()
        .then(recipes => {
            res.status(200).json(recipes)
        })
})

server.get('/api/recipes/:id/shoppinglist', (req,res) => {
    db.findShoppingList(req.params.id)
        .then(ingredients => {
            res.status(200).json({ingredients})
        })
})

server.get(`/api/recipes/:id/instructions`, (req,res) => {
    
    db.findInstructions(req.params.id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
})

server.listen(5000, () => {
    console.log('running on 5000')
})