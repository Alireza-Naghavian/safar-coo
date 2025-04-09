import { ClassName_T } from "@/types/global.t";
import Link from "next/link";
import React from "react";
type Chips_T = ClassName_T & {
  title: string;
  href: string;
};
function Chips({ href, title, className }: Chips_T) {
  return (
    <div
      className={`${className} w-fit rounded-8 text-natural-black
       text-sm bg-secondary-400 box-center p-[3px] relative`}
    >
      <Link href={href} className="w-full h-full">
        {title}
      </Link>
    </div>
  );
}

export default Chips;
