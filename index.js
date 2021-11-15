const express = require('express')
const app = express()
const port = 5010

let release = 1636980500046;

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/dist/index.html")
})

app.use(express.static('dist'))
app.listen(port, () => {
	console.log("Cyberblitz Website started on " + port)
})