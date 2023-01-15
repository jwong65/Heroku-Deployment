const express = require('express')
app = express()

require('dotenv').config()


app.listen(process.env.PORT)