const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const express = require("express")

dotenv.config();
const DB = process.env.DB_URL
mongoose.connect(DB, {useNewUrlParser:true});

const app = express()
app.use(cors())
app.use(bodyParser.json())

