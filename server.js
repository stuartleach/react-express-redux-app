const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000
app.use(cors({ origin: '*' }))
const path = 'http://jsonplaceholder.typicode.com/posts'

const data = []

axios.get(path).then((res) => data.push(res.data))

app.get('/data', (req, res) => {
	res.send({ express: data })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
