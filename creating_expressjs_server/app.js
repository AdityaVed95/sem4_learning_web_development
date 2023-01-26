const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!..how r u..installed nodemon ')
})

app.get('/echo', (req, res) => {
    console.log(req)
    res.send('Hello.. ' + req.query.name)
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

