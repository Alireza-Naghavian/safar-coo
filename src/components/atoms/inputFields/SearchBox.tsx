"use client ";
import { SearchBox_T } from "@/types/textField.t";
import { cva } from "class-variance-authority";
import Chips from "../chips/Chips";
import { motion } from "motion/react";
import useDisclosure from "@/hooks/useDisclosure";
import { motionDisappear } from "@/utils/motionVairants";
const searchBoxStyles = cva(
  `border-2 tr-300 outline-none  focus:border-secondary-500 w-full   box-center
    placeholder:text-natural-gray2 placeholder:text-bodyB3Regular text-natural-black text-right rounded-8
    `,
  {
    variants: {
      size: {
        desktop: `
            max-w-[511px]  max-h-[54px]  py-3 px-4`,
        mobile: `max-w-[283px] max-h-[44px] sm:max-w-[80%] sm:max-h-[54px] py-2 px-3 `,
      },
    },
  }
);

function SearchBox({
  size,
  className,
  placeholder = "جستجو کنید",
}: SearchBox_T) {
  const { open, close, isOpen: isSerachOpen } = useDisclosure(false);
  return (
    <div className="relative ">
      <input
      onFocus={open}
      onBlur={close}
        className={searchBoxStyles({ className, size })}
        type="search"
        placeholder={placeholder}
      />
      <motion.div
        initial={"animate"}
        animate={isSerachOpen ? "initial" : "animate"}
        exit={"animate"}
        variants={motionDisappear}
        className="w-full bg-white h-[200px] 
        absolute z-50 rounded-12
         mt-1 shadow-md flex flex-col p-2 "
      >
        {/* chips ? */}
        <div className="flex gap-2 items-center flex-wrap border-b border-b-natural-gray2 pb-2 ">
          <Chips href="" title="test" />
          <Chips href="" title="test" />
        </div>
        {/* suggestion list based values */}
        <ul
          className="flex flex-col w-full h-full max-h-[200px] 
            overflow-y-auto relative items-start justify-start
           child:text-natural-black space-y-1 py-2 child:py-1 child:px-1 child:rounded-2 child:w-full
            child-hover:bg-secondary-300
            child-hover:text-white child:tr-300 child:cursor-pointer "
        >
          <li>مقالات سایت</li>
          <li>درباره ما</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default SearchBox;
