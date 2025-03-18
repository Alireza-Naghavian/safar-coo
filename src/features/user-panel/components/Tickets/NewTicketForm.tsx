"use client";
import BackLink from "@/components/atoms/buttons&links/BackLink";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import TextAriaField from "@/components/atoms/inputFields/TextAriaField";
import { TextField } from "@/components/atoms/inputFields/TextFields";
import Spinner from "@/components/atoms/Loaders/Spinner";
import { inputStyles } from "@/components/layouts/auth/AuthFormLayout";
import { ResponseData_T } from "@/types/global.t";
import { TicketPriorities } from "@/utils/constants";
import { customErorrToast } from "@/utils/CutomToast";
import { createTicketValidation } from "@/utils/validators/userValidators";
import { Select, SelectItem } from "@heroui/select";
import { addToast } from "@heroui/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dislike } from "iconsax-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateTicket } from "../../hooks/user.hook";
import { Priority_T, TicketBody_T } from "../../user-panel.t";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";

function NewTicketForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({ resolver: yupResolver(createTicketValidation) });
  const [priority, setPriority] = useState<Priority_T>(2);
  const { createTicket, isCreateLoading } = useCreateTicket();
  const tickethandler = async (data: TicketBody_T) => {
    try {
      if (priority === 0) {
        return addToast({
          title: "اولویت تیکت را انتخاب نکرده اید!",
          icon: (
            <Dislike
              className="size-10  order-2 fill-[#ef4444] "
              variant="Bold"
              color="#ef4444"
            />
          ),
        });
      }
      await createTicket({ ...data, priority });
    } catch (error: unknown) {
      customErorrToast({
        title: "خطا در ایجاد تیکت",
        desc: error as ResponseData_T<string>,
      });
    } finally {
      reset();
    }
  };

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
      <form
        onSubmit={handleSubmit(tickethandler)}
        className="flex flex-col items-center mt-12 sm:px-11 px-4"
      >
        {/* input group */}
        <div
          className="flex items-center justify-between sm:flex-row flex-col 
        w-full sm:gap-y-0 gap-y-6 sm:child:w-1/2 gap-x-6 "
        >
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
            placeholder="بالا،پایین،متوسط؟"
            label="اولویت"
            labelPlacement="outside"
            className={`${errors?.["title"] ? "after:h-5" : "after:h-0"}`}
            defaultSelectedKeys={[priority]}
            onChange={(e) => setPriority(Number(e.target.value) as Priority_T)}
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
            name="body"
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
            type="submit"
            className="mt-16 mr-auto rounded-8 bg-secondary-400/75 hover:bg-secondary-400"
            size="xl"
            state="hover"
            variant="fill"
          >
            {isCreateLoading ? (
              <Spinner width="w-8" height="h-8" color={"stroke-white"} />
            ) : (
              "ارسال تیکت"
            )}
          </MainBtn>
        </>
      </form>
    </section>
  );
}

export default NewTicketForm;
