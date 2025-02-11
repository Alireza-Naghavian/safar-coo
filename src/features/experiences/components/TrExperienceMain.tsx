import ColorShade from "@/components/atoms/bgShades/ColorShade";
import BreadCrumb from "@/components/atoms/Breadcrumb/BreadCrumb";
import ClientLayout from "@/components/layouts/ClientLayout";
import React from "react";
import TravelHeader from "../../../../public/icons/svgs/TravelHeader";
import FilterExperiences from "./FilterExperiences";

function TrExperienceMain() {
  return (
    <ClientLayout>
      <main
        className="max-w-[1920px] relative mx-auto 
        overflow-x-hidden min-h-screen  "
      >
        <div className="md:px-[113px] relative px-5">
          <div className="mt-10 w-full">
            <BreadCrumb
              firstTitle={"صفحه اصلی"}
              firstTarget="/"
              nestedStep={1}
              nestedLinks={[{ target: "/experiences", title: "تجربه های سفر" }]}
              seperator={">"}
            />
          </div>

         <div className ="w-full sm:max-w-[566px] mt-14 md:gap-y-8 gap-y-6
          relative flex flex-col mx-auto ">
            <h1 className="text-D1Heavy text-natural-black text-center">
            تجربه های سفر
            </h1>
            <p className="text-h2Semi text-center bg-gradient-to-l !bg-clip-text
             from-[#C21500] to-[#FFC500]">
                ببین بقیه کجا میرن، بقیه هم ببینن تو کجا میری:)
                تجربیات سفرت رو با دیگران به اشتراک بگذار...
            </p>
         </div>

         <div className="w-full relative mx-auto flex justify-center">
            <ColorShade className="bg-[#FFC7C7] bottom-14 left-24"/>
            <ColorShade className="bg-[#C0F0FF] bottom-14 right-24"/>
            <ColorShade className="bg-[#FEE1C7] top-64 right-24"/>
            <ColorShade className="bg-[#EFDFFF] top-64 left-24"/>
            <div className="mx-auto w-full flex justify-center">
            <TravelHeader/>
            </div>
         </div>
         <div className="mt-[88px] w-full relative">
          <FilterExperiences/>
         </div>
         </div>
      </main>
    </ClientLayout>
  );
}

export default TrExperienceMain;
