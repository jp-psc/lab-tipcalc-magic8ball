const express = require('express')

const app = express()

const PORT = 8081

app.get('/greeting/:name', (req, res) => {
    res.send("<h1>Hello " + req.params.name + "</h1>")
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = (parseInt(req.params.total) * parseInt(req.params.tipPercentage))/100
    res.send(tip.toString())
})

const response = require('./models/responses')
app.get('/magic/:question', (req, res) => {
    Math.random()
    res.send(`<h1>${response()}</h1>`)
})

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})