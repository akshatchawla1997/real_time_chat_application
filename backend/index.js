const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const router = require('./routes/routes');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/api/v1/users', router); // Add a forward slash before 'api/v1/users'

app.get('/', (request, response) => {
    response.json({
        message: 'Works',
    });
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
