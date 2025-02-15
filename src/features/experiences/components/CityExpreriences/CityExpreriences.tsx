"use client";
import BreadCrumb from "@/components/atoms/Breadcrumb/BreadCrumb";
import ClientLayout from "@/components/layouts/ClientLayout";
import TransitionRoute from "@/components/organisms/TransitionRoute/TransitionRoute";
import React from "react";
import FilterCityModal from "./FilterCityModal";
import ResultOfFilterExps from "./ResultOfFilterExps";
function CityExpreriences() {
  return (
    <ClientLayout>
      <TransitionRoute>
        <main
          className="max-w-[1920px] relative mx-auto 
        overflow-x-hidden min-h-screen  "
        >
          <div className="md:px-[113px] relative px-5">
            <div className="mt-10 w-full">
              <BreadCrumb
                firstTitle={"صفحه اصلی"}
                firstTarget="/"
                nestedStep={2}
                nestedLinks={[
                  { target: "/experiences", title: "تجربه های سفر" },
                  { target: "/experiences/esfehan", title: "تجربیات سفر به اصفهان" },
                ]}
                seperator={">"}
              />
            </div>
            <FilterCityModal/>
            <div className="mt-24 ">
                <ResultOfFilterExps/>
            </div>
          </div>
        </main>
      </TransitionRoute>
    </ClientLayout>
  );
}

export default CityExpreriences;
