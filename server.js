// Declaring and Initializing Constants
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('./config/keys.js').mongoURI
const cors = require("cors");

const port = process.env.PORT || 5000
const itemsRouter = require('./routes/api/items');
const app = express()

// Applying Middlewares

app.use(bodyParser.json())
app.use('/api/items', itemsRouter)
app.use(cors())

// Connecting to Database
mongoose
    .connect(db, { useNewUrlParser: true, dbName: "todos" })
    .then(()=> console.log('connected to server'))
    .catch(err => console.log(err))

// Initializing server
app.listen(port, ()=> console.log('server connected on port ' + port))