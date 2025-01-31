    
// require dependancies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const connectDB = require('./config/db');
const formRoutes = require('./routes/FormRoutes');

connectDB(); // Connect to MongoDB

const app = express();
app.use(cors()); // Allow requests from frontend
app.use(bodyParser.json()); // Parse JSON data
app.use('/api/form', formRoutes); // Use form routes

const PORT = process.env.PORT || 5000; // Use environment PORT or 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
