import React from 'react'
import FooterNavPill from './FooterNavPill'
import Image from 'next/image'
import Logo from '@/public/g4A.png'

type Props = {}

function Footer({}: Props) {
  return (
    <div className="w-full">
      <div className="py-10 w-full bg-primary/90 text-white">
        <div className="px-3 mx-auto md:max-w-[68rem] md:h-86 space-y-10">
          <div className="flex items-center space-x-6">
            <div className="py-2 px-4 grid grid-cols-1 md:grid-cols-5 gap-y-10 gap-x-4 text-[0.8rem] font-poppins tracking-widest">
              <div className="">
                <Image src={Logo} alt="" className="shrink-0 h-36 object-contain " />
              </div>
              <FooterNavPill title="FOLLOW US" content={[{ label: 'Facebook: Garden4All', link: '#'},{ label: 'Instagram: Garden4All', link: '#'},{ label: 'X (Twitter): Garden4All', link: '#'},{ label: '@shop.G4A', link: '#'}]} />
              <FooterNavPill title="LEARN MORE" content={[{ label: 'Vision', link: '#'},{ label: 'Initiatives', link: '#'},{ label: 'Partners', link: '#'},{ label: 'Shop', link: '#'},{ label: 'Blog', link: '#'}]} />
              <FooterNavPill title="LEGAL" content={[{ label: 'Terms of Service', link: '#'},{ label: 'Privacy Policy', link: '#'},{ label: 'Cookie Policy', link: '#'}]} />
              <FooterNavPill title="SUPPORT" content={[{ label: 'Get Help', link: '#'},{ label: 'Contact Us', link: '#'}]} />
              
              {/* <form className="hidden md:flex items-center justify-between space-x-3">
                  <input type="text" placeholder="SEARCH" className="px-4 py-2.5 rounded bg-black border border-white ring-0 focus:ring-0 focus:outline-none placeholder:text-white text-xs" />
                  <button className="px-4 py-2 rounded bg-white text-black text-center tracking-widest">Search</button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer