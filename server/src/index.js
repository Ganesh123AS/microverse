const express = require("express");
const app = express ();
require('dotenv').config()
const port = 4000
const cors = require('cors')
const bodyParser = require('body-parser')
const connect = require('./db/connect')
const users = require("../src/models/users")
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter')
// const Router = require("./routes")z

connect()

app.use(cors())
app.use(bodyParser.json())
app.use(registerRouter)
app.use(loginRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



