const express = require('express')
const app = express()
const answer = require('./magicball')

//const magicArr = Math.floor(Math.random() * answer.length)

const PORT = 9000



app.get('/', (req, res) => {
    res.send('ROOT DE IT IS!')
})

app.get('/greeting', (req, res) =>{
    res.send('Hello Stranger.')
})

app.get('/greeting/:name', (req, res) =>{
    req.params.name
    res.send(`What's up ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (req, res) =>{
    req.params.total
    req.params.tipPercentage
    res.send(`${req.params.tipPercentage}`)


})

app.get('/magic/:question', (req, res) =>{
    req.params.question
    res.send(answer)
})

app.listen(PORT, () => {
    console.log('Run this PORT!')
})