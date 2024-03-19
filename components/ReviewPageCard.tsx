import Link from 'next/link';
import React from 'react'
import P1 from '@/public/rolex1.jpg'
import Image from 'next/image';

type Props = {
   category?: string;
   categoryImage?: React.ReactNode;
   categoryLink?: string;
   title?: string;
   content?: string;
   link?: string;
}

function ReviewPageCard({ category,categoryImage,categoryLink,title,content,link}: Props) {
  return (
    <div className="flex flex-col space-y-2 md:space-y-10">
      <div className="w-full flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-6">
          <div className=" shrink-0 md:w-1/3 flex flex-col space-y-10">
            <Image alt="" src={P1} className="md:border-none border border-x border-black h-64 w-full bg-slate-200 rounded" />
            <Link href="https://amazon.com" className="px-3 py-2 rounded-full border-2 border-black  bg-gradient-to-r from-slate-100 via-white to-slate-100 text-center text-lg font-medium">Buy Product</Link>
          </div>
          
          <div className="space-y-3">
            <div className="text-base md:text-lg font-medium space-y-4 leading-7">
              {/* {content} */}
              <h3>A Timeless Classic: A Review of the Rolex Oyster Perpetual Datejust</h3>
              <p>Rolex, synonymous with luxury and prestige, has carved a niche in the watchmaking world. Today, we delve into the iconic Rolex Oyster Perpetual Datejust, a timepiece that embodies the brand's core values of quality, heritage, and enduring style.</p>
              <h3>Unmatched Craftsmanship:</h3>
              <p>The Datejust boasts a robust 904L stainless steel construction, renowned for its superior corrosion resistance. The watch feels solid and meticulously crafted, a testament to Rolex's commitment to exceptional build quality.</p>
            </div>
           
          </div>
      </div>
      <div className="md:text-lg text-gray-600  space-y-2">
        <h3>Timeless Design:</h3>
        <p>The design language is one of understated elegance. The classic round case, the signature fluted bezel, and the easily recognizable Rolex crown contribute to the watch's enduring appeal. The watch transcends fleeting trends, offering a sophisticated aesthetic that remains relevant for decades.</p>
            
        <h3>Verdict:</h3>
        <p>The Rolex Oyster Perpetual Datejust is a watchmaking marvel. It offers exceptional craftsmanship, a timeless design, and reliable performance, justifying its status as a luxury icon. While the price might be a deterrent for some, for those seeking a watch that embodies heritage, quality, and enduring style, the Datejust stands as a compelling choice.</p>
        <p>Note: This review focuses on the core aspects of the watch.</p>
        <p>
            You can tailor it further by specifying the particular model (e.g., Datejust 41mm with blue dial).
            Mention additional features like the date complication or the option for different strap materials (Oyster bracelet or Jubilee bracelet).
            Briefly touch upon the brand's after-sales service, known for its quality and exclusivity.
            Overall, this review provides a balanced perspective on the Rolex Oyster Perpetual Datejust, highlighting its strengths while acknowledging the price factor.
        </p>

      </div>
    </div>
  )
}

export default ReviewPageCard