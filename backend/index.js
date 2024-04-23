const express  = require('express')
const app = express()
const cors = require('cors')
const morgan = require("morgan");
// const swagger = require("./swagger");
const bodyParser = require("body-parser");
const route = require('./routes/routes')

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined'));
app.use('api/v1/users',route);

app.get('/', (request, response) => {
    response.json({
      message: 'Works',
    });
  });


const port = process.env.PORT || 5000

app.listen(port, (req, res)=>{
    console.log(`Server is running on ${port}`)
})