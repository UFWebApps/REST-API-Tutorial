const express = require('express') // get the express dependency
let app = express() // init express

// handle get reqs for /hello
app.get('/hello', (req, res, next) => { 
    res.send('world')
})

// start app on port 3000
app.listen(3001, () => {
    console.log('Server running on port 3001')
})