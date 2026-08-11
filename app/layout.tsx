import type { Metadata } from "next";
import Image from "next/image";
import { Poppins, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Home, Library, Send, User } from "lucide-react";
import Link from "next/link";

const timesNewRomanMt = localFont({
   src: [
    {
      path: '../public/fonts/TimesNewRomanMtRegular.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-times-mt',
  adjustFontFallback: 'Times New Roman',
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Buwie Santos",
  description: "Projects by Buwie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {id: 1, icon:<Home color='#2A1F14'/>, text: "Home", link: "home"}, 
    {id: 2, icon:<User color='#2A1F14'/>, text: "About",link: "about"},
    {id: 3, icon:<Library color='#2A1F14'/>, text: "Projects", link: "projects"},
    {id: 4, icon:<Send color='#2A1F14'/>, text: "Contacts", link: "contacts"},
  ];

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${timesNewRomanMt.variable} ${bebas.variable} font-sans antialiased`}
    >
      <body className="flex flex-col bg-editor-bg overflow-x-hidden min-h-screen">
        <div className="flex flex-col w-full min-h-screen">
          <header className="fixed top-0 w-full py-3 sm:py-5 px-4 flex items-center justify-center z-[500] pointer-events-none">
            <div className="flex items-center justify-center gap-2 sm:gap-4 pointer-events-auto max-w-[95vw] sm:max-w-none">
              <Image 
                src={"/editor_logo/dark_nobg.png"} 
                alt={"Logo"} 
                width={80} 
                height={80} 
                loading="eager"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain shrink-0"
              />
              <div className="bg-editor-surface/30 backdrop-blur-3xl h-11 sm:h-15 px-4 sm:px-6 py-2 sm:py-5 rounded-full border border-editor-surface/20 shadow-lg">
                <ul className="w-full h-full flex gap-3 sm:gap-6 md:gap-10 items-center justify-between">
                  {navItems.map((item) => (
                    <li key={item.id} className="relative flex items-center justify-center group transition ease-in-out cursor-pointer text-editor-primary font-bold text-xs sm:text-sm md:text-base">
                      <Link href={`#${item.link}`}><p className="px-1 sm:px-2">{item.text}</p></Link>
                      <div className="absolute bottom-0 font-bold transition ease-in-out -translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-3 border-0 px-2 py-1 rounded-full drop-shadow-[0px_0px_20px] drop-shadow-editor-bg pointer-events-none z-10">
                        {item.icon}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </header>

          <main className="bg-editor-bg w-full flex-1">{children}</main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
