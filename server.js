const express = require('express')
app = express()

require('dotenv').config()

app.get('/', (req, res)=>{
    res.send("Hello world, this is the first")
})

app.listen(process.env.PORT)