const express = require('express')
const IncomeSchema = require('../models/IncomeModel')

exports.addIncome = async (req, res)=>{
    const {title, amount, date, category, description} = req.body

    const newIncomeEntry = new IncomeSchema({title, amount, date, category, description})
    try {
        if(!title || !category || !description || !date || !amount){
            return res.status(400).json({msg:"All fields are required"})
        }
        if(amount<=0 || !amount === 'number'){
            return res.status(400).json({msg:"Invalid format"})
        }
        await newIncomeEntry.save()
        res.status(200).json({msg: "Entry added successfully"})
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:"Internal server error - ", error})
    }
    
}

exports.getIncome = async (req, res)=>{
    try {
        const data = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:"Internal server error - ", error})
    }
    
}

exports.deleteIncome = async (req, res)=>{
    const {id} = req.params
    await IncomeSchema.findByIdAndDelete(id).then((income)=>{
        res.status(200).json({msg:"Income deleted"})
    }).catch((err)=>{
        res.status(500).json({msg:"Internal server error - ", err})
    })
}