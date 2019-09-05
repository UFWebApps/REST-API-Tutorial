var express = require('express') // get the express dependency
var app = express() // init express
var listings = require('./listings.json')

// add middleware
app.use((req, res, next) => {
    console.log(req.path)  
    console.log(listings.entries[0]);
    
    next()
})

// add a handler for get requests to /hello
app.get('/hello', (req, res, next) => { 
    res.json('world')
})

// add a handler for get requests to /listings
app.get('/listings', (req, res) => {
    res.json(listings)
})

// add a handler for get requests to /listings/:id
app.get('/listings/:id', (req, res) => {
    res.json(listings.entries[req.params.id])
})

// start the server on port 3000
app.listen(3000, () => {
    console.log('Server running on port 3000')
})