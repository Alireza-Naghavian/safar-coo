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
import { customErorrToast } from "@/utils/CutomToast";
import { Eye } from "iconsax-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  useGetExperiences,
  useGetTrExpByQueries,
  useRemoveTrExp,
} from "../../hooks/user.hook";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";
import Providers from "@/providers/QueryClientProvider";
function Expriences() {
  const [activeBtn, setActiveBtn] = useState<{ value: string }>({
    value: "allTrExp",
  });
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const path = usePathname();
  const {
    close: closeDelModal,
    open: openDelModal,
    isOpen: isDelOpen,
  } = useDisclosure(false);
  const { experiences, isExpLoading } = useGetExperiences();
  // by queries ?
  const status =
    searchParams.get("status") || ("allTrExp"?.toString() as string);
  const { expByQuery, isExpQueryLoading } = useGetTrExpByQueries({ status });
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

  // change retreived data based queries
  const handleChangeStatus = ({ value }: { value: string }) => {
    try {
      const urlSearchParams = new URLSearchParams(searchParams);
      setActiveBtn({ value });
      urlSearchParams.set("status", value);
      replace(`${path}?${urlSearchParams.toString()}`);
    } catch (error) {
      customErorrToast({
        title: "خطا احتمالی در  تجربه سفر",
        desc: error as ResponseData_T<string>,
      });
    }
  };

  return (
    <>
      <div className="user-panel-container">
        <HeaderContentPanelLayout
          className=""
          title="تجربیات منتشر شده من"
          desc={null}
        >
          <BtnGroup
            actionHandler={handleChangeStatus}
            activate={setActiveBtn}
            activeBtn={activeBtn}
          />
        </HeaderContentPanelLayout>
        <div className="sm:px-11 px-4 py-4">
          <div className="w-full relative flex flex-wrap gap-y-5 items-center justify-between ">
        <Providers>
        <SearchBox
              size="desktop"
              placeholder="جستجو در تجربیات"
              className="sm:!w-[411px]"
            />
        </Providers>
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
            {isExpLoading || isExpQueryLoading ? (
              <InfoCardSkelton count={3} />
            ) : experiences.length === 0 ? (
              <EmptyResult
                pictureStyles="w-[40%]"
                desc="تجربیات سفر خود را با دیگران به اشتراک بگذارید"
                picture="/images/404.png"
                title={"هیچ تجربه سفری یافت نشد!"}
              />
            ) : (
              (searchParams.size === 0 ? experiences : expByQuery)?.map(
                (exp) => {
                  return (
                    <div key={exp?._id} className="size-full relative">
                      <InfoCard className="!bg-primary-700  !gap-x-8 tr-300  ">
                        <InfoCard.InfoCardItem
                          title="عنوان"
                          value={exp?.title}
                        />
                        <InfoCard.InfoCardItem
                          title="وضعیت"
                          value={
                            exp?.isPublished ? "منتشر شده" : "در‌ صف‌انتشار"
                          }
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
                }
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Expriences;
