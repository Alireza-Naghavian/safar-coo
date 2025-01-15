"use client";
import React from "react";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";
import BackLink from "@/components/atoms/buttons&links/BackLink";
import { TextField } from "@/components/atoms/inputFields/TextFields";
import { inputStyles } from "@/components/layouts/auth/AuthFormLayout";
import { Select, SelectItem } from "@nextui-org/react";
import { TicketPriorities } from "@/utils/constants";
import TextAriaField from "@/components/atoms/inputFields/TextAriaField";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";

function NewTicketForm() {
  return (
    <section className="w-full shadow-lg h-full overflow-y-auto flex flex-col gap-y-0 pb-6">
      {/* header */}
      <HeaderContentPanelLayout
        title="ایجاد تیکت"
        desc="تیکت های ارسالی شما در اسرع وقت پاسخ داده خواهد شد،
        ساعت پاسخگویی شنبه تا پنجشنبه از ساعت ۹ صبح الی ۹شب
        خواهد بود.(به غیر از روزهای تعطیل رسمی)"
      >
        <BackLink target="/user-panel" />
      </HeaderContentPanelLayout>
      <form className="flex flex-col items-center mt-12 sm:px-11 px-4">
        {/* input group */}
        <div className="flex items-center justify-between w-full child:w-1/2 gap-x-6 ">
          <TextField
            className={`${inputStyles.style} !rounded-12 `}
            label="عنوان تیکت"
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
        <div className="mt-20 w-full">
          <TextAriaField
            variant="freeMode"
            size="medium"
            placeholder="درخواست خود را به صورت واضح بنویسید"
            className="w-full "
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
