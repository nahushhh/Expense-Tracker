const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors') //
const connectDB = require('./db/db')
const { readdirSync } = require('fs')


dotenv.config()

app = express()

const PORT = process.env.PORT


// middlewares
app.use(express.json())
app.use(cors())


readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/'+route)))
// app.use('/', require('./routes/transactions'))

const server = ()=>{
    //connect to databse
    connectDB()
    app.listen(PORT, ()=>{
        console.log("Listening to port - ", PORT);
    });
}

server()
