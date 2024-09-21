import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connect_db from './config/db.js';
import authRoutes from './routes/auth_route.js';

//configure dotenv
dotenv.config();

//database config
connect_db();

//rest object to create apis
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/v1/auth', authRoutes);

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