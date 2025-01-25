import { ClassName_T } from '@/types/global.t';
import { Calendar2, Clock } from 'iconsax-react';
import Image from 'next/image';
import React from 'react'
type TicketMsgCard_T = ClassName_T & {
    role: "USER" | "ADMIN";
    body: string;
    date: Date;
  };
function TicketMsgCard({body,date,role,className}:TicketMsgCard_T) {
    return (
        <div
          className={`relative mt-12 w-full max-w-[537px] gap-y-3 rounded-8 flex flex-col items-center px-3 py-2
          ${role === "USER" ? "ml-auto bg-accent-500" : "mr-auto bg-accent-700"}
          ${className}`}
        >
          {/* haeder */}
          <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-2">
          <Image
              src={"/images/user_sample.png"}
              width={30}
              height={30}
              sizes="30"
              alt="user-profile.png"
              quality={100}
              className={`rounded-full ${role === "ADMIN" ? "border-3 border-yellow-500" : ""}`}
            />
            {role === "ADMIN" && <span className="text-white text-bodyB5Regular">پشتیبان سایت</span>}
          </div>
            {/* info */}
            <div className="flex items-center text-bodyB5Regular gap-x-4 text-white  child:flex  child:gap-x-1">
              <span>
                <span>
                  {
                    new Date(date).toLocaleDateString("fa-IR", {
                      dateStyle: "medium",
                    }) as string
                  }
                </span>
                <Calendar2 className="size-5 stroke-white" />
              </span>
              <span>
                <span>
                  {
                    new Date(date).toLocaleString("fa-IR", {
                      timeStyle: "short",
                    }) as string
                  }
                </span>
                <Clock className="size-5 stroke-white" />
              </span>
            </div>
          </div>
          {/* body */}
          <p className="w-full text-white  text-bodyB4Regular">{body}</p>
        </div>
      );
}

export default TicketMsgCard