"use client ";
import { SearchBox_T } from "@/types/textField.t";
import { cva } from "class-variance-authority";
const searchBoxStyles = cva(
  `border-2 tr-300 outline-none  focus:border-secondary-500 w-full   box-center
    placeholder:text-natural-gray2 placeholder:text-bodyB3Regular text-natural-black text-right rounded-8
    `,
  {
    variants: {
      size: {
        desktop: `
            max-w-[511px]  max-h-[54px]  py-3 px-4`,
        mobile: `  max-w-[177px]  max-h-[29px]    sm:max-w-[283px]  sm:max-h-[44px] py-1 px-2 `,
      },
    },
  }
);

function SearchBox({size,className}:SearchBox_T) {
  return (
        <form>
        <input className={searchBoxStyles({className,size})} type="search"  placeholder="جستجو کنید" />
        </form>

  )
}

export default SearchBox;
