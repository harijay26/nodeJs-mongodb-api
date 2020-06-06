const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

// Database connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'));

// Setting up our server to accept JSON using a middleware
app.use(express.json())

// Routes
const customersRouter = require('./routes/customers.routes')
app.use('/customers', customersRouter )

// Start Server, Listen on port 3000
app.listen(3001, () => {
    console.log('server started...listening on port 3001');
})