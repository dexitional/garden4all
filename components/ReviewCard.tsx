import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

type Props = {
   category?: string;
   categoryImage?: any;
   image?: any;
   categoryLink?: string;
   title?: string;
   content?: string;
   link?: string;
}

function ReviewCard({ category,categoryImage,categoryLink,title,content,link,image}: Props) {
  return (
    <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-slate-100"></div>
            <span>{category}</span>
        </div>
        <Image alt="" src={image} className="mx-auto md:m-0 w-full h-36 bg-white border border-slate-200 rounded object-cover object-left-top" />

        <div className="space-y-3">
            <Link href=""><h2 className="text-base font-medium">{title}</h2></Link>
            <p className="text-sm line-clamp-5">{content}</p>
            <Link href={link || '#'} className="px-4 border border-black text-sm inline-block">
              <span>Read More +  </span>
            </Link>
        </div>
    </div>
  )
}

export default ReviewCard