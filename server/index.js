const express = require("express")

const app = express()
require("dotenv").config()
const cors = require("cors")

const PORT  = process.env.PORT || 8000

//middlewares
app.use(express.json())
app.use(cors({
    origin:"*",
    credentials: true
}))

const userRoutes = require("./routes/userRoutes")
const orderRoutes = require("./routes/orderRoutes")
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/order", orderRoutes)

app.listen(PORT,()=>{
console.log(`server connected to ${PORT}`)
})