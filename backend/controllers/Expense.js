const express = require('express')
const ExpenseSchema = require('../models/ExpenseModel')

exports.addExpense = async (req, res)=>{
    const {title, amount, description, category, date} = req.body

    const newExpenseEntry = new ExpenseSchema({title, amount, description, category, date})
    try {
        if(!title || !category || !description || !date || !amount){
            return res.status(400).json({msg:"All fields are required"})
        }
        if(amount<=0 || !amount === 'number'){
            return res.status(400).json({msg:"Invalid format"})
        }
        await newExpenseEntry.save()
        res.status(200).json({msg: "Entry added successfully"})
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:"Internal server error - ", error})
    }
    
}

exports.getExpense = async (req, res)=>{
    try {
        const data = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:"Internal server error - ", error})
    }
    
}

exports.deleteExpense = async (req, res)=>{
    const {id} = req.params
    console.log(id);
    await ExpenseSchema.findByIdAndDelete(id).then((expense)=>{
        res.status(200).json({msg:"Expense deleted"})
    }).catch((err)=>{
        res.status(500).json({msg:"Internal server error - ", err})
    })
}