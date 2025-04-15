"use client ";
import { searchTrExperiencesByReqQuery } from "@/features/user-panel/services/userServices";
import { TrExperienceReqBody } from "@/features/user-panel/user-panel.t";
import useDisclosure from "@/hooks/useDisclosure";
import { useSearch } from "@/hooks/useSearch";
import { SearchBox_T } from "@/types/textField.t";
import { motionDisappear } from "@/utils/motionVairants";
import { cva } from "class-variance-authority";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import Chips from "../chips/Chips";
import Spinner from "../Loaders/Spinner";
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
type Chips_T = {
  _id: string;
  title: string;
};

function SearchBox({
  size,
  className,
  placeholder = "جستجو کنید",
}: SearchBox_T) {
  const { open, close, isOpen: isSerachOpen } = useDisclosure(false);
  const [search, setSearch] = useState("");
  const [chips, setChips] = useState<Chips_T[]>([]);
  const { push } = useRouter();
  const { expBySearchQuery, isSearchLoading } = useSearch<TrExperienceReqBody>({
    search,
    request: async () => await searchTrExperiencesByReqQuery({ query: search }),
  });
  const searchHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearch(search);
  };
  // use prev suggest experience
  const selectFromSuggestList = ({ _id, title }: Chips_T) => {
    const isItemExist = chips.some((info:Chips_T) => info._id === _id);
    if (isItemExist) return;
    const chipInfo = { _id, title };
    const updated = [...chips, chipInfo];
    setChips(updated);
    localStorage.setItem("search",JSON.stringify(updated))
  };
  useEffect(()=>{
    const  savedInfo =localStorage.getItem("search");
    if(savedInfo){
        const parsed = JSON.parse(savedInfo);
        setChips(parsed)
    }
  },[])
  return (
    <div className="relative ">
      <input
        onFocus={open}
        onBlur={close}
        value={search}
        onChange={searchHandler}
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
        <div
          className={`${
            chips.length > 0
              ? `flex gap-2 items-center flex-wrap border-b border-b-natural-gray2 pb-2`
              : ``
          }`}
        >
          {chips.slice(-5).map((chip) => {
            return (
              <Chips
                key={chip._id}
                href={`/experiences/${chip._id}`}
                title={chip.title}
              />
            );
          })}
        </div>
        {/* suggestion list based values */}
        <ul
          className="flex flex-col w-full h-full max-h-[200px] 
            overflow-y-auto relative items-start justify-start
           child:text-natural-black space-y-1 py-2 child:py-1 child:px-1 child:rounded-2 child:w-full
            child-hover:bg-secondary-300
            child-hover:text-white child:tr-300 "
        >
          {isSearchLoading && search.trim().length > 0 ? (
            <div className="flex items-center gap-x-2">
              <Spinner width="w-6" height="h-6" color={"stroke-white"} />
              <span>درحال جستجو</span>
            </div>
          ) : expBySearchQuery?.length === 0 ? (
            <div className="flex items-center text-right !bg-white">
              <span className="text-sm text-natural-black ">
                هیچ نتیجه ای یافت نشد
              </span>
            </div>
          ) : (
            expBySearchQuery?.map((result) => {
              return (
                <li key={result._id}>
                  <button
                    onClick={() => {
                      selectFromSuggestList({
                        _id: result._id as string,
                        title: result.title,
                      });
                      push(`/experiences/${result._id}`);
                    }}
                  >
                    {result.title}
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </motion.div>
    </div>
  );
}

export default SearchBox;
