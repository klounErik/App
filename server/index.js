const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config')
const Router = require('./router')

mongoose.connect(`${config.DB_HOST}${config.DB_USER}:${config.DB_PASS}${config.DB_URL}${config.DB_TABLE}`, 
{useNewUrlParser: true, useUnifiedTopology: true}).then(res => {
    if(res) {
        console.log("Successfully connected to database!")
    } else {
        console.log("Could not connect to database")
    }
})

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use("/api", Router)

app.listen(config.PORT || process.env.PORT, () => {
    console.log("Success!")
})