import BreadCrumb from "@/components/atoms/Breadcrumb/BreadCrumb";
import HeroCitiesHeader from "./HeroCitiesHeader";

function CityInfo() {
  return (
    <>
      <div className="  w-full mt-10">
        <BreadCrumb
          firstTitle={"صفحه اصلی"}
          firstTarget="/"
          nestedStep={1}
          nestedLinks={[{ target: "/city/shiraz", title: "دیدنی های شیراز" }]}
          seperator={">"}
        />
      </div>

      {/* main header */}
      <div className="mt-20 w-full relative">
         <HeroCitiesHeader/>
      </div>

    </>
  );
}

export default CityInfo;
