//const mongoose=require("mongoose");

import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    title: { type: String, required: true, unique: true},
    isCompleted: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false},
    createdAt: { type: Date, default: Date.now },
});

//module.exports=mongoose.model("todo",todoSchema);
//export default mongoose.model("todo",todoSchema);
//export default todoModel =mongoose.model("todo",todoSchema);
export default mongoose.model("todo",todoSchema);