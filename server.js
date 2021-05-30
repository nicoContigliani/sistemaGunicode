const express = require('express')
const app = express()
const cors = require("cors");





app.use(express.urlencoded({extended:false}));
app.use(express.json());

const port = 3000

app.use('/',require('./routes'));

app.listen(port, () => console.log(`coorriendo por el internet`))