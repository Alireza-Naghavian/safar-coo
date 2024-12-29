import Logo from "@/components/atoms/Logo";
import React from "react";
import MenuItems from "./MenuItems";

function NavBarLayout() {
  return (
    <section className=" text-white w-full h-[80px] mt-[45px] 
    flex items-center md:px-[113px] sm:px-5 px-4 sm:gap-x-4 gap-x-2 ">
        <Logo hasCaption={false} size="xl" />
        <MenuItems/>
    </section>
  );
}

export default NavBarLayout;
