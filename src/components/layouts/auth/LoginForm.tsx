"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import { TextField } from "@/components/atoms/inputFields/TextFields";
import useDisclosure from "@/hooks/useDisclosure";
import { AuthFormProps_T } from "@/types/auth.t";
import EyeFilledIcon from "../../../../public/icons/svgs/EyeFilledIcon";
import EyeSlashFilledIcon from "../../../../public/icons/svgs/EyeSlashFilledIcon";
import AuthFormLayout, { inputStyles } from "./AuthFormLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInFormValues } from "@/features/auth/auth.t";
import { useSignIn } from "@/features/auth/hooks/auth.hook";
import { Dislike } from "iconsax-react";
import { customToast } from "@/utils/CutomToast";
import Spinner from "@/components/atoms/Loader/Spinner";
import { signInValidation } from "@/utils/validators/authValidators";
import { ResponseData_T } from "@/types/global.t";
function LoginForm({ closeModalForm,setFormType }: AuthFormProps_T) {
  const { isOpen: isVisible, toggle } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset
  } = useForm<SignInFormValues>({ resolver: yupResolver(signInValidation)});
  const {isSignInLoading,signIn}= useSignIn();

  const signInHandler = async(data: SignInFormValues) => {
    try {
      await signIn({data})
        
    } catch (error:unknown) {
          customToast({
              title: "خطا در ورود کاربر",
              desc: error as ResponseData_T<string>,
              icon: Dislike,
              iconColor: "#ef4444",
              className:"text-red-500",
              type:"ERROR"
            });
    }finally{
      reset();
      closeModalForm();
    }
  };
  return (
    <AuthFormLayout
      setFormType={setFormType}
      formType={"signUp"}
      linkContent="ایجاد حساب"
      qTitle="حساب کاربری ندارید؟"
      title="ورود به حساب کاربری"
    >
      <form
        onSubmit={handleSubmit(signInHandler)}
        className="w-full  sm:mt-12 box-center flex-col  md:gap-y-10 gap-y-6 "
      >
        <TextField
          register={register}
          name="email"
          errors={errors}
          touchedFields={touchedFields}
          label={"ایمیل کاربری"}
          isInvalid={false}
          type="email"
          placeholder=" "
          className={inputStyles.style}
          isClearable={true}
        />
        <TextField
          name="password"
          register={register}
          errors={errors}
          touchedFields={touchedFields}
          label={"رمز عبور"}
          isInvalid={false}
          type={isVisible ? "text" : "password"}
          placeholder=" "
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              onClick={toggle}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          className={inputStyles.style}
          isClearable={false}
        />
        {/* forget password */}
        <button type="button" onClick={()=>setFormType("forgetPassword")} className="ml-auto sm:-mt-6 -mt-2 mr-[3px] text-sm tracking-tighter ">
          فراموشی رمز عبور
        </button>
        <MainBtn
          size="xxl"
          type="submit"
          disabled={isSignInLoading}
          state="hover"
          className="bg-secondary-300 w-full max-w-[240px]
        text-natural-black rounded-8"
          variant="fill">
       {isSignInLoading ? (
            <Spinner width="w-8" height="h-8" color={"stroke-white"} />
          ) : (
            "ورود"
          )}
        </MainBtn>
      </form>
    </AuthFormLayout>
  );
}

export default LoginForm;
