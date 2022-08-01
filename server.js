const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

//middleware
app.use(express.static(`${__dirname}/client/build`))

// Test route
app.get('/restaurants', (req, res) => {
  res.send('I have hit the root route')
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`I am currently running at Port:`, PORT)
})
