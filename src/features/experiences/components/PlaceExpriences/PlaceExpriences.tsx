import Avatar from "@/components/atoms/Avatar/Avatar";
import BreadCrumb from "@/components/atoms/Breadcrumb/BreadCrumb";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import ClientLayout from "@/components/layouts/ClientLayout";
import TransitionRoute from "@/components/organisms/TransitionRoute/TransitionRoute";
import { Save2, Share } from "iconsax-react";
import { BtnBox_T } from "../../experiences.t";
import ShortIntro from "./ShortIntro";
import ArticleContent from "@/features/Tourism-articles/components/article/ArticleContent";
import RateStar from "@/components/molecules/RateStar/RateStar";
import ArtilceCommentForm from "@/features/Tourism-articles/components/article/ArtilceCommentForm";
import ArticleComments from "@/features/Tourism-articles/components/comments/ArticleComments";
function PlaceExpriences() {
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
                nestedStep={3}
                nestedLinks={[
                  { title: "تجربه های سفر", target: "/experiences" },
                  { title: "اصفهان", target: "/esfehan" },
                  { title: "کلیسای وانگ", target: "/whangChurch" },
                ]}
                seperator={">"}
              />
            </div>
            {/* header */}
            <section className="w-full relative flex flex-col gap-y-8 mt-22 pb-6 border-b border-b-natural-gray2">
              <div className="w-fit ">
                <Avatar
                  avatarHeight={30}
                  avatarWidth={30}
                  provider={" تجربه گر :سعید"}
                />
              </div>
              <div className="w-full relative flex lg:flex-row flex-col gap-y-4 justify-between">
                <SectionTitle title="تجربه بازدید از کلیسای وانک اصفهان" />
                <div className="w-full flex  sm:justify-end items-end justify-center mr-auto  gap-x-4 gap-y-2">
                  <BtnBox
                    title="اشتراک گذاری"
                    Iconstyeles="fill-accent-700 group-hover:fill-white"
                    Icon={Share}
                    className="hover:bg-accent-500 hover:!border-accent-500"
                  />
                  <BtnBox
                    title="اشتراک گذاری"
                    Iconstyeles="fill-success-1 group-hover:fill-white"
                    Icon={Save2}
                    className="hover:bg-success-1 hover:!border-success-1"
                  />
                </div>
              </div>
            </section>
            <ShortIntro
              activeTime={new Date()}
              address="استان اصفهان، اصفهان، محله جلفا،
             خیابان نظر شرقی، کوچه کلیسای وانک"
              coordinates={{ lat: "3923423", lng: "9234283942" }}
              cover="/images/mosque.png"
              visitCost="FREE"
              score={4.3}
              title="کلیسا وانگ"
            />
            <ArticleContent />
            <RateStar />
            <ArtilceCommentForm />
            <ArticleComments />
          </div>
        </main>
      </TransitionRoute>
    </ClientLayout>
  );
}

const BtnBox = ({ Icon, title, className, Iconstyeles }: BtnBox_T) => {
  return (
    <MainBtn
      size="lg"
      state="normal"
      variant="outline"
      className={`
            flex items-center rounded-8 gap-2.5 group tr-300
            text-nowrap
           ${className}
            `}
    >
      <Icon variant="Bold" className={`size-6  ${Iconstyeles}`} />
      <span className="group-hover:text-white sm:text-btnTextXl text-btnTextM">
        {title}
      </span>
    </MainBtn>
  );
};
export default PlaceExpriences;
