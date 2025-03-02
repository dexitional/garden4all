import ImpactSection from "@/components/ImpactSection";
import InitiativeSection from "@/components/InitiativeSection";
import TopPublicationSection from "@/components/TopPublicationSection";
import Spotbg from "@/public/world3.png";
import Image from "next/image";
const { STRAPI_APP_URL } = process.env;

export const revalidate = 120;

export default async function Home() {
  return (
    <main className="z-1">
      {/* Spotlight Section */}
      <section className="px-3 md:px-0 w-full h-fit bg-gradient-to-r from-primary/10 via-white to-primary/30 overflow-hidden">
        <div className="relative mx-auto py-3 md:py-10 md:max-w-[68rem] min-h-64 md:h-[32rem] grid grid-cols-1 md:grid-cols-2">
          <div className="z-10 p-3 rounded-lg backdrop-blur-lg bg-opacity-30 bg-primary shadow md:shadow-none md:bg-transparent flex flex-col items-center justify-center space-y-4 md:space-y-10">
            <h1 className="text-5xl md:text-9xl font-dancing tracking-wider text-white md:text-primary">
              G4A
            </h1>
            <p className="md:text-2xl">
              Garden For All (G4A) is a non-profit agency registered in Ghana
              with the mission to educate and support African households and
              institutions in their sustainable production and use of healthy
              foods.
              {/* Project Garden4All is a non-profit society enabling rural and
              urban communities in Africa to choose their way in the sustainable
              production through gardening and the use of healthy foods. */}
            </p>
          </div>
          <div className="z-1 absolute md:relative">
            <Image
              src={Spotbg}
              alt="Spotlight Image"
              className="h-full object-contain backdrop-filter  saturate-50 hue-rotate-60"
            />
          </div>
        </div>
      </section>

      {/* Aquaculture Section */}
      {/* BeeKeeping Section */}
      {/* Animal Husbandary Section */}
      {/* Aquaculture Section */}
      {/* Aquaculture Section */}

      {/* Project Initiatives */}
      <InitiativeSection />
      {/* Project Impacts */}
      <ImpactSection />

      {/* Shop Section */}
      {/* <section className="px-6 md:px-0 w-full bg-amber-50/50">
        <div className="mx-auto py-10 md:max-w-[68rem] flex flex-col space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-medium flex items-center justify-between">
              <span>Shop & Products</span>
              <Link href="/shops" className="px-3 py-1 bg-black text-sm text-white font-semibold">More</Link>
            </h1>
            <p>Embrace the tradition: Crafted in Africa, cherished by the world.</p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-4 gap-y-6">
            <MiniShopCard category="Consumer Electronics" count="10" link="#" image={S1}/>
            <MiniShopCard category="Foods & Gardening" count="30" link="#" image={S2}/>
            <MiniShopCard category="Automobile & Bikes" count="40" link="#" image={S3}/>
            <MiniShopCard category="Home & Office" count="40" link="#" image={S4}/>
          </div>
        </div>
      </section> */}

      {/* Shop Section */}
      {/* <section className="px-6 md:px-0 w-full bg-primary/10">
        <div className="mx-auto py-6 max-w-[68rem] flex flex-col space-y-4">
          <div className="space-y-2">
            <h1 className="text-lg md:text-2xl font-medium flex items-center justify-between">
              <span>G4A Shop </span>
              <Link href="/deals" className="px-4 py-1 bg-primary rounded-l-full text-sm text-white font-semibold">Visit Shop</Link>
            </h1>
            <p>Snag the trendiest garden equipment, seeds, supplies, and more; all handpicked by professional and experts it the fields!</p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 md:gap-y-10 gap-y-4">
            <MiniDealCard category="Consumer Electronics" categoryImage="" categoryLink="" title="Best MacBook of 2024" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="#" />
            <MiniDealCard category="Foods & Gardening" categoryImage="" categoryLink="" title="Best Garden Hose for Home Gardening in 2024" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="#" />
            <MiniDealCard category="Automobile & Bikes" categoryImage="" categoryLink="" title="Most Reviewed Electric Vehicles in 2024 " content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="#" />
            <MiniDealCard category="Home & Office" categoryImage="" categoryLink="" title="Cheapest Work From Home Office Setup in 2024" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="#" />
          </div>
        </div>
      </section> */}

      {/* Blog Categories */}
      <TopPublicationSection />
    </main>
  );
}
