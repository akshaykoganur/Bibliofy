const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const dbconfig = require('./config/dbconfig');
app.use(express.json());
const userRoute = require('./routes/userRoute');
const displayData = require('./routes/displayData');
const OrderData = require('./routes/OrderData');

app.use('/api/user', userRoute);
app.use('/api', displayData);
app.use('/api', OrderData);

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));