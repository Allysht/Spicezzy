const PORT = process.env.PORT
const express = require('express')
const path = require('path')

const app = express();
app.set('view engine', 'ejs');

const staticPath = path.join(__dirname, 'public')

app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, (req, res) => {
    console.log(`app running on port: ${PORT}`)
})
