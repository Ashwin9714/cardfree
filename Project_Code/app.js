const express = require('express')
const app = express()
const port = 3000

var ip = require("ip");

app.get('/', (req, res) => res.send(`Hello cardfree! Host ip ${ip.address()}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))