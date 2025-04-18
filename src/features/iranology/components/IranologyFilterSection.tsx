"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import SearchBox from "@/components/atoms/inputFields/SearchBox";
import Loader from "@/components/atoms/Loaders/Loader";
import Spinner from "@/components/atoms/Loaders/Spinner";
import useDisclosure from "@/hooks/useDisclosure";
import { ArticleCategories, recreationalCategories } from "@/utils/constants";
import { Edit2 } from "iconsax-react";
import FilterSwitchBox from "@/components/molecules/FilterSwitchBox/FilterSwitchBox";
import Providers from "@/providers/QueryClientProvider";

function IranologyFilterSection() {
  const { isOpen: isSearching, open } = useDisclosure(false);
  return (
    <>
      <Loader
        className="h-fit"
        isShow={isSearching}
        spinner={
          <Spinner
            height="md:h-[135px] w-[110px]"
            width="md:w-[135px] h-[110px]"
          />
        }
        title="در حال اعمال فیلتر، لطفا منتظر بمانید...."
      />
      <section
        className={`
    w-full relative h-full lg:max-h-[700px] flex flex-col rounded-12  mt-10 sm:mt-22
     gap-y-12 lg:gap-y-[123px] lg:px-8 lg:py-10 bg-iranology-bg  bg-no-repeat bg-cover
        md:px-6 px-3 md:py-8 py-6
    `}
      >
        <h1
          className="relative w-full text-right text-white font-NotoSemi 
    lg:text-[64px] sm:text-[32px] text-2xl lg:leading-[150%]  lg:font-[700]"
        >
          ایران خودت رو بیشتر بشناس...
        </h1>
        {/* filter section */}
        <form className="w-full relative flex flex-col gap-y-10 p-3 sm:p-10 backdrop-blur-[5px] rounded-12 bg-natural-gray3/30  ">
          <div className="w-full flex lg:items-center lg:flex-row flex-col  gap-y-10  gap-x-16">
            <div className="w-full flex flex-col gap-y-3">
              <div className="flex items-center gap-x-1 text-bodyB3Regular text-white">
                <Edit2 className="size-6 stroke-white" />
                <span>اسم جایی که میخوای بری رو بنویس</span>
              </div>
           <Providers>
           <SearchBox
                className="w-full"
                size="desktop"
                placeholder="مثلا خراسان رضوی یا گلستان..."
              />
           </Providers>
            </div>
            {/* attractional categories */}
            <FilterSwitchBox
              label="نوع جاذبه"
              className="max-w-[340px] "
              contentBox={ArticleCategories}
            />
            {/* recreational categories */}
            <FilterSwitchBox
              label="گشت و گذار"
              className="max-w-[300px] "
              contentBox={recreationalCategories}
            />
          </div>
          <MainBtn
            onClick={open}
            size="xl"
            variant="fill"
            type="button"
            state="hover"
            className="rounded-8 bg-secondary-300 mr-auto w-[156px] "
          >
            جستجو
          </MainBtn>
        </form>
      </section>
    </>
  );
}


export default IranologyFilterSection;
