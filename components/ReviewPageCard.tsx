import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image?: any;
  children?: React.ReactNode;
};

function ReviewPageCard({ title, image, children }: Props) {
  return (
    <div className="flex flex-col space-y-2 md:space-y-10">
      <div className="relative h-52 md:h-[26rem] w-full border rounded-xl overflow-hidden">
        <Image
          alt={title}
          src={image}
          className="w-full object-cover object-left-top bg-slate-200 rounded"
          fill
        />
      </div>
      <div
        className={`
      text-gray-600 leading-8 text-xl font-normal 
        [&_p]:mt-6
        [&_h3]:mt-10 [&_h3]:font-medium [&_h3]:text-2xl [&_h3]:text-primary
      `}
      >
        {children}
      </div>
    </div>
  );
}

export default ReviewPageCard;
