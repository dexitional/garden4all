import Image from "next/image";
import Spotbg from '../public/world3.png';
import ReviewCard from "@/components/ReviewCard";
import MiniShopCard from "@/components/MiniShopCard";
import MiniDealCard from "@/components/MiniDealCard";
import P1 from '@/public/tree1.webp'
import P2 from '@/public/tree2.webp'
import P3 from '@/public/rolex3.jpg'
import P4 from '@/public/rolex4.jpg'
import S1 from '@/public/shea1.jpg'
import S2 from '@/public/shea2.jpg'
import S3 from '@/public/shea3.jpg'
import S4 from '@/public/soap1.jpg'
import S5 from '@/public/soap2.jpg'
import G1 from '@/public/tree3.jpg'
import G2 from '@/public/gucci2.jpg'
import X from '@/public/ps5.jpg'
import Link from "next/link";
import ProjectMiniCard from "@/components/ProjectMiniCard";





export default function Home() {
  return (
    <main className="z-1">
      {/* Spotlight Section */}
      <section className="px-3 md:px-0 w-full bg-gradient-to-r from-primary/10 via-white to-primary/30">
        <div className="mx-auto py-10 md:max-w-[68rem] h-[32rem] grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center space-y-10">
            <h1 className="text-4xl md:text-8xl font-dancing tracking-wider">G4A</h1>
            <p className="md:text-2xl">Project Garden4All is a non-profit society enabling rural and urban communities in Africa to choose their way in the sustainable production through gardening and the use of healthy foods.</p>
          </div>
          <div className="relative">
            <Image src={Spotbg} alt="Spotlight Image" className="h-full object-contain backdrop-filter  saturate-50 hue-rotate-60"/>
          </div>
        </div>
      </section>
      
      {/* Aquaculture Section */}
      {/* BeeKeeping Section */}
      {/* Animal Husbandary Section */}
      {/* Aquaculture Section */}
      {/* Aquaculture Section */}
      
      {/* Project Initiatives */}
      <section className="px-6 md:px-0 w-full">
        <div className="mx-auto py-10 max-w-[68rem] flex flex-col space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-medium flex items-center justify-between">
              <span className="px-6 py-2 bg-primary text-white rounded-r-full">Projects & Initiatives</span>
              <Link href="/intiatives" className="px-3 py-1 bg-black text-sm text-white font-semibold">More</Link>
            </h1>
            <p>Well reviewed products from trusted brands.</p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-10">
            <ProjectMiniCard title="Timeless Luxury: Unveiling the Rolex Oyster Perpetual Datejust" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1" image={P1} />
            <ProjectMiniCard title="Investing in Timelessness: A Review of the Rolex Oyster Perpetual Datejus" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={G1}/>
            <ProjectMiniCard title="The Rolex Datejust: Unmatched Craftsmanship for Everyday Luxury" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={P2}/>
          </div>
        </div>
      </section>

      {/* Project Impacts */}
      <section className="px-6 md:px-0 w-full">
        <div className="mx-auto py-6 max-w-[68rem] flex flex-col space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-medium flex items-center justify-between">
              <span className="px-6 py-2 bg-primary text-white rounded-r-full">Project Impact & Stories</span>
              <Link href="/reviews" className="px-3 py-1 bg-black text-sm text-white font-semibold">More</Link>
            </h1>
            <p>Well reviewed products from trusted brands.</p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-10">
            <ProjectMiniCard title="Timeless Luxury: Unveiling the Rolex Oyster Perpetual Datejust" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1" image={P1} />
            <ProjectMiniCard title="Is the Rolex Datejust Worth the Hype? A Detailed Review" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={P2}/>
            <ProjectMiniCard title="Investing in Timelessness: A Review of the Rolex Oyster Perpetual Datejus" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={G1}/>
            <ProjectMiniCard title="The Rolex Datejust: Unmatched Craftsmanship for Everyday Luxury" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={P2}/>
          </div>
        </div>
      </section>
      
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
      <section className="px-6 md:px-0 w-full bg-primary/10">
        <div className="mx-auto py-6 max-w-[68rem] flex flex-col space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-medium flex items-center justify-between">
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
      </section>

     

      {/* Blog Categories */}
      <section className="px-6 md:px-0 w-full">
        <div className="mx-auto py-6 max-w-[68rem] flex flex-col space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-medium flex items-center justify-between">
              <span className="px-6 py-2 bg-primary text-white rounded-r-full">Top Publicationsip <a href=""></a></span>
              <Link href="/reviews" className="px-3 py-1 bg-black text-sm text-white font-semibold">Goto Blog</Link>
            </h1>
            <p>Well reviewed articles for potential gardeners and farmers.</p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-10">
            <ReviewCard category="Crops in Home Garden" categoryImage="" categoryLink="" title="Timeless Luxury: Unveiling the Rolex Oyster Perpetual Datejust" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1" image={P1} />
            <ReviewCard category="Pests & Disease Control" categoryImage="" categoryLink="" title="Is the Rolex Datejust Worth the Hype? A Detailed Review" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={P2}/>
            <ReviewCard category="Animal Production" categoryImage="" categoryLink="" title="Investing in Timelessness: A Review of the Rolex Oyster Perpetual Datejus" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={G1}/>
            <ReviewCard category="Aquaculture" categoryImage="" categoryLink="" title="The Rolex Datejust: Unmatched Craftsmanship for Everyday Luxury" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={P1}/>
          </div>
        </div>
      </section>
     
    </main>
  );
}
