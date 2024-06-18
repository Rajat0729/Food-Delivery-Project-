import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rakshitpaliwaal0409:1234Rajat5678@cluster0.rsatbx7.mongodb.net/Food-Delivery').then(()=>console.log("DataBase Connected...."));
}

