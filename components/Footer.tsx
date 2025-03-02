import Logo from "@/public/g4A.png";
import Image from "next/image";

type Props = {};

async function Footer({}: Props) {
  // const nav = await fetchFootNav();
  return (
    <div className="w-full">
      <div className="py-10 w-full bg-primary/90 text-white">
        <div className="px-3 mx-auto md:max-w-[68rem] md:h-86 space-y-10">
          <div className="flex items-center space-x-6">
            <div className="py-2 px-4 grid grid-cols-1 md:grid-cols-5 gap-y-10 gap-x-4 text-[0.8rem] font-poppins tracking-widest">
              <div className="">
                <Image
                  src={Logo}
                  alt=""
                  className="shrink-0 h-36 object-contain "
                />
              </div>
              {/* { nav?.map((r:any) =>(
                <FooterNavPill key={r?.id } title={r?.attributes?.label} content={r?.attributes?.menus.map(((v:any) => ({ label: v?.label, link: v?.link })))} />
              ))} */}

              <div className="space-y-3 md:space-y-6">
                <h2 className="text-sm tracking-wider font-medium">
                  FOLLOW US
                </h2>
                <nav className="flex flex-col space-y-2 md:space-y-4">
                  <a className="" href="#">
                    Facebook: Garden4All
                  </a>
                  <a className="" href="#">
                    Instagram: Garden4All
                  </a>
                  <a className="" href="#">
                    X (Twitter): Garden4All
                  </a>
                  <a className="" href="#">
                    @shop.G4A
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
