import app from "@/services/services";
import { SignInFormValues, SignUpFormValues } from "../auth.t";
import { ResponseData_T } from "@/types/global.t";

export const signUpReq = async({data}:{data:SignUpFormValues}):Promise<ResponseData_T<string>>=>{
    return app.post("/auth/signup",data).then(({data})=>data)
}

export const logoutReq = async ():Promise<ResponseData_T<string>>=>{
    return app.post("/auth/logout").then(({data})=>data)
}
export const logInReq = async ({data}:{data:SignInFormValues}):Promise<ResponseData_T<string>>=>{
    return app.post("/auth/signin",data).then(({data})=>data)
}