import FilterCities from "@/components/molecules/filters/FilterCities";
import IranMap from "@/components/molecules/IranMap/IranMap";
import ClientLayout from "../ClientLayout";
import BlogCard from "@/components/molecules/cards/BlogCard";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import FullBlogCard from "@/components/molecules/cards/FullBlogCard";

function HomePage() {
  return (
    <ClientLayout>
      <div className="md:px-[113px] px-5 ">
        {/* heaader */}
        <section
          className="mt-[120px] w-full relative
                xl:max-h-[650px] rounded-12
             bg-primary-500 md:p-10 p-3  flex xl:items-center
              justify-between gap-x-[90px] xl:flex-row flex-col "
        >
          <div className="xl:w-1/3 xl:order-1 order-2 ">
            <FilterCities />
          </div>
          <div className="xl:order-2 order-1 hidden md:block">
            <IranMap />
          </div>
        </section>
        {/* popular blogs */}
        <section className="md:mt-[116px] mt-[56px] relative w-full">
          <div className="relative flex flex-col gap-y-[56px] ">
            <SectionTitle title="مقالات منتخب" className="tracking-tighter" />
            <div className="w-full relative flex flex-col sm:gap-y-10 gap-y-6">
              <div className="grid sm:grid-cols-2  gap-x-8 lg:px-[71px] gap-y-6 sm:gap-y-0">
                <BlogCard
                  variant="inner-caption"
                  cover="/images/sample-card.png"
                  href=""
                  title="خوشمزه ترین غذاهای شمال ایران"
                  badgeContent="غذاها"
                />
                <BlogCard
                  variant="inner-caption"
                  cover="/images/sample-card.png"
                  href=""
                  title="خوشمزه ترین غذاهای شمال ایران"
                  badgeContent="غذاها"
                />
              </div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-10">
                <BlogCard
                  variant="inner-caption"
                  cover="/images/sample-card.png"
                  href=""
                  title="خوشمزه ترین غذاهای شمال ایران"
                  badgeContent="غذاها"
                />
                <BlogCard
                  variant="inner-caption"
                  cover="/images/sample-card.png"
                  href=""
                  title="خوشمزه ترین غذاهای شمال ایران"
                  badgeContent="غذاها"
                />
                <BlogCard
                  variant="inner-caption"
                  cover="/images/sample-card.png"
                  href=""
                  title="خوشمزه ترین غذاهای شمال ایران"
                  badgeContent="غذاها"
                />
              </div>
            </div>
          </div>
        </section>
        {/* latest blogs */}
        <section className="md:mt-[116px] mt-[56px] relative w-full">
          <div className="relative flex flex-col gap-y-[56px]">
            <SectionTitle
              title="مقالات جدید این ماه"
              hasLink
              linkTitle="مشاهده همه"
              href=""
              className="tracking-tighter"
            />
            <div className="flex flex-col md:gap-y-16 gap-y-[45px]">
              <FullBlogCard
                cover="/images/sample-card.png"
                date={new Date}
                desc={`شیراز مهد فرهنگ، ادب و هنر فارسی، با هوایی آکنده از بوی عطر
               بهار نارنج در فصل بهار، هر مسافری را برای سفر به این شهر وسوسه می‌کند و...`}
               href=""
               title="برای سفر به شیراز کجاها بریم؟"
               variant="full-detail"
               badgeContent="گردشگری"
              />
              <FullBlogCard
                cover="/images/sample-card.png"
                date={new Date}
                desc={`شیراز مهد فرهنگ، ادب و هنر فارسی، با هوایی آکنده از بوی عطر
               بهار نارنج در فصل بهار، هر مسافری را برای سفر به این شهر وسوسه می‌کند و...`}
               href=""
               title="برای سفر به شیراز کجاها بریم؟"
               variant="full-detail"
               badgeContent="گردشگری"
              />
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
}

export default HomePage;
