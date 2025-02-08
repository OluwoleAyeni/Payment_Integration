const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")


const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const connectDB = require("./config/db")

connectDB(); 

app.listen(PORT, () => {
  console.log ( `server runing on ${PORT}`)
})

