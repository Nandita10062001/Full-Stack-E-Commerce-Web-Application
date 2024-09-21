import mongoose, { mongo } from 'mongoose';
import colors from 'colors';

const connect_db = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB Database ${conn.connection.host}`.bgMagenta.white);
    } catch (error){
        console.log(`Error in MongoDB ${error}`.bgRed.white);
    }
};

export default connect_db;