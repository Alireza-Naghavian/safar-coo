"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import SearchBox from "@/components/atoms/inputFields/SearchBox";
import FilterSwitchBox from "@/components/molecules/FilterSwitchBox/FilterSwitchBox";
import { ArticleCategories, recreationalCategories } from "@/utils/constants";
import { FilterSearch } from "iconsax-react";
import React from "react";

function FilterExperiences() {
  return (
    <section className="relative w-full flex flex-col gap-y-14 ">
      {/* title */}
      <div className="w-full flex flex-col gap-y-6 child:text-right text-natural-black">
        <h2 className=" text-h2Semi flex">
          <FilterSearch className="fill-natural-black size-8" />
          <span>فیلتر کردن مکان ها</span>
        </h2>
        <p className="text-h3Semi max-w-[545px] ">
          با استفاده از فیلتر کردن، سریع تر میتونی اون جاذبه ای که دوست داری و
          دیگران رفتن رو پیدا کنی
        </p>
      </div>
      <form className="w-full relative  rounded-8 px-4 py-10 bg-primary-500">
        <div className="flex items-start justify-between">
          <SearchBox size="desktop" placeholder="کجا میخوای بری؟" />
          <FilterSwitchBox
            className="max-w-[315px]"
            contentBox={ArticleCategories}
            label="نوع جاذبه"
          />
          <FilterSwitchBox
            className="max-w-[315px]"
            contentBox={recreationalCategories}
            label="گشت و گذار"
          />
        </div>
        <MainBtn
          size="xxl"
          variant="fill"
          state="hover"
          type="submit"
          className="mt-10 md:w-[130px] bg-secondary-300 py-2 mr-auto rounded-8">
          اعمال فیلتر
        </MainBtn>
      </form>
    </section>
  );
}

export default FilterExperiences;
