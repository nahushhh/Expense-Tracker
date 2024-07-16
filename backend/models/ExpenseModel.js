const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount:{
        type:Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    description:{
        type: String,
        required: true,
        maxLength: 140
    },
    type:{
        type: String,
        required: true,
        default: 'expense'
    },
    category:{
        type: String,
        required: true,
        trim: true
    },
    date:{
        type: Date,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Expense', ExpenseSchema)