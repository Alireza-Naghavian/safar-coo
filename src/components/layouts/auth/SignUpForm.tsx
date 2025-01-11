"use client"
import AuthFormLayout, { inputStyles } from '@/app/auth/layout'
import MainBtn from '@/components/atoms/buttons&links/MainBtn'
import { TextField } from '@/components/atoms/inputFields/TextFields'
import useDisclosure from '@/hooks/useDisclosure'
import { AuthFormProps_T } from '@/types/auth.t'
import EyeFilledIcon from '../../../../public/icons/svgs/EyeFilledIcon'
import EyeSlashFilledIcon from '../../../../public/icons/svgs/EyeSlashFilledIcon'
function SignUpForm({toggleSignUp}:AuthFormProps_T) {
  const {isOpen:isVisible,toggle} = useDisclosure()
  return (
    <AuthFormLayout
    toggleSignUp={toggleSignUp}
      linkContent="ورود"
      qTitle="قبلا ثبت نام کرده اید؟"
      title="فرم ثبت نام"
    >
      <form className="w-full  sm:mt-12 box-center flex-col  md:gap-y-10 sm:gap-y-6 gap-y-5 ">
       <TextField
       label={"نام کاربری"}
       isInvalid={false}
       type="text"
       placeholder=" "
       className={inputStyles.style}
        isClearable={true}
       />
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

    <MainBtn 
    size="xxl"
     state="hover"
      className="bg-secondary-300 w-full max-w-[240px]
     text-natural-black rounded-8" variant="fill">ثبت  نام</MainBtn>
      </form>
    </AuthFormLayout>
  )
}

export default SignUpForm