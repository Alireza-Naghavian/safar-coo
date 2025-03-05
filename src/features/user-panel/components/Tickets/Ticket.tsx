"use client";
import BackLink from "@/components/atoms/buttons&links/BackLink";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import Divider from "@/components/atoms/Divider/Divider";
import TextAriaField from "@/components/atoms/inputFields/TextAriaField";
import PreLoader from "@/components/atoms/Loaders/PreLoader";
import TicketMsgCard from "@/components/molecules/cards/TicketMsgCard";
import { ticketStatus } from "@/utils/constants";
import { useForm } from "react-hook-form";
import { useGetTicket } from "../../hooks/user.hook";

function Ticket({ ticketId }: { ticketId: string }) {
  const { isTicketLoading, ticket } = useGetTicket(ticketId);
  const {
    register,
    formState: { errors, touchedFields },
  } = useForm();
  const ticketCurrStatus = ticketStatus.find((status) => {
    return JSON.stringify(ticket?.status) === JSON.stringify(status.key);
  });
  return (
    <>
      {isTicketLoading ? (
        <PreLoader isShow={isTicketLoading} />
      ) : (
        <>
          <div className="relative w-full px-4 sm:px-7 py-6 flex items-center flex-wrap gap-x-16 child:text-natural-black ">
            <h1 className=" md:text-h2Semi text-bodyB2semi  tracking-tighter text-nowrap">
              تیکت های من
            </h1>
            <div
              className=" child:text-natural-black child:text-bodyB4Regular mr-auto 
        sm:child:text-bodyB3Regular flex items-center flex-wrap gap-2 gap-x-16 text-nowrap"
            >
              <span>
                <>وضعیت:</>
                <>{ticketCurrStatus?.value}</>
              </span>
              <span>
                <>تاریخ ارسال:</>
                <>
                  {new Date(ticket?.createdAt as Date).toLocaleDateString(
                    "fa-IR"
                  )}
                </>
              </span>
              <BackLink target="/user-panel" />
            </div>
          </div>
          <Divider />
          {/* main content */}
          <div className="mt-6 w-full relative flex flex-col px-4  sm:px-7 h-[300px] overflow-y-auto ">
            {/* ticket subject */}
            <h2 className="sm:text-bodyB2Regular text-bodyB3Regular text-natural-black">
              عنوان تیکت:&nbsp;
              {ticket?.title}
            </h2>
            <TicketMsgCard
              role={ticket?.user?.role as "USER" | "ADMIN"}
              date={new Date(ticket?.createdAt as Date)}
              body={ticket?.body as string}
            />
            {ticket?.messages &&
              ticket?.messages.map((message) => {
                return (
                  <div key={new Date(message.sendAt as Date).getTime()}>
                    <TicketMsgCard
                      role={message.sender?.role as "USER" | "ADMIN"}
                      date={new Date(message.sendAt)}
                      body={message.body}
                    />
                  </div>
                );
              })}
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
      )}
    </>
  );
}

export default Ticket;
