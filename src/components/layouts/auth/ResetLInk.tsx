"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import { TextField } from "@/components/atoms/inputFields/TextFields";
import Spinner from "@/components/atoms/Loaders/Spinner";
import AuthFormLayout, {
  inputStyles,
} from "@/components/layouts/auth/AuthFormLayout";
import ClientLayout from "@/components/layouts/ClientLayout";
import { ResponseData_T } from "@/types/global.t";
import { customErorrToast } from "@/utils/CutomToast";
import { newPassValidation } from "@/utils/validators/authValidators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { ResetPasswordValues } from "../../../features/auth/auth.t";
import { useResetPassword } from "../../../features/auth/hooks/auth.hook";

function ResetLink() {
  const params = useSearchParams();
  const token = params.get("token") as string;
  const email = params.get("email") as string;
  const { isResetLoading, resetPassword } = useResetPassword();
  const { replace } = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({ resolver: yupResolver(newPassValidation) });
  const resetPassHandler = async (data: ResetPasswordValues) => {
    try {
      await resetPassword(
        { ...data, token, email },
        {
          onSuccess: () => {
            replace("/", { scroll: true });
          },
        }
      );
    } catch (error: unknown) {
      customErorrToast({
        title: "خطا در ثبت نام کاربر",
        desc: error as ResponseData_T<string>,
      });
    } finally {
      reset();
    }
  };
  return (
    <ClientLayout>
      <main
        className="max-w-[1920px] relative mx-auto 
        overflow-x-hidden min-h-screen  "
      >
        <div className="md:px-[113px] relative px-5">
          <div className="mt-16 w-full max-w-[410px] border-1 mx-auto rounded-8 shadow-md">
            <AuthFormLayout
              formType={"resetPassword"}
              title="رمز عبور جدید"
              linkContent={null}
              qTitle={null}
            >
              <form
                onSubmit={handleSubmit(resetPassHandler)}
                className="w-full flex flex-col gap-y-8 mt-12 px-8 py-6"
              >
                <TextField
                  name="newPassword"
                  register={register}
                  errors={errors}
                  touchedFields={touchedFields}
                  placeholder=" "
                  label={"کلمه عبور جدید"}
                  isClearable
                  isInvalid={false}
                  className={inputStyles.style}
                />
                <TextField
                  isInvalid={false}
                  isClearable
                  name="confirmPassword"
                  register={register}
                  errors={errors}
                  touchedFields={touchedFields}
                  placeholder=" "
                  label={"تکرار کلمه عبور"}
                  className={inputStyles.style}
                />
                <MainBtn
                  type="submit"
                  variant="fill"
                  size="xxl"
                  className="bg-primary-300  rounded-8 w-[80%] mx-auto"
                  state="normal"
                >
                  {isResetLoading ? (
                    <Spinner width="w-8" height="h-8" color={"stroke-white"} />
                  ) : (
                    "تایید"
                  )}
                </MainBtn>
              </form>
            </AuthFormLayout>
          </div>
        </div>
      </main>
    </ClientLayout>
  );
}

export default ResetLink;
