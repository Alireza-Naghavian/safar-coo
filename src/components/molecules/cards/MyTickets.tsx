"use client";
import NavLink from "@/components/atoms/buttons&links/NavLink";
import CustomSwitch from "@/components/atoms/Switch/CustomSwitch";
import TicketCard from "@/components/molecules/cards/TicketCard";
import HeaderContentPanelLayout from "@/features/user-panel/components/HeaderContentPanelLayout";
import { AddCircle, Eye } from "iconsax-react";
import Link from "next/link";
import React from "react";

function MyTickets() {
  return (
    <div className="w-full h-full max-h-[900px] overflow-y-auto   flex flex-col  gap-y-0 ">
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
            name="seen"
            title="فقط پاسخ داده شده"
            hasTitle
          />
          <CustomSwitch
            className="text-natural-black sm:!text-bodyB3semi !text-bodyB4semi"
            name="unSeen"
            title="فقط پاسخ داده نشده"
            hasTitle
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
        <div className=" max-h-[450px] overflow-y-auto flex flex-col gap-y-8  overflow-x-auto">
          <TicketCard>
            <TicketCard.TicketCardItem title="شماره تیکت" value="۳۷۴۴۵" />
            <TicketCard.TicketCardItem
              title="عنوان تیکت"
              value="درست کار نکردن کامنت"
            />
            <TicketCard.TicketCardItem title="تاریخ" value="۱۴۰۲/۰۲/۰۲" />
            <TicketCard.TicketCardItem title="وضعیت" value="وضعیت" />
            <TicketCard.TicketCardItem title="مشاهده">
              <Link href="/user-panel/tickets/ticketId" className="">
                <Eye variant="Outline" className="fill-white size-6" />
              </Link>
            </TicketCard.TicketCardItem>
          </TicketCard>
          <TicketCard>
            <TicketCard.TicketCardItem title="شماره تیکت" value="۳۷۴۴۵" />
            <TicketCard.TicketCardItem
              title="عنوان تیکت"
              value="درست کار نکردن کامنت"
            />
            <TicketCard.TicketCardItem title="تاریخ" value="۱۴۰۲/۰۲/۰۲" />
            <TicketCard.TicketCardItem title="وضعیت" value="وضعیت" />
            <TicketCard.TicketCardItem title="مشاهده">
              <Link href="/user-panel/tickets/ticketId" className="">
                <Eye variant="Outline" className="fill-white size-6" />
              </Link>
            </TicketCard.TicketCardItem>
          </TicketCard>
        </div>
      </div>
    </div>
  );
}

export default MyTickets;
