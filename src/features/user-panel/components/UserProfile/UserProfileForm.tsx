"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import { TextField } from "@/components/atoms/inputFields/TextFields";
import Spinner from "@/components/atoms/Loaders/Spinner";
import Skeleton_sample from "@/components/atoms/skeltons/SkeltonSample";
import { useGetMe } from "@/features/auth/hooks/auth.hook";
import { ClassName_T, ResponseData_T } from "@/types/global.t";
import { customErorrToast } from "@/utils/CutomToast";
import { editProfileValidation } from "@/utils/validators/authValidators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useEditUserProfile } from "../../hooks/user.hook";
import { EditProfile_T, User_T } from "../../user-panel.t";

function UserProfileForm() {
  const { isUserLoading, userInfo } = useGetMe();
  return (
    <div className="sm:px-11 px-4 py-4 ">
      <div
        className="flex  flex-col sm:flex-row w-full
        h-full items-start my-6 sm:my-12 sm:gap-y-0 gap-y-12"
      >
        <CustomUserProfileForm
          userInfo={userInfo}
          isLoading={isUserLoading}
          state="readOnly"
          className="sm:border-l border-b sm:border-b-0 sm:pb-0 pb-8 sm:pl-4 border-natural-gray1  "
        />
        <CustomUserProfileForm
          userInfo={userInfo}
          isLoading={isUserLoading}
          state="editForm"
          className="sm:pr-4 sm:pt-0 pt-2 "
        />
      </div>
    </div>
  );
}

type UserProfileForm_T = ClassName_T & {
  state: "readOnly" | "editForm";
  userInfo: User_T;
  isLoading: boolean;
};
const CustomUserProfileForm = ({
  state,
  className,
  userInfo,
  isLoading,
}: UserProfileForm_T) => {
  const { editProfile, isEditLoading } = useEditUserProfile();

  const {
    register,
    formState: { errors, touchedFields },
    handleSubmit,
    reset,
  } = useForm<EditProfile_T>({
    defaultValues: {
      newUsername: userInfo?.username as string,
    },
    resolver: yupResolver(editProfileValidation),
  });

  // set default value in first render
  useEffect(() => {
    reset({
      newUsername: userInfo?.username,
    });
  }, [reset, userInfo]);

  // submit new userInfo
  const editProfileHandler = async (data: EditProfile_T) => {
    try {
      await editProfile({ ...data, email: userInfo?.email as string });
    } catch (error: unknown) {
      customErorrToast({
        title: "خطا در  بروزرسانی اطلاعات",
        desc: error as ResponseData_T<string>,
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(editProfileHandler)}
      className={`sm:w-1/2 w-full flex flex-col gap-y-8 ${className}`}
    >
      {isLoading ? (
        <Skeleton_sample count={3}>
          <Skeleton_sample.Item
            backgroundColor="bg-natural-gray2"
            height="h-[41px]"
            className=" gap-2 py-2 px-3 text-sm flex items-center  font-YekanSemi justify-center"
            animated="background"
            width="w-full"
          ></Skeleton_sample.Item>
        </Skeleton_sample>
      ) : (
        <>
          <TextField
            register={register}
            errors={errors}
            touchedFields={touchedFields}
            placeholder={" "}
            label={"نام کاربری"}
            isClearable={state !== "readOnly"}
            name={"newUsername"}
            type="text"
            readOnly={state === "readOnly"}
          />
          {state === "readOnly" && (
            <TextField
              register={register}
              errors={errors}
              touchedFields={touchedFields}
              placeholder={" "}
              label={"ایمیل"}
              isClearable={state !== "readOnly"}
              name={"email"}
              value={userInfo?.email}
              type="email"
              readOnly
            />
          )}
          {state === "editForm" && (
            <TextField
              register={register}
              errors={errors}
              touchedFields={touchedFields}
              placeholder={" "}
              label={"کلمه عبور"}
              isClearable
              name={"newPassword"}
              type="text"
            />
          )}
        </>
      )}
      {state === "editForm" && (
        <MainBtn
          variant="fill"
          type="submit"
          disabled={isEditLoading}
          size="xl"
          className="rounded-8 w-full max-w-[121px]  mr-auto bg-secondary-300"
          state="hover"
        >
          {isEditLoading ? (
            <Spinner width="w-8" height="h-8" color={"stroke-white"} />
          ) : (
            "ذخیره تغییرات"
          )}
        </MainBtn>
      )}
    </form>
  );
};
export default UserProfileForm;
