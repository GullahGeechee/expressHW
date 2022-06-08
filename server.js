const express = require('express')
const app = express()

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

app.listen(PORT, () => {
    console.log('Run this PORT!')
})