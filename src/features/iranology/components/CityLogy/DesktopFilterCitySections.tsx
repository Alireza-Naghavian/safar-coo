"use client";
import useDisclosure from "@/hooks/useDisclosure";
import { ClassName_T, Options_T } from "@/types/global.t";
import { categories, sortByOptions } from "@/utils/constants";
import { Checkbox } from "@heroui/react";
import React from "react";

function DesktopFilterCitySections() {
  const { isOpen: isFilterSelected, toggle: filterToggle } =useDisclosure(false);
  const { isOpen: isSortBySelectet, toggle: sortByToggle } =useDisclosure(false);
  return (
    <div
      className="relative h-full  overflow-y-auto w-full
    flex flex-col items-startf px-8 py-10 gap-y-8
    rounded-12 bg-accent-200"
    >
      <FilterList
        isSelected={isFilterSelected}
        title="فیلتر بر اساس"
        toggle={filterToggle}
        listContent={categories as Options_T[]}
      />
      <FilterList
        isSelected={isSortBySelectet}
        title="مرتب سازی بر اساس"
        toggle={sortByToggle}
        listContent={sortByOptions as Options_T[]}
      />
    </div>
  );
}

type FilterList_T = ClassName_T & {
  title: string;
  isSelected: boolean;
  toggle: () => void;
  listContent: Options_T[];
};
export const FilterList = ({
  title,
  isSelected,
  listContent,
  ...rest
}: FilterList_T) => {
  return (
    <div
      className={`flex flex-col relative 
      bg-transparent text-natural-black gap-y-4 ${rest.className}`}
    >
      <h4 className="xl:text-bodyB2semi    text-bodyB3semi">{title}</h4>
      <ul className="gap-y-1 flex flex-col">
        {listContent.map((option) => {
          return (
            <li key={option.key} className="ml-auto">
              <Checkbox
                classNames={{
                  icon: "bg-accent-500 w-full h-full  ",
                  wrapper:
                    "bg-natural-gray3 checked:bg-accent-500 border !border-natural-gray3   ",
                }}
                isSelected={isSelected}
                onValueChange={rest.toggle}
              >
                {option.label}
              </Checkbox>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default DesktopFilterCitySections;
