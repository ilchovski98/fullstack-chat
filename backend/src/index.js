const express = require('express')
const app = express()
const cors = require('cors')

// Middlewares
app.use(express.json()) //req.body
app.use(cors());

// Routes
app.use('/auth', require('./routes/jwtAuth'))

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});