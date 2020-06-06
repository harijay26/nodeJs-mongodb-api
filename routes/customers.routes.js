
const express = require('express')
const router = express.Router()
const Customer = require('../models/customer.models');


// Get all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find()
        res.json(customers)
        //res.send(customers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


// Get one customer
router.get('/:id', getCustomer,  (req, res) => {
    res.send(res.customer);
});

// Middleware
async function getCustomer(req, res, next) {
    try {
      customer = await Customer.findById(req.params.id)
      if (customer == null) {
        return res.status(404).json({ message: 'Cant find customer'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message })
    }
  
    res.customer = customer
    next()
}

module.exports = router