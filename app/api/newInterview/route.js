import { connectDB } from "@/app/dbConfig/dbConfig";
import Interview from "@/app/models/InterviewModel";
import moment from 'moment/moment'
import { v4 as uuidv4 } from 'uuid';

// Now I am connect with Database..
connectDB()

// Post Request method

export async function POST(request){
    try {
        // Request body also take time as nextjs run in edge time
        const reqBody = await request.json();
        const {
            jobTitle,
            jobDesc,
            jobExperience,
            jsonResponse
        } = reqBody;

        console.log(reqBody);

        const newInterviewEntry = new Interview({
            mockid : uuidv4(),
            jobTitle,
            jobDesc,
            jobExperience,
            jsonResponse,
            createdBy : "Debraj",
            createdAt : moment().format('DD-MM-yyyy').toString()
        })

        const savedInterview = await newInterviewEntry.save()

        return Response.json({
            message : "Successfull Save Information!!",
            success : true,
            mockId : savedInterview._id
        })

    } catch (error) {
        return Response.json({error : error.message},{status:500})
    }
}