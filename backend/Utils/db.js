import mongoose from "mongoose";


const DbCon = async()=>{
    try {
        await mongoose.connect('mongodb+srv://mydatabase:YoNCBQbpxY3SGMm6@cluster0.5lad2.mongodb.net/RBAC?retryWrites=true&w=majority&appName=Cluster0')
        console.log("MongoDB is connected")
    } catch (error) {
        console.log(error)
    }
}

export default DbCon
