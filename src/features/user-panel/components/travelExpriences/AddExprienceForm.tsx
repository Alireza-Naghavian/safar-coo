"use client";
import React, { useState } from "react";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";
import { TextField } from "@/components/atoms/inputFields/TextFields";
import {Select, SelectItem} from "@heroui/select";
import { ArticleCategories, placePriceOptions } from "@/utils/constants";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import { LocationAdd } from "iconsax-react";
import DatePickerField from "@/components/atoms/DatePicker/DatePickerField";
import { DateObject } from "react-multi-date-picker";
import { SetState } from "@/types/global.t";
import dynamic from "next/dynamic";
const TextEditor = dynamic(()=>import("@/components/organisms/TextEditor/TextEditor"),{ssr:false})
function AddExprienceForm() {
  const [date, setDate] = useState<DateObject>();
  const [description, setDescription] = useState<string>("");
  return (
    <div
      className="user-panel-container"
    >
      <HeaderContentPanelLayout
        title="نوشتن تجربه جدید از سفر"
        desc={`توی این بخش میتونی تجربه هایی که از سفرت به یه مکان یا شهری که رفتی رو بنویسی
        و اونو در سایت منتشر کنی تا بقیه هم 
        از تجربه ات استفاده کنن و هم اینکه جزو نویسنده های سایت ما بشی.`}
      />
      <div className="sm:px-11 px-4   py-4">
        <form className="sm:mt-20 mt-12 flex flex-col gap-y-8  relative size-full ">
          {/* input group */}
          <div className="flex sm:flex-row flex-col items-center sm:gap-y-0 gap-y-6 gap-x-6">
            <TextField
              labelstyles="sm:text-bodyB3Regular text-bodyB4Regular"
              placeholder={" "}
              isClearable
              className="sm:w-1/2 w-full tracking-tighter "
              label={"عنوان مقاله"}
            />
            <Select
              className=" sm:w-1/2 w-full "
              placeholder="دسته بندی را انتخاب کنید"
              label="دسته بندی مقاله"
              classNames={{
                label: "!text-bodyB3Regular",
              }}
              labelPlacement="outside"
            >
              {ArticleCategories.map((category) => {
                return (
                  <SelectItem className="!rounded-12 " key={category.key}>
                    {category.label}
                  </SelectItem>
                );
              })}
            </Select>
          </div>
          {/* input group  */}
          <div className="flex sm:flex-row flex-col items-center sm:gap-y-0 gap-y-6 gap-x-6">
            <div className="flex flex-col sm:w-1/2 w-full items-start">
              <TextField
                labelstyles="sm:text-bodyB3Regular text-bodyB4Regular"
                placeholder={
                  "آدرس دقیق را وارد کنید یا از موقعیت مکانی استفاده کنید"
                }
                isClearable
                className="w-full tracking-tighter "
                label={"آدرس جاذبه گردشگری"}
              />
              <MainBtn
                variant="fill"
                className="text-natural-black !bg-primary-300
                w-full md:max-w-[210px] sm:max-w-[180px]
                rounded-8 flex items-center gap-x-2 mt-4 "
                size="xxl"
                state="hover"
              >
                <LocationAdd className="size-4 stroke-natural-black" />
                <span className="md:text-btnTextXl text-btnTextM ">
                  ثبت آدرس با گوگل مپ
                </span>
              </MainBtn>
            </div>
            <div className="flex flex-col sm:w-1/2 w-full items-end">
              <Select
                className=" w-full "
                placeholder="رایگان؟غیررایگان؟"
                label="هزینه بازدید"
                classNames={{
                  label: "!text-bodyB3Regular",
                }}
                labelPlacement="outside"
              >
                {placePriceOptions.map((option) => {
                  return (
                    <SelectItem className="!rounded-12 " key={option.key}>
                      {option.label}
                    </SelectItem>
                  );
                })}
              </Select>
              <div className="h-[63px] gap-2 sm:block hidden"></div>
            </div>
          </div>
          {/* input group */}
          <div className=" relative flex sm:flex-row flex-col w-full  gap-x-6  ">
            <div className="sm:w-1/2 w-full"></div>
            <div className="sm:w-1/2 w-full">
              <DatePickerField
                date={date as DateObject}
                setDate={setDate as SetState<DateObject>}
                label="ساعت انتشار مقاله"
                className="h-10  rounded-8 p-2 w-full relative"
                labeStyle="sm:text-bodyB3Regular text-bodyB4Regular"
              />
            </div>
          </div>
          {/* blog description */}
          <TextEditor
            placeholder="لطفا تجربه سفر خود را توضیح دهید"
            value={description}
            onChange={setDescription}
          />

          <MainBtn
            variant="fill"
            className="bg-primary-300 text-natural-black mr-auto rounded-8 "
            size="xxl"
            state="normal"
          >
            انتشار مقاله
          </MainBtn>
        </form>
      </div>
    </div>
  );
}

export default AddExprienceForm;
