const PORT = process.env.PORT
const express = require('express')
const path = require('path')
const loginRoute = require('./routes/signin')

const app = express();
app.set('view engine', 'ejs');

const staticPath = path.join(__dirname, 'public')
const dynamicPath = path.join(__dirname, 'bin')

app.use(express.static(staticPath))
app.use(express.static(dynamicPath))

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/login', loginRoute, (req, res) => {
    res.render('login')
})

app.listen(PORT, (req, res) => {
    console.log(`app running on port: ${PORT}`)
})
