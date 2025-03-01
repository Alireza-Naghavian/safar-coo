"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import { TextField } from "@/components/atoms/inputFields/TextFields";
import Spinner from "@/components/atoms/Loader/Spinner";
import { SignUpFormValues } from "@/features/auth/auth.t";
import { useSignUpUser } from "@/features/auth/hooks/auth.hook";
import useDisclosure from "@/hooks/useDisclosure";
import { AuthFormProps_T } from "@/types/auth.t";
import { customToast } from "@/utils/CutomToast";
import { signUpValidation } from "@/utils/validators/authValidators";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dislike } from "iconsax-react";
import { useForm } from "react-hook-form";
import EyeFilledIcon from "../../../../public/icons/svgs/EyeFilledIcon";
import EyeSlashFilledIcon from "../../../../public/icons/svgs/EyeSlashFilledIcon";
import AuthFormLayout, { inputStyles } from "./AuthFormLayout";

function SignUpForm({ setFormType, closeModalForm }: AuthFormProps_T) {
  const { isOpen: isVisible, toggle } = useDisclosure();
  const { isSignUpLoading, signUp } = useSignUpUser();
  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors },
    reset
  } = useForm<SignUpFormValues>({ resolver: yupResolver(signUpValidation) });
  const signUpHandler = async (data: SignUpFormValues) => {
    try {
      await signUp({ data });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      customToast({
        title: "خطا در ثبت نام کاربر",
        desc: error,
        icon: Dislike,
        iconColor: "#ef4444",
        className:"text-red-500",
        type:"ERROR"
      });
    } finally {
      reset();
      closeModalForm();
    }
  };

  const TextInputField = (
    label: string,
    type: string,
    name: keyof SignUpFormValues
  ) => {
    return (
      <TextField
        errors={errors}
        touchedFields={touchedFields}
        register={register}
        name={name}
        label={label}
        type={type}
        placeholder=" "
        className={inputStyles.style}
        isClearable={true}
      />
    );
  };
  return (
    <AuthFormLayout
    formType={"signIn"}
    setFormType={setFormType}
      linkContent="ورود"
      qTitle="قبلا ثبت نام کرده اید؟"
      title="فرم ثبت نام"
    >
      <form
        onSubmit={handleSubmit(signUpHandler)}
        className="w-full  sm:mt-12 box-center
      flex-col  md:gap-y-10 sm:gap-y-6 gap-y-5 "
      >
        {TextInputField("نام کاربری", "text", "username")}
        {TextInputField("ایمیل کاربری", "email", "email")}
        <TextField
          errors={errors}
          touchedFields={touchedFields}
          register={register}
          name={"password"}
          label={"رمز عبور"}
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
        <MainBtn
          size="xxl"
          state="hover"
          disabled={isSignUpLoading }
          className={`
            bg-secondary-300 w-full max-w-[240px]
        text-natural-black rounded-8 `}
          variant="fill"
          type="submit"
        >
          {isSignUpLoading ? (
            <Spinner width="w-8" height="h-8" color={"stroke-white"} />
          ) : (
            "ثبت نام"
          )}
        </MainBtn>
      </form>
    </AuthFormLayout>
  );
}

export default SignUpForm;
