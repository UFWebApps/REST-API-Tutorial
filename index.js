var express = require('express') // get the express dependency
var app = express() // init express
var planets = ['earth']

// add middleware
app.use((req, res, next) => {
    console.log(req.path)  
    next()
})

// handle get reqs for /hello
app.get('/hello', (req, res, next) => { 
    res.send('world')
})

// handle get reqs for /planets
app.get('/planets', (req, res) => {
    res.json(planets)
})

// handle post reqs for /planets
app.post('/planetz', (req, res) => {
    console.log(req.body);
    
    planets.push(req.body.planet)
    res.json(planets)
})

// handle get reqs for /planets/:id
app.get('/planets/:id', (req, res) => {
    const planet = planets[req.params.id]

    if (planet) {
        res.send(planet)
    } else {
        res.send('Invalid planet id')
    }
})

// start app on port 3000
app.listen(3000, () => {
    console.log('Server running on port 3000')
})