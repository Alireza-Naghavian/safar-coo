"use client";
import NavLink from "@/components/atoms/buttons&links/NavLink";
import PreLoader from "@/components/atoms/Loaders/PreLoader";
import CustomSwitch from "@/components/atoms/Switch/CustomSwitch";
import InfoCard from "@/components/molecules/cards/InfoCard";
import HeaderContentPanelLayout from "@/features/user-panel/components/HeaderContentPanelLayout";
import { AddCircle, Eye } from "iconsax-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useGetTicketByQuery, useGetTickets } from "../../hooks/user.hook";
import { Ticket_T } from "../../user-panel.t";
function MyTickets() {
  const { isTicketsLoading, tickets } = useGetTickets();
  const {isTicketLoading,ticketsByQueries} =useGetTicketByQuery()
  const router= useRouter();
  const searchParams  = useSearchParams();
  const urlSearchParams = new URLSearchParams(searchParams.toString())
  const [isReplied, setIsReplied] = useState(urlSearchParams.get("status")==="REPLIED"?true:false);
  const [isPending,setIsPending]=useState(urlSearchParams.get("status")==="PENDING"?true:false)
  const filterOptions= (option:string,value:boolean)=>{
    urlSearchParams.set("status",value?option:"");
    router.replace(
      `/user-panel?${urlSearchParams.toString()}`
    )
  }
const handleRepliedTickets = ()=>{
const newTicketOption = !isReplied;
setIsReplied(newTicketOption)
setIsPending(isPending &&!newTicketOption)
filterOptions("REPLIED",newTicketOption)
}
const handlePendingTickets = ()=>{
  const newTicketOption = !isPending;
  setIsPending(newTicketOption)
  setIsReplied(isReplied&&!newTicketOption)
  filterOptions("PENDING",newTicketOption)
}
  return (
    <div className="user-panel-container">
      {/* header */}
      <HeaderContentPanelLayout
        title="تیکت های من"
        desc="  تیکت های ارسالی شما در اسرع وقت پاسخ داده خواهد شد، ساعت پاسخگویی
            شنبه تا پنجشنبه از ساعت ۹ صبح الی ۹شب خواهد بود.(به غیر از روزهای
            تعطیل رسمی) "
      >
        <div className="h-full w-full my-auto flex items-center gap-x-6 md:flex-nowrap flex-wrap md:gap-y-0 gap-y-4">
          <CustomSwitch
            className="text-natural-black sm:!text-bodyB3semi !text-bodyB4semi"
            name="repliedOnly"
            isSelected={isReplied}
            setIsSelected={handleRepliedTickets}
            label="فقط پاسخ داده شده"
          />
          <CustomSwitch
            className="text-natural-black sm:!text-bodyB3semi !text-bodyB4semi"
            name="pending"
            isSelected={isPending}
            setIsSelected={handlePendingTickets}
            label="فقط پاسخ داده نشده"
          />
        </div>
      </HeaderContentPanelLayout>
      <div className="h-full w-full relative sm:px-11 px-4 py-6 flex flex-col  gap-y-8">
        <NavLink
          variant="fill"
          size="xxl"
          state="hover"
          target="/user-panel/tickets/create"
          className=" rounded-4 bg-secondary-300 mr-auto "
        >
          <AddCircle className="sm:size-[22px] size-6 stroke-natural-black ml-2" />
          <span className="sm:text-btnText2xl text-nowrap">تیکت جدید</span>
        </NavLink>
        <motion.div
          initial={"hidden"}
          animate={isTicketsLoading&&isTicketLoading ? "hidden" : "visible"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
                staggerDirection: 1,
              },
            },
          }}
          className=" max-h-[450px] overflow-y-auto flex flex-col
           gap-y-8  overflow-x-auto"
        >
          {isTicketsLoading ? (
            <PreLoader isShow={isTicketsLoading} />
          ) : (
            (searchParams.size == 0 ?tickets:ticketsByQueries)?.map((ticket, index) => {
              return (
                <motion.div
                  key={ticket._id}
                  variants={{
                    hidden: { y: 200 },
                    visible: { y: 0 },
                  }}
                >
                  <TicketCardItem ticket={ticket} index={index} />
                </motion.div>
              );
            })
          )}
        </motion.div>
      </div>
    </div>
  );
}

const ticketStatus = [
  { key: "PENDING", value: "در انتظار پاسخ" },
  { key: "REPLIED", value: "پاسخ داده شده" },
  { key: "CLOSED", value: "بسته شده" },
];

const TicketCardItem = ({
  index,
  ticket,
}: {
  ticket: Ticket_T;
  index: number;
}) => {
  const ticketCurrStatus = ticketStatus.find((status) => {
    return JSON.stringify(ticket.status) === JSON.stringify(status.key);
  });
  return (
    <InfoCard key={ticket._id}>
      <InfoCard.InfoCardItem title="شماره تیکت" value={`${index + 1}`} />
      <InfoCard.InfoCardItem title="عنوان تیکت" value={ticket.title} />
      <InfoCard.InfoCardItem
        title="تاریخ"
        value={new Date(ticket.createdAt as Date).toLocaleDateString("fa-IR")}
      />
      <InfoCard.InfoCardItem
        title="وضعیت"
        value={`${ticketCurrStatus?.value}`}
      />
      <InfoCard.InfoCardItem title="مشاهده">
        <Link href={`/user-panel/tickets/${ticket._id}`} className="">
          <Eye variant="Outline" className="fill-white size-6" />
        </Link>
      </InfoCard.InfoCardItem>
    </InfoCard>
  );
};

export default MyTickets;
