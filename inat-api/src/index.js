const express = require('express');
require('dotenv').config();
const cors = require('cors');

const router = require('./routes/router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/api', router);

app.listen(process.env.SERVER_PORT, () => { console.log(`Server Running on ${process.env.SERVER_PORT}`); });