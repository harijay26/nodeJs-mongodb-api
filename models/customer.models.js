
const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    street: String,
    city: String,
    zip: String,
    quantity: Number,
    totalAmount: Number,
    shipDate: Date, 
    price: Number,
    title: String,
    genre: String,
    publishedYear: Date,
    authorName: String,
    authorAddress: String,
    authorURL: String,
    publisherName: String,
    publisherAddress: String,
    publisherPhone: String,
    publisherURL: String
});


// Exporting our customer schema
module.exports = mongoose.model('customers', customerSchema)