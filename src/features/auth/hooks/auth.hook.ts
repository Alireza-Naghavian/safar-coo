import { customToast } from "@/utils/CutomToast";
import { useMutation } from "@tanstack/react-query";
import { Like1 } from "iconsax-react";
import { signUpReq } from "../services/authServices";
import { ResponseData_T } from "./../../../types/global.t";

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
