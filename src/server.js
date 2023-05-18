const express = require('express')
const paymentRoutes = require('./PaymentLogic/PaymentRoute')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const PORT = 3000

app.use(cors());
app.use(bodyParser.json())
app.use('/payments', paymentRoutes)


app.listen(PORT, () =>{
    console.log('API listening on port ', PORT)
})