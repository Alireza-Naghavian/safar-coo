import BreadCrumb from "@/components/atoms/Breadcrumb/BreadCrumb";
import ClientLayout from "@/components/layouts/ClientLayout";
import React from "react";
import ArticlesHeader from "./ArticlesHeader";

function TourismArticles() {
  return (
    <ClientLayout>
      <main className="max-w-[1920px] relative mx-auto overflow-x-hidden min-h-screen  ">
        <section className="md:px-[113px] px-5">
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
      </main>
    </ClientLayout>
  );
}

export default TourismArticles;
