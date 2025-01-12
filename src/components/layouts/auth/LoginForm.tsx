"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import { TextField } from "@/components/atoms/inputFields/TextFields";
import useDisclosure from "@/hooks/useDisclosure";
import { AuthFormProps_T } from "@/types/auth.t";
import EyeFilledIcon from "../../../../public/icons/svgs/EyeFilledIcon";
import EyeSlashFilledIcon from "../../../../public/icons/svgs/EyeSlashFilledIcon";
import AuthFormLayout, { inputStyles } from "./AuthFormLayout";
function LoginForm({toggleSignUp}:AuthFormProps_T) {
    const {isOpen:isVisible,toggle} = useDisclosure()
  return (
    <AuthFormLayout
    toggleSignUp={toggleSignUp}
      linkContent="ایجاد حساب"
      qTitle="حساب کاربری ندارید؟"
      title="ورود به حساب کاربری"
    >
      <form className="w-full  sm:mt-12 box-center flex-col  md:gap-y-10 gap-y-6 ">
       <TextField
       label={"ایمیل کاربری"}
       isInvalid={false}
       type="email"
       placeholder=" "
       className={inputStyles.style}
        isClearable={true}

       />
       <TextField
       label={"رمز عبور"}
       isInvalid={false}
       type={isVisible ? "text" : "password"}
       placeholder=" "
    //    description={"رمز عبور باید شامل 8 کاراکتر و شامل حروف، اعداد و نمادها باشد."}
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
      <button className="ml-auto sm:-mt-6 -mt-2 mr-[3px] text-sm tracking-tighter ">فراموشی رمز عبور</button>
    <MainBtn 
    size="xxl"
     state="hover"
      className="bg-secondary-300 w-full max-w-[240px]
     text-natural-black rounded-8" variant="fill">ورود</MainBtn>
      </form>
    </AuthFormLayout>
  );
}

export default LoginForm;
