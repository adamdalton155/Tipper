const express = require('express')
const router = express.Router()
const stripe = require('stripe')('sk_test_51N0AyWGZqAlvObDNHdUczoKIIbZTg5NOXOYbjbqzfU26DpzX7lc05ceuf2vPgMiqHmzsATv10olihV3SkoKpbC8C00tav7maC0')
//This is used to post the transaction details to Stripe account for Tipper
router.post('/intents', async(req, res) =>{
    try {
        const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'eur',
        automatic_payment_methods:{
           enabled: true 
        }
    })

    res.json({paymentIntent: paymentIntent.client_secret})
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
    
})

module.exports = router