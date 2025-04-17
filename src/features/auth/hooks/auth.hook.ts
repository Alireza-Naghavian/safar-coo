import { customErorrToast, customToast } from "@/utils/CutomToast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Like1 } from "iconsax-react";
import { useRouter } from "next/navigation";
import {
  getMeReq,
  logInReq,
  logoutReq,
  resetPasswordReq,
  sendEmailReq,
  signUpReq,
} from "../services/authServices";
import { ResponseData_T } from "../../../types/global.t";
export const useGetMe = () => {
  const { data: userInfo, isPending: isUserLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getMeReq,
    gcTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
  return { userInfo, isUserLoading };
};
export const useSignUpUser = () => {
  const queryClient = useQueryClient();
  const { isPending: isSignUpLoading, mutateAsync: signUp } = useMutation({
    mutationFn: signUpReq,
    onSuccess: (data: ResponseData_T<string>) => {
      customToast({
        title: "موفقیت آمیز",
        desc: data,
        icon: Like1,
        iconColor: "#22c55e",
        className: "text-green-500",
        type: "SUCCESS",
      });
      queryClient.removeQueries({ queryKey: ["user"] });
    },
  });

  return { isSignUpLoading, signUp };
};

export const useLogout = () => {
  const { replace, refresh } = useRouter();
  const queryClient = useQueryClient();
  const { isPending: islogoutLoading, mutateAsync: logout } = useMutation({
    mutationFn: logoutReq,
    onSuccess: (data: ResponseData_T<string>) => {
      customToast({
        title: "موفقیت آمیز",
        desc: data,
        icon: Like1,
        iconColor: "#22c55e",
        className: "text-green-500",
        type: "SUCCESS",
      });
      queryClient.removeQueries({ queryKey: ["user"] });
      refresh();
      replace("/", { scroll: true });
    },
    onError: (err: ResponseData_T<string>) => {
      customErorrToast({
        title: "خطا هنگام خروج",
        desc: err,
      });
    },
  });
  return { islogoutLoading, logout };
};

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const { isPending: isSignInLoading, mutateAsync: signIn } = useMutation({
    mutationFn: logInReq,
    onSuccess: (data: ResponseData_T<string>) => {
      customToast({
        title: "موفقیت آمیز",
        desc: data,
        icon: Like1,
        iconColor: "#22c55e",
        className: "text-green-500",
        type: "SUCCESS",
      });
      queryClient.removeQueries({ queryKey: ["user"] });
    },
  });
  return { signIn, isSignInLoading };
};

export const useSendEmail = () => {
  const { isPending: isEmailSending, mutateAsync: sendEmail } = useMutation({
    mutationFn: sendEmailReq,
    onSuccess: (data: ResponseData_T<string>) => {
      customToast({
        title: "موفقیت آمیز",
        desc: data,
        icon: Like1,
        iconColor: "#22c55e",
        className: "text-green-500",
        type: "SUCCESS",
      });
    },
  });
  return { isEmailSending, sendEmail };
};

export const useResetPassword = () => {
  const queryClient = useQueryClient();
  const { isPending: isResetLoading, mutateAsync: resetPassword } = useMutation(
    {
      mutationFn: resetPasswordReq,
      onSuccess: (data: ResponseData_T<string>) => {
        queryClient.removeQueries({ queryKey: ["user"] });
        customToast({
          title: "موفقیت آمیز",
          desc: data,
          icon: Like1,
          iconColor: "#22c55e",
          className: "text-green-500",
          type: "SUCCESS",
        });
      },
    }
  );
  return { isResetLoading, resetPassword };
};
