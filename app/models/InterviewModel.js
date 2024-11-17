import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    mockid : {
        type : String,
        unique : true
    },
    jobTitle : String,
    jobDesc : String,
    jobExperience : String,
    createdBy : {
        type : String,
        default : "Unknown"
    },
    createdAt : {
        type : String,
        default : Date.now.toString()
    },
    jsonResponse : String
})

const Interview = mongoose.models.interviews || mongoose.model("interviews",userSchema)

export default Interview