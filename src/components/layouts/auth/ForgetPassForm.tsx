"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import { TextField } from "@/components/atoms/inputFields/TextFields";
import Spinner from "@/components/atoms/Loaders/Spinner";
import { useSendEmail } from "@/features/auth/hooks/auth.hook";
import { FormType } from "@/types/auth.t";
import { ResponseData_T, SetState } from "@/types/global.t";
import { customErorrToast } from "@/utils/CutomToast";
import { emailValidation } from "@/utils/validators/authValidators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AuthFormLayout, { inputStyles } from "./AuthFormLayout";

function ForgetPassForm({
  setFormType,
  closeModalForm,
}: {
  setFormType: SetState<FormType>;
  closeModalForm: () => void;
}) {
  const { isEmailSending, sendEmail } = useSendEmail();
  const {
    register,
    formState: { errors, touchedFields },
    handleSubmit,
    reset,
  } = useForm<{ email: string }>({ resolver: yupResolver(emailValidation) });
  const submitHandler = async (data: { email: string }) => {
    try {
      await sendEmail(data);
    } catch (err: unknown) {
      customErorrToast({
        title: "خطا هنگام ارسال ایمیل بازنشانی",
        desc: err as ResponseData_T<string>,
      });
    } finally {
      reset();
      closeModalForm();
      setFormType("signIn");
    }
  };
  return (
    <AuthFormLayout
      title="بازگردانی کلمه عبور"
      formType={null}
      linkContent={null}
      qTitle={null}
    >
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col w-full gap-y-12"
      >
        <p className="text-bodyB3semi text-center w-full max-w-[260px] mx-auto mt-12">
          لطفا ایمیلی که با آن ثبت نام کرده اید را وارد کنید
        </p>
        <TextField
          type="email"
          name="email"
          errors={errors}
          register={register}
          touchedFields={touchedFields}
          placeholder=" "
          label="ایمیل کاربری"
          isInvalid={false}
          className={inputStyles.style}
          isClearable={true}
        />
        <MainBtn
          type="submit"
          variant="fill"
          size="xxl"
          state="hover"
          className="bg-secondary-300 max-w-[50%] !px-16 mx-auto rounded-8"
        >
          {isEmailSending ? (
            <Spinner width="w-8" height="h-8" color={"stroke-white"} />
          ) : (
            "ادامه"
          )}
        </MainBtn>
      </form>
    </AuthFormLayout>
  );
}

export default ForgetPassForm;
