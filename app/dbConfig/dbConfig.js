import mongoose from "mongoose";

export async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection

        // Check Connection success or not => Event listen
        connection.on('connected', ()=>{
            console.log("MongoDb Connection SuccessFull!!");
            
        })

        connection.on('error', (err)=>{
            console.log("MongoDb Connection ERROR : " + err);
            process.exit()
        })

    } catch (error) {
        console.log("Something Went Wrong in Connecting to Database!!");
        console.log(error);
    }
}

