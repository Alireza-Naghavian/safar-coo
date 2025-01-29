import BreadCrumb from "@/components/atoms/Breadcrumb/BreadCrumb";
import ClientLayout from "@/components/layouts/ClientLayout";
import ArticleHeader from "./ArticleHeader";
import Image from "next/image";
import ArticleContent from "./ArticleContent";
import RateStar from "@/components/molecules/RateStar/RateStar";

function Article() {
  return (
    <ClientLayout>
      <main className="max-w-[1920px] relative mx-auto overflow-x-hidden min-h-screen  ">
        <div className="md:px-[113px] px-5 relative">
          {/* heaader */}
          <section>
            <div className="  w-full mt-10">
              <BreadCrumb
                firstTitle={"صفحه اصلی"}
                firstTarget="/"
                nestedStep={2}
                nestedLinks={[
                  { target: "/tourism-articles", title: "مقالات گردشگری" },
                  {
                    target: "/tourism-articles/about-shiraz",
                    title: "برای سفر به شیراز کجاها بریم؟",
                  },
                ]}
                seperator={">"}
              />
            </div>
            <ArticleHeader
            date={new Date}
              title="برای سفر به شیراز کجاها بریم؟"
              desc="شیراز مهد فرهنگ، ادب و 
            هنر فارسی، با هوایی آکنده از بوی عطر 
            بهار نارنج در فصل بهار، هر مسافری 
            را برای سفر به این شهر وسوسه می‌کند 
            بخصوص بوی بهار نارنج آن...."
            provider=" علیرضا قربانی"
            />
          </section>
          {/* heaader */}
          {/* cover */}
          <div className="w-full h-full    rounded-8 relative  ">
            <Image
            alt="cover.png"
            src={"/images/sample-card.png"}
            fill
            quality={100}
            priority
            className="!relative lg:max-h-[568px] md:max-h-[468px] 
          sm:max-h-[268px] max-h-[178px] rounded-8"
            />
          </div>
          <ArticleContent/>
         <RateStar/>
        </div>
      </main>
    </ClientLayout>
  );
}

export default Article;
