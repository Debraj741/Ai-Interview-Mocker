import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    mockid : String,
    jobTitle : String,
    jobDesc : String,
    jobExperience : String,
    createdBy : String,
    createdAt : String,
    jsonResponse : String
})

const Interview = mongoose.models.interviews || mongoose.model("interviews",userSchema)

export default Interview