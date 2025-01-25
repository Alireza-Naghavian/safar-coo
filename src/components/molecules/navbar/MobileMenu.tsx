"use client"
import SearchBox from "@/components/atoms/inputFields/SearchBox";
import NavItem from "@/components/atoms/NavItem/NavItem";
import { Disclosure_T } from "@/hooks/useDisclosure";
import { MobileMenuItems } from "@/utils/constants";
import { motion } from "motion/react";
import React from "react";
import Close_square from "../../../../public/icons/svgs/Close_square";
import useScrollLocker from "@/hooks/useScrollLocker";
function MobileMenu({
  close: closeMenu,
  isOpen: isMenuOpen,
}: Pick<Disclosure_T,"close"|"isOpen">) {
  // lock scroll bar if isMenuOpen
  useScrollLocker(isMenuOpen as boolean)
  return (
    <div
      className={`
            lg:hidden bg-white tr-400 transform md:w-[calc(100vw-400px)] 
            w-screen h-screen overflow-hidden absolute inset-0 z-50 pl-[15px] pr-5 pt-[26px]
             ${isMenuOpen ? "translate-x-0" : "translate-x-[240rem]"}`}
    >
      <div className="flex flex-col gap-y-8 ">
        {/* top side */}
        <div className="flex flex-col gap-y-[33px] ">
          <button onClick={closeMenu} className="w-fit">
            <Close_square />
          </button>
          <SearchBox size="mobile" />
        </div>
        {/* menu items */}

        <motion.ul
          initial={"hidden"}
          animate={isMenuOpen ? "visible":"hidden"}
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
          className="flex flex-col space-y-8"
        >
          {MobileMenuItems.map((item) => {
            return (
              <motion.li
                variants={{
                  hidden: { x: 200 },
                  visible: { x: 0 },
                }}
                key={item._id}
              >
                <NavItem
                  target={item.target}
                  size="mobile"
                  title={item.title}
                  Icon={item.Icon }
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
}

export default MobileMenu;
