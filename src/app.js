const express = require('express')
// add dotenv API 
require('dotenv').config(
    {
    path:'./config/test.env'
})
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app