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
      <body className="flex flex-col bg-editor-bg">

        <header className="fixed top-0 w-full py-5 flex items-center justify-center z-500">
          <Image src={"/editor_logo/dark_nobg.png"} alt={"Logo"} width={100} height={100} loading="eager"/>
          <div className="bg-editor-surface/30 backdrop-blur-3xl h-15 p-5 rounded-full">
            <ul className="w-full h-full flex gap-10 items-center justify-between">
              {navItems.map((item) => (
                <li key={item.id} className="flex items-center justify-center group transition ease-in-out cursor-pointer text-editor-primary font-bold">
                  <Link href={`#${item.link}`}><p>{item.text}</p></Link>
                  <div className="absolute bottom-0 font-bold transition ease-in-out -translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-3 border-0 px-2 py-1 rounded-full drop-shadow-[0px_0px_20px] drop-shadow-editor-bg">
                    {item.icon}
                  </div>
                  
              </li>
              ))}
            </ul>
          </div>
        </header>

        <main className="bg-editor-bg w-full">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
