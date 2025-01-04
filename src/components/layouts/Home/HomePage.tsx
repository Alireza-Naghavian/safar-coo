import FilterCities from "@/components/molecules/filters/FilterCities";
import IranMap from "@/components/molecules/IranMap/IranMap";
import ClientLayout from "../ClientLayout";

function HomePage() {
  return (
    <ClientLayout>
      <div className="md:px-[113px] sm:px-5 ">
        <section
          className="mt-[205px] w-full 
                max-h-[650px] rounded-12
             bg-primary-500 p-10 flex items-center justify-between"
        >
          <FilterCities />
          <IranMap />
        </section>
      </div>
    </ClientLayout>
  );
}

export default HomePage;
