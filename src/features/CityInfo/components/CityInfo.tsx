import BreadCrumb from "@/components/atoms/Breadcrumb/BreadCrumb";
import HeroCitiesHeader from "./HeroCitiesHeader";
import HDivider from "@/components/atoms/Divider/HDivider";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import BlogCard from "@/components/molecules/cards/BlogCard";
import FavUserExpSwiper from "./swipers/FavUserExpSwiper";
import TourismSwiper from "./swipers/TourismSwiper";

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
        <HeroCitiesHeader />
      </div>
      {/* divider */}
      <div className="mt-[66px]">
        <HDivider />
      </div>
      {/* tourism blogs */}
      <section className="mt-20 flex flex-col ">
        <SectionTitle
          title="جاذبه های گردشگری شیراز"
          className="tracking-tighter"
          hasLink
          href="/tourism-articles"
          linkTitle="مشاهده همه"
        />
        <div className="mt-20 relative">
          <TourismSwiper/>
     </div>
      </section>
      {/* traver user expriences */}
      <div className="mt-[66px]">
        <HDivider />
      </div>
         <section className="mt-20 flex flex-col ">
        <SectionTitle
          title="محبوب ترین تجربه کاربران"
          className="tracking-tighter"
          hasLink
          href=""
          linkTitle="مشاهده همه"
        />
        <div className="mt-20 w-full relative pb-6 ">
        <FavUserExpSwiper/>
        </div>
      </section>
    </>
  );
}

export default CityInfo;
