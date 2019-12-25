const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('./config/keys.js').mongoURI
const port = process.env.PORT || 5000

mongoose
    .connect(db)
    .then(()=> console.log('connected to server'))
    .catch(err => console.log(err))

const app = express()

app.use(bodyParser.json())

app.listen(port, ()=> console.log('server connected on port ' + port))