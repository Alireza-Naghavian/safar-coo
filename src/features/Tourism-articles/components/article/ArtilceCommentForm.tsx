"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import TextAriaField from "@/components/atoms/inputFields/TextAriaField";
import React from "react";
import { useForm } from "react-hook-form";

function ArtilceCommentForm() {
  const {
    register,
    formState: { errors, touchedFields },
  } = useForm();
  return (
    <form className="w-full relative flex flex-col gap-y-6 mt-24 ">
      <TextAriaField
        register={register}
        errors={errors}
        touchedFields={touchedFields}
        placeholder="نظرت رو حتما بگو برای ما مهمه:)"
        name="commentBody"
        variant="freeMode"
        className="h-[303px]"
      />
      <MainBtn
        variant="fill"
        size="xxl"
        state="normal"
        className="rounded-8 w-fit mr-auto bg-natural-gray3"
      >
        ارسال نظر
      </MainBtn>
    </form>
  );
}

export default ArtilceCommentForm;
