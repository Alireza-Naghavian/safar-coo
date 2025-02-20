import app from "@/services/services";
import { SignUpFormValues } from "../auth.t";
import { ResponseData_T } from "@/types/global.t";

export const signUpReq = async({data}:{data:SignUpFormValues}):Promise<ResponseData_T<string>>=>{
    return app.post("/auth/signup",data).then(({data})=>data)
}