"use client";
import React from "react";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";
import BackLink from "@/components/atoms/buttons&links/BackLink";
import { TextField } from "@/components/atoms/inputFields/TextFields";
import { inputStyles } from "@/components/layouts/auth/AuthFormLayout";
import {Select, SelectItem} from "@heroui/select";
import { TicketPriorities } from "@/utils/constants";
import TextAriaField from "@/components/atoms/inputFields/TextAriaField";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import { useForm } from "react-hook-form";

function NewTicketForm() {
  const {
    register,
    formState: { errors, touchedFields },
  } = useForm();


  return (
    <section className="w-full shadow-lg h-full overflow-y-auto flex flex-col gap-y-0 pb-6">
      {/* header */}
      <HeaderContentPanelLayout
        className="!flex-nowrap child:mb-auto"
        title="ایجاد تیکت"
        desc="تیکت های ارسالی شما در اسرع وقت پاسخ داده خواهد شد،
        ساعت پاسخگویی شنبه تا پنجشنبه از ساعت ۹ صبح الی ۹شب
        خواهد بود.(به غیر از روزهای تعطیل رسمی)"
      >
        <BackLink target="/user-panel" />
      </HeaderContentPanelLayout>
      <form  className="flex flex-col items-center mt-12 sm:px-11 px-4">
        {/* input group */}
        <div className="flex items-center justify-between sm:flex-row flex-col w-full sm:gap-y-0 gap-y-6 sm:child:w-1/2 gap-x-6 ">
          <TextField
            register={register}
            errors={errors}
            touchedFields={touchedFields}
            className={`${inputStyles.style} !rounded-12 `}
            label="عنوان تیکت"
            name="title"
            placeholder=" "
            labelstyles="text-bodyB4Regular"
            required
            isClearable
            variant="flat"
          />
          <Select
            className="shadow-md"
            placeholder="بالا،پایین،متوسط؟"
            label="اولویت"
            labelPlacement="outside"
          >
            {TicketPriorities.map((priority) => {
              return (
                <SelectItem className="!rounded-12" key={priority.key}>
                  {priority.label}
                </SelectItem>
              );
            })}
          </Select>
        </div>
        <div className="sm:mt-20 mt-8 w-full">
          <TextAriaField
                  register={register}
                  errors={errors}
                  touchedFields={touchedFields}
            variant="freeMode"
            size="medium"
            placeholder="درخواست خود را به صورت واضح بنویسید"
            className="w-full tr-300 border-2 tr-300 
                      outline-none focus-within:shadow-accent-200
                      focus-within:border-accent-400"
            label={"محتوای تیکت"}
          />
        </div>
        <>
          <MainBtn
            className="mt-16 mr-auto rounded-8 bg-secondary-400/75 hover:bg-secondary-400"
            size="xl"
            state="hover"
            variant="fill"
          >
            ارسال تیکت
          </MainBtn>
        </>
      </form>
    </section>
  );
}

export default NewTicketForm;
