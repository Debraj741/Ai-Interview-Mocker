import { connectDB } from "@/app/dbConfig/dbConfig";
import FeedBack from "../../../models/InterviewQuestionAnswerFeedbackModel";

// Now I am connect with Database..
connectDB()

// Post Request method

export async function POST(request){
    try {
        const {mockidRef} = await request.json();
        const ExistFeedback = await FeedBack.findOne({mockidRef})
        if(ExistFeedback){
            return Response.json({
                message : "Successfull Add FeedBack!!",
                success : true,
                feedbackResult : ExistFeedback
            })
        }
        else{
            return Response.json({error : "Failed to Fetch Interview Feedback Details"},{status:500})
        }
    } catch (error) {
        return Response.json({error : error},{status:500})
    }
}