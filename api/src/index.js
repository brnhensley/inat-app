require('dotenv').config();
const cors = require('cors');
const inatAPIRouter = require('./routes/inat');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use("/inat", inatAPIRouter.helloWorld());

app.listen(process.env.SERVER_PORT, () => { console.log(`Server Running on ${process.env.SERVER_PORT}`); });