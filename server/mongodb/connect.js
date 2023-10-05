import mongoose from "mongoose";
const connectDB = async(url)=>{
    mongoose.set('strictQuery', true);
    const { connection } = await mongoose.connect(url);
    console.log(`MongoDB Connected with ${connection.host}`);
   
}
export default connectDB;
