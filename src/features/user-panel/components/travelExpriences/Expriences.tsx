"use client";
import BtnGroup from "@/components/atoms/buttons&links/BtnGroup";
import DeleteBtn from "@/components/atoms/buttons&links/DeleteBtn";
import NavLink from "@/components/atoms/buttons&links/NavLink";
import SearchBox from "@/components/atoms/inputFields/SearchBox";
import EmptyResult from "@/components/layouts/EmptyResult";
import InfoCard from "@/components/molecules/cards/InfoCard";
import InfoCardSkelton from "@/components/molecules/cards/skeltons/InfoCardSkelton";
import DeleteModal from "@/components/molecules/modal/DeleteModal";
import useDisclosure from "@/hooks/useDisclosure";
import { ResponseData_T } from "@/types/global.t";
import { ArticleCategories } from "@/utils/constants";
import { customErorrToast } from "@/utils/CutomToast";
import { Eye } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";
import { useGetExperiences, useRemoveTrExp } from "../../hooks/user.hook";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";
function Expriences() {
  const [activeBtn, setActiveBtn] = useState<{ value: string }>({
    value: "published",
  });

  const {
    close: closeDelModal,
    open: openDelModal,
    isOpen: isDelOpen,
  } = useDisclosure(false);
  const { experiences: trExperience, isExpLoading } = useGetExperiences();
  // remove tr exp ?
  const { isRemoveLoading, removeTrExp } = useRemoveTrExp();
  const removeHandler = async (_id: string) => {
    try {
      await removeTrExp({ expId: _id });
    } catch (error) {
      customErorrToast({
        title: "خطا در حذف تجربه سفر",
        desc: error as ResponseData_T<string>,
      });
    } finally {
      closeDelModal();
    }
  };
  // change en category to fa
  const experiences = trExperience.map((exp) => {
    for (const category of ArticleCategories) {
      if (category.key === exp.category) {
        return { ...exp, category: category.label };
      }
    }
  });
  return (
    <>
      <div className="user-panel-container">
        <HeaderContentPanelLayout
          className=""
          title="تجربیات منتشر شده من"
          desc={null}
        >
          <BtnGroup activate={setActiveBtn} activeBtn={activeBtn} />
        </HeaderContentPanelLayout>
        <div className="sm:px-11 px-4 py-4">
          <div className="w-full relative flex flex-wrap gap-y-5 items-center justify-between ">
            <SearchBox
              size="desktop"
              placeholder="جستجو در مقالات"
              className="sm:!w-[411px]"
            />
            <NavLink
              size="xl"
              className="bg-secondary-400 !px-4 !py-2 rounded-4"
              variant="fill"
              state="hover"
              target="/user-panel/travel-exprience/add"
            >
              نوشتن تجربه جدید
            </NavLink>
          </div>
          <div className=" md:mt-16 mt-12 max-h-[450px]     flex flex-col gap-y-14  ">
            {isExpLoading ? (
              <InfoCardSkelton count={3} />
            ) : experiences.length === 0 ? (
              <EmptyResult
                pictureStyles="w-[40%]"
                desc="تجربیات سفر خود را با دیگران به اشتراک بگذارید"
                picture="/images/404.png"
                title={"هیچ تجربه سفری یافت نشد!"}
              />
            ) : (
              experiences.map((exp) => {
                return (
                  <div key={exp?._id} className="size-full relative">
                    <InfoCard className="!bg-primary-700  !gap-x-8 tr-300  ">
                      <InfoCard.InfoCardItem title="عنوان" value={exp?.title} />
                      <InfoCard.InfoCardItem
                        title="دسته بندی مقاله"
                        value={exp?.category}
                      />
                      <InfoCard.InfoCardItem
                        title="تاریخ انتشار"
                        value={new Date(
                          exp?.publishTime as unknown as Date
                        ).toLocaleDateString("fa-IR")}
                      />
                      <InfoCard.InfoCardItem
                        title="ساعت انتشار"
                        value={new Date(
                          exp?.publishTime as unknown as Date
                        ).toLocaleString("fa-IR", {
                          timeStyle: "short",
                          hour12: true,
                        })}
                      />
                      <InfoCard.InfoCardItem title="مشاهده در وبسایت">
                        <Link href="" className="">
                          <Eye
                            variant="Outline"
                            className="fill-white size-6"
                          />
                        </Link>
                      </InfoCard.InfoCardItem>
                      <DeleteBtn open={openDelModal} />
                    </InfoCard>

                    <DeleteModal
                      removeHandler={removeHandler}
                      isRemoveLoading={isRemoveLoading}
                      subject="تجربه سفر"
                      _id={exp?._id as string}
                      close={closeDelModal}
                      isModalOpen={isDelOpen}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Expriences;
