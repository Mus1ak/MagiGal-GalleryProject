const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const UploadRoute = require("../backend/routes/UploadRoute")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))


const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');

  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

app.use(UploadRoute)

app.listen(PORT, ()=> {
    console.log(`Server Started at port: ${PORT}`)
})