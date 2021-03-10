require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const URL = process.env.DATABASE_URL

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

// DATABASE
mongoose.connect(
    URL, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected!')
});
 


// ROUTER
app.use(express.json())
const todosRouter = require('./router/todos')
app.use('/todos', todosRouter)

// ========== FOOTER ==========
app.listen(3000, () => console.log("Listening on port 3000"))
