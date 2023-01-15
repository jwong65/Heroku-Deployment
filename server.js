const express = require('express')
app = express()

require('dotenv').config()

const PORT= process.env.PORT


app.get('/', (req, res)=>{
    res.send("Hello world, this is the first")
})

app.listen(PORT)

module.exports = app