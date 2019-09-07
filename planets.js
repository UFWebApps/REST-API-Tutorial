const express = require('express') // get the express dependency
const bodyParser = require('body-parser') // get the body parser
let app = express() // init express
let planets = ['earth'] // new planets array

// parse application/json
app.use(bodyParser.json()) 

// add middleware
app.use((req, res, next) => {
    console.log(req.path)  
    next()
})

// handle post reqs for /planets
app.post('/planets', (req, res) => {
    const planet = req.body.planet

    if (planet) {
        planets.push(req.body.planet)
        res.json(planets)
    } else {
        res.send('Missing required planet param')
    }
})

// handle get reqs for /planets
app.get('/planets', (req, res) => {
    res.json(planets)
})

// handle get reqs for /planets/:id

// handle put reqs for /planets/:id
app.put('/planets/:id', (req, res) => {
    const id = req.params.id
    const planet = req.body.planet
    const validRequest = validateRequest(id, planets[id])

    if (validRequest === true) {
        planets[id] = planet
        res.send(planets)
    } else {
        res.send(validRequest)
    }
})

// handle delete reqs for /planets/:id
app.delete('/planets/:id', (req, res) => {
    const id = req.params.id
    const planet = planets[id]
    const validRequest = validateRequest(id, planet)

    if (validRequest === true) {
        planets.splice(id, 1)
        res.send(planets)
    } else {
        res.send(validRequest)
    } 
})

// start app on port 3000
app.listen(3000, () => {
    console.log('Server running on port 3000')
})

// validator function
const validateRequest = (id, planet) => {
    if (id) {
        if (!isNaN(id)) {
            if (planet) {
                return true
            } else {
                return 'Planet not found'
            }
        } else {
            return 'Id is not a number'
        }
    } else {
        return 'Missing id param'
    }
}