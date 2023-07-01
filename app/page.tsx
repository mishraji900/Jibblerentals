
import { BikeCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fuels } from "@/constants";
import { fetchBikes } from "@/utils";

export default async function Home({ searchParams }) {
  const allBikes = await fetchBikes({
    manufacturer: searchParams.manufacturer||'',
    year: searchParams.year||2021,
    fuel: searchParams.fuel||'',
    limit: searchParams.limit||10,
    model: searchParams.model||'',
  });
  const isDataEmpty =
    !Array.isArray(allBikes) || allBikes.length < 1 || !allBikes;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Catalogue</h1>
          <p>Explore the Bikes you might like</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allBikes?.map((Bike) => (
                <BikeCard Bike={Bike} />
              ))}
            </div>
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">Oops,no results</h2>
            <p>{allBikes.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
