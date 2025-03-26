import BreadCrumb from "@/components/atoms/Breadcrumb/BreadCrumb";
import NavLink from "@/components/atoms/buttons&links/NavLink";
import ClientLayout from "@/components/layouts/ClientLayout";
import RateStar from "@/components/molecules/RateStar/RateStar";
import TransitionRoute from "@/components/organisms/motions/TransitionRoute/TransitionRoute";
import ArticleContent from "@/features/Tourism-articles/components/article/ArticleContent";
import ArticleHeader from "@/features/Tourism-articles/components/article/ArticleHeader";
import ArtilceCommentForm from "@/features/Tourism-articles/components/article/ArtilceCommentForm";
import ArticleComments from "@/features/Tourism-articles/components/comments/ArticleComments";
import { Map } from "iconsax-react";
import Image from "next/image";
import React from "react";

function PlaceDetail() {
  return (
    <ClientLayout>
      <TransitionRoute>
        <main className="max-w-[1920px]  mx-auto  min-h-screen  ">
          <div className="md:px-[113px] px-5 ">
            <div className="mt-10 w-full">
              <BreadCrumb
                firstTitle={"صفحه اصلی"}
                firstTarget="/"
                nestedStep={4}
                nestedLinks={[
                  { target: "/iranology", title: "ایران شناسی" },
                  { target: "/iranology/rasht", title: "رشت" },
                  { target: "/iranology/rasht/bijar", title: "سد بیجار" },
                ]}
                seperator={">"}
              />
            </div>
            <div className="mt-[72px]">
              <ArticleHeader
                title="سدشهر بیجار برای یک گردش یک روزه"
                date={new Date()}
                desc={null}
                provider="سفرکو"
              >
                <NavLink
                  size="md"
                  className="flex items-center rounded-8 gap-2.5 group tr-300
                  hover:!bg-primary-500 hover:!border-primary-500  tracking-tighter "
                  state="hover"
                  target=""
                  variant="outline"
                >
                  <Map
                    variant="Bold"
                    className="size-6 fill-accent-700 group-hover:fill-white"
                  />
                  <span> سد بیجار روی نقشه</span>
                </NavLink>
              </ArticleHeader>
            </div>
            <div className="w-full h-full mt-8    rounded-8 relative  ">
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
            <div className="h-[300px] w-full mt-12 bg-natural-gray4 box-center text-natural-black text-4xl">
                map placement
            </div>
            <RateStar/>
         <ArtilceCommentForm/>
         <ArticleComments/>
          </div>
        </main>
      </TransitionRoute>
    </ClientLayout>
  );
}

export default PlaceDetail;
