const { getExpense, addExpense, deleteExpense } = require('../controllers/Expense')
const { addIncome, getIncome, deleteIncome } = require('../controllers/Income')


const router = require('express').Router()

router.post('/add-income', addIncome)
        .get('/get-income', getIncome)
        .delete('/delete-income/:id', deleteIncome)
        .post('/add-expense', addExpense)
        .get('/get-expense', getExpense)
        .delete('/delete-expense/:id', deleteExpense)

module.exports = router