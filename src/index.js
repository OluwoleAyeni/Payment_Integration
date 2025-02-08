const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const { userRoute } = require("../src/routes/userRoutes")


const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Routes 
app.use("/users", userRoute)

const connectDB = require("./config/db")

connectDB();



app.listen(PORT, () => {
  console.log(`server runing on ${PORT}`)
})

