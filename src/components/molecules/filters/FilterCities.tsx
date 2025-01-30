import MainBtn from '@/components/atoms/buttons&links/MainBtn';
import SearchBox from '@/components/atoms/inputFields/SearchBox';
import CustomSwitch from '@/components/atoms/Switch/CustomSwitch';
import { ClassName_T } from '@/types/global.t';
import { FilterSearch } from 'iconsax-react';

const FilterCities = () => {
    return (
      <div className="flex flex-col items-start ">
        <HeaderSearchBox className='sm:flex md:hidden xl:flex'/>
        <div className="mt-16 flex flex-col gap-y-4 items-start w-full">
          <p className="flex items-center gap-x-1 text-white">
            <FilterSearch className='size-10 fill-white' variant='Bold'  />
            <span className="sm:text-bodyB2semi text-bodyB4semi">فیلتر کردن مکان</span>
          </p>
          <div className="rounded-4 p-4 flex flex-col  bg-primary-700 w-full">
            <span className=" text-white text-bodyB4semi">نوع جاذبه</span>
            <div className="max-w-[390px] mt-6 flex items-center gap-y-8 gap-x-10 flex-wrap">
              <CustomSwitch  name="natural" label="طبیعی"  />
              <CustomSwitch  name="historical" label="تاریخی"  />
              <CustomSwitch  name="cultural" label="فرهنگی"  />
              <CustomSwitch  name="tourism" label="گردشگری"  />
              <CustomSwitch  name="religious" label="مذهبی"  />
            </div>
            <div className="self-end mt-[20px] w-[172px]">
              <MainBtn
                size="xxl"
                state="normal"
                className="sm:bg-secondary-400/75 bg-secondary-400 hover:bg-secondary-400 text-white/90
                 border-secondary-400 hover:text-white sm:rounded-full rounded-4 sm:!w-full w-3/4 mr-auto sm:!px-3 !px-2 sm:!py-2 !py-1  h-[30px]"
                variant="rounded">
                اعمال فیلتر
              </MainBtn>
            </div>
          </div>
        </div>
      </div>
    );
  };



  export const HeaderSearchBox =({className}:ClassName_T)=>{
    return(
       <div className={`flex flex-col gap-y-[57px] ${className}`}>
          <h1 className="sm:text-h1Semi text-h3Semi text-white text-right tracking-tight">
            دیدنی های ایران را کشف کن!
          </h1>
          <div className="lg:w-[511px] md:w-[447px] sm:w-[350px] w-full">
            <SearchBox
              size="desktop"
              key={"search_cities"}
              placeholder={`هرجارو  میخوای جستجو کن`}
            />
          </div>
        </div>
    )
  }
export default FilterCities