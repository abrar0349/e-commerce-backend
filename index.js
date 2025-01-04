const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDb = require('./config/db')
const router = require('./routers/index')

const app = express()

app.use(express.json())

app.use(cookieParser())
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
// console.log(router)
app.use("/api" , router)


const PORT = process.env.PORT 
// console.log(PORT)
connectDb().then(
    app.listen(PORT , () => {
        console.log('server is running')
        console.log('DataBase is Connected')
    })
)

