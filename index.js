var express = require('express') // get the express dependency
var app = express() // init express

app.get('/hello', (req, res, next) => {
    res.json('world')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})