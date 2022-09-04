const express = require('express');
const mysql = require('mysql');
const route = require('./routes/route');
const cors = require('cors');

const app = express();
app.use(cors());


// Create a MySQL pool

app.listen(5000);

// Export the pool

app.use("/api",route);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));