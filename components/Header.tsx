import Logo from '@/public/g4A.png'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'

type Props = {}

async function Header({}: Props) {
  //const settings = await fetchSettings();
  //const nav = await fetchMainNav();
  return (
    <div className="z-10 w-full">
        {/* Top Nav */}
        <div className="w-full">
            <div className="mx-auto px-2 md:pl-40 h-10 md:max-w-[68rem] flex flex-col md:flex-row items-center justify-center md:justify-between">
                <span className="text-xs md:text-sm"><b className="text-green-800">G4A</b> - <em className="">Safe Food For Every Home.</em></span>
                <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold tracking-widest text-green-800">
                   <Link href="#">Projects</Link>
                   <Link href="#">Sponsors</Link>
                   <Link href="#">Donate</Link>
                </nav>
            </div>
        </div>
        {/* Main Nav */}
        <div className="w-full bg-primary/90 text-white">
            <div className="mx-auto px-3 max-w-[68rem] h-16 flex items-center justify-between">
                <div className="w-full h-full flex items-center space-x-6">
                    <Link href="/" className="shrink-0">
                      <Image src={Logo} alt="" className="h-20 md:h-28 w-fit object-contain rounded-full shadow-md shadow-white" />
                    </Link>
                    <nav className="w-full h-12 md:h-20 hidden md:flex items-center justify-between text-xs font-semibold font-inter tracking-widest">
                        {/* <Link href="#" className="px-4 py-2 w-fit h-full flex items-center justify-center border-b-2 border-white space-x-1"><span>SHOP</span><sub className="text-amber-100 text-[0.55rem]">Now!</sub></Link> */}
                        <div className="px-4 h-10 hidden md:flex items-center rounded-full bg-green-800/60 text-amber-100 saturate-50">
                            <Link href="#" className="px-2 py-2 w-fit h-full flex items-center justify-center">ABOUT</Link>
                            <Link href="#" className="px-2 py-2 w-fit h-full flex items-center justify-center">IMPACT</Link>
                            <Link href="/contact" className="px-2 py-2 w-fit h-full flex items-center justify-center">CONTACT</Link>   
                           
                        </div>
                        <div className="relative flex items-center space-between">
                            <span className="absolute -translate-y-[50%] top-1/2 -right-16 px-2 py-0.5 bg-white/70 text-primary">SHOP</span>
                            <Link href="#" className="px-4 py-2 w-fit h-full flex items-center justify-center">CROPS</Link>
                            <Link href="#" className="px-4 py-2 w-fit h-full flex items-center justify-center">SOIL</Link>
                            <Link href="#" className="px-4 py-2 w-fit h-full flex items-center justify-center">PESTS/DISEASE</Link>
                            <Link href="#" className="px-4 py-2 w-fit h-full flex items-center justify-center">ANIMALS</Link>
                            <Link href="#" className="px-4 py-2 w-fit h-full flex items-center justify-center">AQUACULTURE</Link>
                            <Link href="#" className="px-4 py-2 w-fit h-full flex items-center justify-center">EPICULTURE</Link>
                           
                        </div>
                    </nav>
                </div>
                {/* <form className="hidden md:flex items-center justify-between space-x-3">
                  <input type="text" placeholder="SEARCH" className="px-4 py-2.5 rounded bg-primary border border-white ring-0 focus:ring-0 focus:outline-none placeholder:text-white text-xs" />
                  <button className="px-4 py-2 rounded bg-white text-primary text-center tracking-widest">Search</button>
                </form> */}
                <MobileNav />
            </div>
        </div>

    </div>
  )
}

export default Header