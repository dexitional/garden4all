import ReviewCard from "@/components/ReviewCard";
import ReviewPageCard from "@/components/ReviewPageCard";
import P1 from '@/public/rolex1.jpg'
import P2 from '@/public/rolex2.jpg'
import P3 from '@/public/rolex3.jpg'
import P4 from '@/public/rolex4.jpg'
import G1 from '@/public/gucci1.jpg'
import G2 from '@/public/gucci2.jpg'
import X from '@/public/ps5.jpg'

export default function Home() {
  return (
    <main className="">
      <section className="px-6 md:px-0 w-full border-b-2 bg-gradient-to-r from-slate-300 via-white to-slate-200">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center min-h-36 md:min-h-48 space-y-4">
          <h1 className="text-lg md:text-2xl font-satisy tracking-wider">Timeless Luxury: Unveiling the Rolex Oyster Perpetual Datejust.</h1>
          <p className="font-satisfy md:text-xl">Products &  Reviews</p>
        </div>
      </section>
      <section className="px-6 md:px-0 mb-10 w-full">
        <div className="mx-auto py-10 md:max-w-[68rem] flex flex-col space-y-4">
          <ReviewPageCard category="Consumer Electronics" categoryImage="" categoryLink="" title="Best MacBook of 2024" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="#" />
        </div>
      </section>
        
      <section className="px-6 md:px-0 mb-10 w-full">
        <div className="mx-auto py-10 md:max-w-[68rem] flex flex-col space-y-4">
          <div className="space-y-2 border-b border-black">
            <h1 className="md:text-xl font-medium flex items-center justify-between">
              <span className="">Most Recent Reviews</span>
              <button className="px-2 md:px-3 py-1 bg-black text-xs md:text-sm text-white font-semibold">More</button>
            </h1>
            {/* <p>Snag the trendiest kid-approved styles, school supplies, and more; all handpicked by your favorite creators!</p> */}
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-10">
            <ReviewCard category="Wearables & Watches" categoryImage="" categoryLink="" title="Timeless Luxury: Unveiling the Rolex Oyster Perpetual Datejust" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1" image={P1} />
            <ReviewCard category="Wearables & Watches" categoryImage="" categoryLink="" title="Is the Rolex Datejust Worth the Hype? A Detailed Review" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={P2}/>
            <ReviewCard category="Wearables & Watches" categoryImage="" categoryLink="" title="Investing in Timelessness: A Review of the Rolex Oyster Perpetual Datejus" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={P3}/>
            <ReviewCard category="Wearables & Watches" categoryImage="" categoryLink="" title="The Rolex Datejust: Unmatched Craftsmanship for Everyday Luxury" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={P4}/>
            
          </div>
        </div>
      </section>
     
     
    </main>
  );
}
