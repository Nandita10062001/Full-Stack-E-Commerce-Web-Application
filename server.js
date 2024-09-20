import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

//configure dotenv
dotenv.config();

//rest object to create apis
const app = express();

// rest api create
app.get('/', (req, res) => {
    res.send('<h1>Welcome to my E-Commerce Application</h1>');
} );

//PORT
const PORT = process.env.PORT || 8080;

//run the app
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});