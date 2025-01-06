import CustomSwitch from '@/components/atoms/Switch/CustomSwitch';
import React from 'react'
import FilterIcon from '../../../../public/icons/svgs/FilterIcon';
import MainBtn from '@/components/atoms/buttons&links/MainBtn';
import SearchBox from '@/components/atoms/inputFields/SearchBox';

const FilterCities = () => {
    return (
      <div className="flex flex-col items-start ">
        <div className="flex flex-col gap-y-[57px]">
          <h1 className="text-h1Semi text-white text-right tracking-tight">
            دیدنی های ایران را کشف کن!
          </h1>
          <div className="lg:w-[511px] w-[177px]">
            <SearchBox
              size="desktop"
              key={"search_cities"}
              placeholder={`هرجارو  میخوای جستجو کن`}
            />
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-y-4 items-start w-full">
          <p className="flex items-center gap-x-1 text-white">
            <FilterIcon />
            <span className="text-bodyB2semi">فیلتر کردن مکان</span>
          </p>
          <div className="rounded-4 p-4 flex flex-col  bg-primary-700 w-full">
            <span className=" text-white text-bodyB4semi">نوع جاذبه</span>
            <div className="max-w-[390px] mt-6 flex items-center gap-y-8 gap-x-10 flex-wrap">
              <CustomSwitch  name="natural" title="طبیعی" hasTitle />
              <CustomSwitch  name="historical" title="تاریخی" hasTitle />
              <CustomSwitch  name="cultural" title="فرهنگی" hasTitle />
              <CustomSwitch  name="tourism" title="گردشگری" hasTitle />
              <CustomSwitch  name="religious" title="مذهبی" hasTitle />
            </div>
            <div className="self-end mt-[20px] w-[172px]">
              <MainBtn
                size="xxl"
                state="normal"
                className="bg-secondary-400/75 hover:bg-secondary-400 text-white/90
                 border-secondary-400 hover:text-white  !w-full !px-3 !py-2  h-[30px]"
                variant="rounded"
              >
                اعمال فیلتر
              </MainBtn>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default FilterCities