const express = require("express")
require("dotenv").config()
const trainings = require("./routes/trainings")
const logger = require('./middleware/logger')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.use("/api/trainings", trainings)

app.listen(process.env.PORT, () => {console.log(`Server is running on port: ${process.env.PORT}`)})
