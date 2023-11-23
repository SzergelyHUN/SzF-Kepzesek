const express = require("express")
require("dotenv").config()
const trainings = require("./routes/trainings")
const logger = require('./middleware/logger')
const morgan = require('morgan')
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
    console.log(error);
});
database.once("connected", () => {
    console.log(`Database Connected ${database.host}`);
});

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use("/api/trainings", trainings)

app.listen(process.env.PORT, () => {console.log(`Server is running on port: ${process.env.PORT}`)})
