import { connectDB } from "@/app/dbConfig/dbConfig";
import FeedBack from "../../../models/InterviewQuestionAnswerFeedbackModel";
import moment from 'moment/moment'

// Now I am connect with Database..
connectDB()

// Post Request method

export async function POST(request){
    try {
        const reqBody = await request.json();

        const {
            mockidRef,
            question,
            correctAns,
            userAns,
            feedBack,
            rating,
            userEmail,
            createdAt
        } = reqBody

        const ExistFeedback = await FeedBack.findOne({mockidRef})
        if(ExistFeedback){
            const result = await FeedBack.updateOne(
                { mockidRef },
                {
                  $push: {
                    questionAnswerFeedback: { question, correctAns, userAns, feedBack, rating },
                  },
                },
            )

            if(result.modifiedCount>0){
                return Response.json({
                    message : "Successfull Add FeedBack!!",
                    success : true,
                    feedbackview : result
                })
            }
            else{
                return Response.json({error : "Failed to Add Question"},{status:500})
            }
        }
        else{
            const newFeedBackEntry = new FeedBack({
                mockidRef,
                questionAnswerFeedback : [{question, correctAns, userAns, feedBack, rating}],
                userEmail,
                createdAt
            }) 
            
            const savedFeedBack = await newFeedBackEntry.save()
            console.log(savedFeedBack);
            
            return Response.json({
                message : "Successfull Saved FeedBack!!",
                success : true,
                feedbackview : savedFeedBack
            })
        }
            

    } catch (error) {
        return Response.json({error : error},{status:500})
    }
}