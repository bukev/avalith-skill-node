const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})


// ----- Obtener fecha ----- //
app.get('/date', (req, res) => {
    res.send(new Date(Date.now()))
})


// ----- Leer archivo txt ----- //
app.get('/txt', (req, res) => {
    fs.readFile('text.txt', 'utf8', (err, data) => {
        res.send(data)
    })
})


// ----- 'Buenos días X!' ----- //
app.post('/hello', (req, res) => {
    console.log(req.body.name)
    res.send(`Buenos días ${req.body.name}!`)
})

