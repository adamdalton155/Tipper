const express = require('express')
const paymentRoutes = require('./PaymentLogic/PaymentRoute')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

app.use(bodyParser.json)
app.use('/payments', paymentRoutes)

app.get(' http://10.0.2.2/api/test/', (req, res)=>{
    res.send("Hello")
})

app.listen(PORT, () =>{
    console.log('API listening on port ', PORT)
})