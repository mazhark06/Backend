import mongoose from "mongoose";

let  db = async  () => {
   try {
    await mongoose.connect(`${process.env.DATABSE_URL}`)
    console.log("DB is connected");
    
   } catch (error) {
    console.log('Error on DB connection' , error);
    process.exit(1)
    
   }
}
export default db