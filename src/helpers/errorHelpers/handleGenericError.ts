import { TErrorIssue, TErrorResponse } from "../../types/TErrorResponse";

const handleGenericError=(err: Error):TErrorResponse=>{
 
    const issues:TErrorIssue[]=[

        {
        path:"",
        message:err.message
        }
    ]

    return {
        statusCode:400,
        status:'error',
        message:'Unknown Error',
        issues,
    }

}
export default handleGenericError;