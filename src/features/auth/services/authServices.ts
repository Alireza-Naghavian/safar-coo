import app from "@/services/services";
import { ResetPasswordReqBody, SignInFormValues, SignUpFormValues } from "../auth.t";
import { ResponseData_T } from "@/types/global.t";
import { User_T } from "@/features/user-panel/user-panel.t";

export const signUpReq = async({data}:{data:SignUpFormValues}):Promise<ResponseData_T<string>>=>{
    return app.post("/auth/signup",data).then(({data})=>data)
}

export const logoutReq = async ():Promise<ResponseData_T<string>>=>{
    return app.post("/auth/logout").then(({data})=>data)
}
export const logInReq = async ({data}:{data:SignInFormValues}):Promise<ResponseData_T<string>>=>{
    return app.post("/auth/signin",data).then(({data})=>data)
}

export const getMeReq = async ():Promise<User_T>=>{
    return app.get("/auth/getMe").then(({data})=>data)
}
export const sendEmailReq = async (data:{email:string}):Promise<ResponseData_T<string>>=>{
    return app.post("/auth/request-reset",data).then(({data})=>data)
}
export const resetPasswordReq = async (data:ResetPasswordReqBody):Promise<ResponseData_T<string>>=>{
    return app.post("/auth/reset-password",data).then(({data})=>data)
}