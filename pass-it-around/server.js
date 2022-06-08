const express = require('express')
const app = express()
const beer = require('../pass-it-around/module')

const PORT = 1000

app.get('/', (req,res) =>{
    res.send(beer)
})

app.get('/:id', (req,res) => {
    req.params.id
   res.json(req.params.id + ' ' + beer.slice(3))})


app.listen(PORT, () =>{
    console.log('We Runnin')
})