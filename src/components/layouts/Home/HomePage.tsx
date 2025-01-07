import FilterCities from "@/components/molecules/filters/FilterCities";
import IranMap from "@/components/molecules/IranMap/IranMap";
import ClientLayout from "../ClientLayout";

function HomePage() {
  return (
    <ClientLayout>
      <div className="md:px-[113px] px-5 ">
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
      </div>
    </ClientLayout>
  );
}

export default HomePage;
