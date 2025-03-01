"use client";
import BackLink from "@/components/atoms/buttons&links/BackLink";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import Divider from "@/components/atoms/Divider/Divider";
import TextAriaField from "@/components/atoms/inputFields/TextAriaField";
import TicketMsgCard from "@/components/molecules/cards/TicketMsgCard";
import { useForm } from "react-hook-form";
function Ticket() {
  const {
    register,
    formState: { errors, touchedFields },
  } = useForm();
  return (
    <>
      {/* header */}
      <div className="relative w-full px-4 sm:px-7 py-6 flex items-center flex-wrap gap-x-16 child:text-natural-black ">
        <h1 className=" md:text-h2Semi text-bodyB2semi  tracking-tighter text-nowrap">
          تیکت های من
        </h1>
        <div
          className=" child:text-natural-black child:text-bodyB4Regular mr-auto 
        sm:child:text-bodyB3Regular flex items-center flex-wrap gap-4 gap-x-16 text-nowrap"
        >
          <span>
            <>وضعیت:</>
            <>در حال بررسی</>
          </span>
          <span>
            <>تاریخ ارسال:</>
            <>۱۴۰۳/۰۹/۰۲</>
          </span>
          <span>
            <>شماره تیکت :</>
            <>۳۷۴۴۵</>
          </span>
          <BackLink target="/user-panel" />
        </div>
      </div>
      <Divider />
      {/* main content */}
      <div className="mt-6 w-full relative flex flex-col px-4  sm:px-7 h-[350px] overflow-y-auto ">
        {/* ticket subject */}
        <h2 className="sm:text-bodyB2Regular text-bodyB3Regular text-natural-black">
          عنوان تیکت:مشکل در کامنت گذاشتن در سایت
        </h2>
        <TicketMsgCard
          role="USER"
          date={new Date()}
          body={`
            سلام وقت بخیر خسته نباشید من در کامنت گذاشتن توی سایت مشکل دارم،
             هر چقدر میخوام کامنت بذارم نمیشه، یعنی کامنتم رو مینویسم ، بعد ارسال رو که میزنم ارور میده، لطفا این مشکل رو رسیدگی کنید، ممنون.
            `}
        />
        <TicketMsgCard
          role="ADMIN"
          date={new Date()}
          body={`
          سلام مهدی جان ممنون از این مشکل رو گزارش کردید، 
          در اسرع وقت این مشکل رو حل میکنیم ، ممنون از که منتظر میمونی.
          `}
        />
        <TicketMsgCard
          role="USER"
          date={new Date()}
          body={`
            سلام وقت بخیر خسته نباشید من در کامنت گذاشتن توی سایت مشکل دارم،
             هر چقدر میخوام کامنت بذارم نمیشه، یعنی کامنتم رو مینویسم ، بعد ارسال رو که میزنم ارور میده، لطفا این مشکل رو رسیدگی کنید، ممنون.
            `}
        />
        <TicketMsgCard
          role="ADMIN"
          date={new Date()}
          body={`
          سلام مهدی جان ممنون از این مشکل رو گزارش کردید، 
          در اسرع وقت این مشکل رو حل میکنیم ، ممنون از که منتظر میمونی.
          `}
        />
      </div>
      {/* write new msg */}
      <form className="mt-8 w-full border-t-2 pt-2  relative flex flex-col gap-y-4 px-4 pb-10  sm:px-7">
        <TextAriaField
          register={register}
          errors={errors}
          touchedFields={touchedFields}
          name="newMgs"
          variant="freeMode"
          size="medium"
          placeholder="افزودن پیام جدید"
          className="w-full tr-300 border-2 tr-300 
                  outline-none focus-within:shadow-accent-200
                  focus-within:border-accent-400 "
          label={"پیام جدید"}
        />
        <MainBtn
          type="submit"
          size="xl"
          state="hover"
          variant="fill"
          className="max-w-[120px] w-full rounded-4 bg-secondary-300 mr-auto "
        >
          ارسال
        </MainBtn>
      </form>
    </>
  );
}

export default Ticket;
