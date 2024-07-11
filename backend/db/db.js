const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected to - ", conn.connection.host);
    } catch (error) {
        console.error("DB connection error");
    }
}

module.exports = connectDB