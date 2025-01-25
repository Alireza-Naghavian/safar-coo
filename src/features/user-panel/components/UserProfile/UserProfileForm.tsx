"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import { TextField } from "@/components/atoms/inputFields/TextFields";
import { ClassName_T } from "@/types/global.t";
import React from "react";

function UserProfileForm() {
  return (
    <div className="sm:px-11 px-4 py-4 ">
      <div className="flex  flex-col sm:flex-row w-full
        h-full items-start my-6 sm:my-12 sm:gap-y-0 gap-y-12">
        <CustomUserProfileForm
          state="readOnly"
          className="sm:border-l border-b sm:border-b-0 sm:pb-0 pb-8 sm:pl-4 border-natural-gray1  "
        />
        <CustomUserProfileForm state="editForm" className="sm:pr-4 sm:pt-0 pt-2 " />
      </div>
    </div>
  );
}

type UserProfileForm_T = ClassName_T & {
  state: "readOnly" | "editForm";
};
const CustomUserProfileForm = ({ state, className }: UserProfileForm_T) => {
  return (
    <form className={`sm:w-1/2 w-full flex flex-col gap-y-8 ${className}`}>
      <TextField
        placeholder={" "}
        label={"نام و نام خانوادگی"}
        isClearable={state !== "readOnly"}
        value={"علیرضا نقویان"}
        name={"userName"}
        type="text"
        readOnly={state === "readOnly"}
      />
      {state === "readOnly" && (
        <TextField
          placeholder={" "}
          label={"ایمیل"}
          isClearable={state !== "readOnly"}
          name={"email"}
          value={"alireza@gamil.com"}
          type="email"
          readOnly
        />
      )}
      <TextField
        placeholder={" "}
        label={"کلمه عبور"}
        isClearable={state !== "readOnly"}
        name={"password"}
        type="text"
        readOnly={state === "readOnly"}
        value={"alirezangh"}
      />
      {state === "editForm" && (
        <MainBtn
          variant="fill"
          size="xl"
          className="rounded-8 w-full max-w-[121px]  mr-auto bg-secondary-300"
          state="hover"
        >
          ذخیره تغییرات
        </MainBtn>
      )}
    </form>
  );
};
export default UserProfileForm;
