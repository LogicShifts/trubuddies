import mongoose from "mongoose";


export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = await mongoose.connection;
        connection.on('connected', () =>{
            console.log('Connected to Mongoose');
        });
        connection.on('error', (err) =>{
            console.log('Error connecting to Mongoose - ' + err.message);
            process.exit();
        });
    }
    catch(err){
        console.log(err);
    }
}
