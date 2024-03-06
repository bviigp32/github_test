const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/dog', (req, res) => {
    res.json({'sound' : '멍멍'})
})

app.get('/cat', (req, res) => {
    res.json({ 'sound': '야용' })
})

app.get('/user/:id', (req, res) => {
    const q = req.params
    console.log(q.id)
    res.json({'userId' : q.id})
    // const q = req.query
    // console.log(q.name)
    // console.log(q.q)
    

    res.json({'userId' : q.name})

})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})