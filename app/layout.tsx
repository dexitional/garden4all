import type { Metadata, ResolvingMetadata } from "next";
import { Inter, Satisfy,Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const satisfy = Satisfy({ subsets: ["latin"], variable: '--font-satisfy', weight: "400" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: '--font-dancing', weight: ["400","500","600","700"] });

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  //const id = params.id
  //const previousImages = (await parent).openGraph?.images || []
  
  // const settings:any = fetchSettings();
  // {`settings?.attributes?.siteName}
  // settings?.attributes?.siteDescription


  return {
    title: "Garden4All.org",
    description: "Garden For All (G44) is a non-profit agency registered in Ghana with the mission to educate and support African households and institutions in their sustainable production and use of healthy foods.",
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satisfy.variable} ${dancing.variable} ${inter.variable} `}>
      <body>
        <div className="flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
