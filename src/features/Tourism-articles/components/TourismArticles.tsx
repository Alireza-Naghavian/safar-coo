import BreadCrumb from "@/components/atoms/Breadcrumb/BreadCrumb";
import ClientLayout from "@/components/layouts/ClientLayout";
import React from "react";
import ArticlesHeader from "./ArticlesHeader";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import FullBlogCard from "@/components/molecules/cards/FullBlogCard";

function TourismArticles() {
  return (
    <ClientLayout>
      <main className="max-w-[1920px] relative mx-auto overflow-x-hidden min-h-screen  ">
        <div className="md:px-[113px] px-5">

       
        <section className="">
          {/* filter & filter */}
          <div className="mt-10 w-full">
            <BreadCrumb
              firstTitle={"صفحه اصلی"}
              firstTarget="/"
              nestedStep={1}
              nestedLinks={[
                { target: "/tourism-articles", title: "مقالات گردشگری" },
              ]}
              seperator={">"}
            />
          </div>
          <ArticlesHeader/>
        </section>
        <section className="md:mt-40 mt-10 relative w-full">
            <SectionTitle title="جدیدترین مقالات" className="tracking-tighter" />
              {/* latest blogs */}
              <div className="mt-10 w-full flex flex-col gap-y-10  ">
              <FullBlogCard
                cover="/images/sample-card.png"
                date={new Date}
                desc={`شیراز مهد فرهنگ، ادب و هنر فارسی، با هوایی آکنده از بوی عطر
               بهار نارنج در فصل بهار، هر مسافری را برای سفر به این شهر وسوسه می‌کند و...`}
               href=""
               title="برای سفر به شیراز کجاها بریم؟"
               variant="full-detail"
               badgeContent="گردشگری"
              />
              <FullBlogCard
                cover="/images/sample-card.png"
                date={new Date}
                desc={`شیراز مهد فرهنگ، ادب و هنر فارسی، با هوایی آکنده از بوی عطر
               بهار نارنج در فصل بهار، هر مسافری را برای سفر به این شهر وسوسه می‌کند و...`}
               href=""
               title="برای سفر به شیراز کجاها بریم؟"
               variant="full-detail"
               badgeContent="گردشگری"
              />
              <FullBlogCard
                cover="/images/sample-card.png"
                date={new Date}
                desc={`شیراز مهد فرهنگ، ادب و هنر فارسی، با هوایی آکنده از بوی عطر
               بهار نارنج در فصل بهار، هر مسافری را برای سفر به این شهر وسوسه می‌کند و...`}
               href=""
               title="برای سفر به شیراز کجاها بریم؟"
               variant="full-detail"
               badgeContent="گردشگری"
              />
              </div>
              {/* inifinite scroll place */}
        </section>
        </div>
      </main>
    </ClientLayout>
  );
}

export default TourismArticles;
