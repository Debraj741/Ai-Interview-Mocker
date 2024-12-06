import mongoose from "mongoose";

const QuestionAnswerFeedbackSchema = new mongoose.Schema({
    question : String,
    correctAns : String,
    userAns : String,
    feedBack : String,
    rating : String,
})

const feedbackSchema = new mongoose.Schema({
    mockidRef : {
        type : String,
        unique : true
    },
    questionAnswerFeedback: [QuestionAnswerFeedbackSchema],
    userEmail : String,
    createdAt : {
        type : String,
        default : Date.now.toString()
    }
})

const FeedBack = mongoose.models.feedbacks || mongoose.model("feedbacks",feedbackSchema)

export default FeedBack