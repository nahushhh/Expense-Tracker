const { addIncome, getIncome, deleteIncome } = require('../controllers/Income')

const router = require('express').Router()

router.post('/add-income', addIncome)
.get('/get-income', getIncome)
.delete('/delete-income/:id', deleteIncome)
module.exports = router