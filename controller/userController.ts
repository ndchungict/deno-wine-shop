import { Context, Status } from "https://deno.land/x/oak/mod.ts";
import { saveUser, selectUserByPhone } from "../repository/userRepo.ts";
import { BaseResponse } from "../common/baseResponse.ts";
import { cryptPassword, verifyPassword } from "../utility/crypt.ts";

export const signInHandler = async (context: Context) => {
  const reqData = await context.request.body.json();

  const user = await selectUserByPhone(reqData);
  if (!user) {
    return BaseResponse(context, Status.Conflict, {
      status: Status.Unauthorized,
      message: "Invalid phone!",
    });
  } else if (!verifyPassword(reqData.password, user.password)) {
    return BaseResponse(context, Status.Conflict, {
      status: Status.Unauthorized,
      message: "Invalid password!",
    });
  } else {
    return BaseResponse(context, Status.Conflict, {
      status: Status.OK,
      message: "Login successfully!",
    });
  }
};

export const signUpHandler = async (context: Context) => {
  const reqData = await context.request.body.json();

  const user = await selectUserByPhone(reqData.phone);
  if (user) {
    return BaseResponse(context, Status.Conflict, {
      status: Status.Conflict,
      message: "Existed User!",
    });
  } else {
    reqData.password = cryptPassword(reqData.password);
    await saveUser(reqData);
    return BaseResponse(context, Status.OK, {
      status: Status.OK,
      message: "Sign Up successful!",
      id: reqData._id,
      displayName: reqData.displayName,
      avatar: reqData.avatar,
      phone: reqData.phone,
    });
  }
};
