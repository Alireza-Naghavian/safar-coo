"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import FilterSwitchBox from "@/components/molecules/FilterSwitchBox/FilterSwitchBox";
import MainModal from "@/components/molecules/modal/Modal";
import useDisclosure, { Disclosure_T } from "@/hooks/useDisclosure";
import { ArticleCategories, recreationalCategories } from "@/utils/constants";
import { Edit } from "iconsax-react";
import MapIcon from "../../../../../public/icons/svgs/MapIcon";

function FilterCityModal() {
  const { isOpen: isModalOpen, open, close } = useDisclosure();
  return (
    <section className="w-full relative flex flex-wrap justify-between items-center mt-24">
      <div className="flex items-center gap-x-1">
        <MapIcon />
        <h1 className=" text-bodyB2semi sm:text-bodyB1semi md:text-h1B text-natural-black">
          تجربیات سفر دیگران به شهر
          &nbsp;
          <span className="text-primary-500">اصفهان</span>
        </h1>
      </div>
      {/* modal */}
      <MainBtn
        variant="rounded"
        state="hover"
        size="xxl"
        onClick={open}
        className="flex bg-secondary-400 items-center mr-auto gap-x-2 px-6"
      >
        <Edit className="stroke-white size-6" />
        <span className="text-white  text-btnText2xl">ویرایش فیلتر</span>
      </MainBtn>
      <FilterModal isOpen={isModalOpen} close={close}  />
    </section>
  );
}

const FilterModal = ({ isOpen, close }: Pick<Disclosure_T,"isOpen"|"close">) => {
  return (
    <MainModal
      effect="ease_out"
      isClickable
      isShow={isOpen}
      onClose={close}
      className="w-full md:max-w-[853px] xs:max-w-[573px] lg:top-[10%]  
      overflow-y-auto h-[450px] lg:h-auto
      px-8 py-4 "
    >
      <MainModal.Header isClickable onClose={close}>
        <></>
      </MainModal.Header>
      <MainModal.Body>
        <form className=" relative gap-y-2 flex flex-col my-2 ">
          <div className="h-full flex items-start gap-x-6 lg:flex-row flex-col lg:gap-y-0 sm:gap-y-12 gap-y-8">
            <FilterSwitchBox
              className="border  sm:!h-[212px] py-8 px-4"
              contentBox={ArticleCategories}
              label="نوع جاذبه"
            />
            <FilterSwitchBox
              className="border sm:!h-[212px] py-8 px-4"
              contentBox={recreationalCategories}
              label="گشت و گذار"
            />
          </div>
          <MainBtn
            size="xxl"
            variant="fill"
            state="hover"
            type="submit"
            className="md:mt-10 mt-0 relative md:w-[130px] w-full
             bg-secondary-300 py-2 mr-auto rounded-8"
          >
            اعمال فیلتر
          </MainBtn>
        </form>
      </MainModal.Body>
    </MainModal>
  );
};

export default FilterCityModal;
