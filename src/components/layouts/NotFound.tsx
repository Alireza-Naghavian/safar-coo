import { Icon_T } from "@/types/global.t";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ClientLayout from "./ClientLayout";
export type NotFound_T = {
  desc: string;
  picture: string;
  pictureStyles: string;
  utilLinks: { title: string; href: string; Icon: Icon_T }[];
  title?:string|null
};
function NotFound({ desc, picture, utilLinks, pictureStyles,title }: NotFound_T) {
  return (
    <ClientLayout>
      <section className="mx-auto child:text-center child:text-natural-black
       flex flex-col items-center  mt-12">
        <h1 className=" lg:text-h1B sm:text-h2B text-h3Semi ">
        {title ?? "اوه مشکلی پیش اومد!"}
        </h1>
        <p
          className="mt-6 lg:text-h4Semi sm:text-bodyB1semi text-bodyB3semi
     w-full sm:max-w-[464px] max-w-[261px] "
        >
          {desc}
        </p>
        <div className={`${pictureStyles} sm:mt-8 mt-6`}>
          <Image
            fill
            quality={100}
            priority
            alt={"not-found.png"}
            src={picture}
            className="!relative"
          />
        </div>
        <div
          className="gap-y-4 flex flex-col mt-8 child:flex child:items-center  child:gap-x-2 
    child:pb-1 child:border-b child:border-natural-black"
        >
          {utilLinks?.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <item.Icon className=" stroke-natural-black sm:size-8 size-4" />
                <span className="text-natural-black sm:text-bodyB1semi text-bodyB4semi">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </ClientLayout>
  );
}

export default NotFound;
