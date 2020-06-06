const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/webooks' , { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'));

// Setting up our server to accept JSON using a middleware
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Harry application..." });
    //res.send({ message: "Welcome to Harry Nosql application..." });
});

// Routes
const customersRouter = require('./routes/customers.routes')
app.use('/customers', customersRouter )

// Start Server, Listen on port 3000
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`server started...listening on port ${port}`);
})