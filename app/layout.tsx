import type { Metadata } from "next";
import { Inter, Satisfy,Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const satisfy = Satisfy({ subsets: ["latin"], variable: '--font-satisfy', weight: "400" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: '--font-dancing', weight: ["400","500","600","700"] });

export const metadata: Metadata = {
  title: "Project Garden4All.org",
  description: "Best reviews and products you trust",
};

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
