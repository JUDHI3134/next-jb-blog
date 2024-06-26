import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://judhistirbehera532:9090161171@cluster0.y6vjbdu.mongodb.net/blog-app')
    console.log("DB Connected");
}