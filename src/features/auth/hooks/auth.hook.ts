import { customToast } from "@/utils/CutomToast";
import { useMutation } from "@tanstack/react-query";
import { Like1 } from "iconsax-react";
import { logInReq, logoutReq, signUpReq } from "../services/authServices";
import { ResponseData_T } from "./../../../types/global.t";
import { useRouter } from "next/navigation";

export const useSignUpUser = () => {
  const { isPending: isSignUpLoading, mutateAsync: signUp } = useMutation({
    mutationFn: signUpReq,
    onSuccess: (data: ResponseData_T<string>) => {
      customToast({
        title: "موفقیت آمیز",
        desc: data,
        icon: Like1,
        iconColor: "#22c55e",
        className: "text-green-500",
        type:"SUCCESS"
      });
    },
  });

  return { isSignUpLoading, signUp };
};

export const useLogout = ()=>{
  const {replace} = useRouter();
  const {isPending:islogoutLoading,mutateAsync:logout} = useMutation({
    mutationFn:logoutReq,
    onSuccess:(data: ResponseData_T<string>)=>{
      customToast({
        title: "موفقیت آمیز",
        desc: data,
        icon: Like1,
        iconColor: "#22c55e",
        className: "text-green-500",
        type:"SUCCESS"
      })
      replace("/",{scroll:true})
    },
    onError:(err:ResponseData_T<string>)=>{
      customToast({
        title: "خطا هنگام خروج",
        desc: err,
        icon: Like1,
        iconColor: "#ef4444",
        className: "text-red-500",
        type:"ERROR"
      });
    }
  })
  return {islogoutLoading,logout}
}

export const useSignIn = ()=>{
  const {isPending:isSignInLoading,mutateAsync:signIn} =useMutation({
    mutationFn:logInReq,
    onSuccess:(data: ResponseData_T<string>)=>{
      customToast({
        title: "موفقیت آمیز",
        desc: data,
        icon: Like1,
        iconColor: "#22c55e",
        className: "text-green-500",
        type:"SUCCESS"
      })
    },
  })
  return {signIn,isSignInLoading}
}