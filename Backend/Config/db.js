import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jadhavvaishnavivj185:Vaishu185@cluster0.gl6ja.mongodb.net/resto-web').then(()=>console.log("DB Connected"));
}