var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send("Hello from Express")
})

app.listen(3000, () => {
    console.log("App is running on port 3000");
})