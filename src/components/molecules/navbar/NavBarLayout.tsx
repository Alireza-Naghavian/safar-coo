import Logo from "@/components/atoms/Logo";
import React from "react";
import DeskNav from "./DeskNav";

function NavBarLayout() {
  return (
    <section className=" text-white w-full h-[80px] mt-[45px] 
    flex items-center px-[113px] gap-x-4">


        <Logo hasCaption={false} size="xl"/>
    

        <DeskNav/>
    </section>
  );
}

export default NavBarLayout;
