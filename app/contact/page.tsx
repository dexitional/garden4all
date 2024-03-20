import Image from "next/image";
import Spotbg from '@/public/webmap.webp';
import ReviewCard from "@/components/ReviewCard";
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
      {/* Review Main Section */}
      <section className="px-6 md:px-0 w-full  border-b-2 bg-gradient-to-r from-primary/20 via-white to-primary/30">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center min-h-32 md:h-36 space-y-2">
          <h1 className="text-xl md:text-4xl font-satisy tracking-wider text-primary">CONTACT US</h1>
          <p className="font-satisfy md:text-lg font-bold uppercase tracking-wider">Please Get in Touch with G4A</p>
        </div>
      </section>
        
      <section className="px-6 md:px-0 mb-10 w-full">
        <div className="mx-auto py-10 max-w-[68rem] flex flex-col space-y-4">
         <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-10">
            <ReviewCard category="Wearables & Watches" categoryImage="" categoryLink="" title="Timeless Luxury: Unveiling the Rolex Oyster Perpetual Datejust" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1" image={P1} />
            <ReviewCard category="Wearables & Watches" categoryImage="" categoryLink="" title="Is the Rolex Datejust Worth the Hype? A Detailed Review" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={P2}/>
            <ReviewCard category="Wearables & Watches" categoryImage="" categoryLink="" title="Investing in Timelessness: A Review of the Rolex Oyster Perpetual Datejus" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={P3}/>
            <ReviewCard category="Wearables & Watches" categoryImage="" categoryLink="" title="The Rolex Datejust: Unmatched Craftsmanship for Everyday Luxury" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={P4}/>
            <ReviewCard category="Wearables" categoryImage="" categoryLink="" title="Timeless Luxury: Unveiling the Rolex Oyster Perpetual Datejust" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1" image={G1} />
            <ReviewCard category="Wearables" categoryImage="" categoryLink="" title="Is the Rolex Datejust Worth the Hype? A Detailed Review" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={G2}/>
            <ReviewCard category="Games & Consoles" categoryImage="" categoryLink="" title="Investing in Timelessness: A Review of the Rolex Oyster Perpetual Datejus" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={X}/>
            <ReviewCard category="Watches" categoryImage="" categoryLink="" title="The Rolex Datejust: Unmatched Craftsmanship for Everyday Luxury" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="/reviews/test1"  image={P4}/>
          </div>
        </div>
      </section>
      
     
    </main>
  );
}
