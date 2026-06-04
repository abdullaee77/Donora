import mongoose from "mongoose";
import { Rubik_Maze } from "next/font/google";
const {Schema,model}=mongoose;

const paymentSchema= new Schema({
    name:{type:String,required: true},
    to_user:{type:String,required: true},
    oid:{type:String,required: true},
    message:{type:String},
    amount:{type:Number,required: true},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date,default:Date.now},
    done:{type:Boolean,required: true},
  

})

export default mongoose.models.Payment ||model("Payment",paymentSchema);