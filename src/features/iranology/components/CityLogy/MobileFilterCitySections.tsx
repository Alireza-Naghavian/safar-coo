"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import useDisclosure from "@/hooks/useDisclosure";
import useScrollLocker from "@/hooks/useScrollLocker";
import ClientOnlyPortal from "@/utils/ClientOnlyPortal";
import React from "react";
import { motion } from "motion/react";
import { motionDisappear } from "@/utils/motionVairants";
import { FilterList } from "./DesktopFilterCitySections";
import { categories, sortByOptions } from "@/utils/constants";
import { Options_T } from "@/types/global.t";
function MobileFilterCitySections() {
  const {
    isOpen: isFilterOpen,
    open: OpenFilter,
    close: CloseFilter,
  } = useDisclosure();

  const { isOpen: isFilterSelected, toggle: filterToggle } =
    useDisclosure(false);
  const { isOpen: isSortBySelectet, toggle: sortByToggle } =
    useDisclosure(false);
  useScrollLocker(isFilterOpen);
  return (
    <div>
      <MainBtn
        size="lg"
        state="normal"
        onClick={OpenFilter}
        variant="fill"
        className="!bg-accent-700 text-white rounded-4"
      >
        فیلتر بر اساس
      </MainBtn>

      <div>
        <ClientOnlyPortal>
          <motion.div
            variants={motionDisappear}
            animate={isFilterOpen ? "initial" : "animate"}
            className="w-full h-full min-h-screen fixed 
            inset-0 z-[60] bg-white flex flex-col gap-y-8 tr-300 "
          >
            <div
              className="relative h-full  overflow-y-auto w-full
                    flex flex-col items-start px-8 py-10 gap-y-8
                    rounded-12 "
            >
              <FilterList
                className="child:!flex-row child:flex-wrap child:gap-y-4 child:!gap-x-2 child:!items-start child:!justify-start "
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

              <div className=" mr-auto flex items-center gap-x-2">
                <MainBtn
                  type="button"
                  size="lg"
                  state="normal"
                  variant="fill"
                  onClick={CloseFilter}
                  className="rounded-4 bg-natural-gray3"
                >
                  انصراف
                </MainBtn>
                <MainBtn
                  type="button"
                  size="lg"
                  state="hover"
                  variant="fill"
                  className="rounded-4 bg-secondary-300"
                >
                  جستجو
                </MainBtn>
              </div>
            </div>
          </motion.div>
        </ClientOnlyPortal>
      </div>
    </div>
  );
}

export default MobileFilterCitySections;
