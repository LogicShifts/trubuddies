import mongoose from "mongoose";


// export async function connect() {
//     try{
//         mongoose.connect(process.env.MONGO_URI!);
//         const connection = await mongoose.connection;
//         connection.on('connected', () =>{
//             console.log('Connected to Mongoose');
//         });
//         connection.on('error', (err) =>{
//             console.log('Error connecting to Mongoose - ' + err.message);
//             process.exit();
//         });
//     }
//     catch(err){
//         console.log(err);
//     }
// }

export async function connect() {
    try {
        // Check if mongoose instance is in disconnected state
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGO_URI!);
        }

        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('Connected to Mongoose');
        });
        connection.on('error', (err) => {
            console.log('Error connecting to Mongoose - ' + err.message);
            process.exit();
        });
    } catch (err) {
        console.log(err);
    }
}
