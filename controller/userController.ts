import { Context , Status} from "https://deno.land/x/oak/mod.ts";
import {saveUser,selectUserByPhone} from "../repository/userRepo.ts";
import {BaseResponse} from "../helper/baseResponse.ts";


export const signInHandler = async (context: Context) => {
    context.response.status = Status.Conflict;
}

export const signUpHandler = async (context: Context) => {

    const reqData = await context.request.body.json();

    const user = await selectUserByPhone(reqData.phone)
    if(user){
        return BaseResponse(context,Status.Conflict, {
            status: Status.Conflict,
            message: "Existed User!"
        });
    }else {
        await saveUser(reqData)
        return BaseResponse(context,Status.OK,{
            status: Status.OK,
            message: "Sign Up successful!",
            id: reqData._id,
            displayName: reqData.displayName,
            avatar: reqData.avatar,
            phone: reqData.phone
        });
    }
}
