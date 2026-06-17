import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Home, Library, Send, User } from "lucide-react";

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
    {id: 1, icon:<Home color='#2A1F14'/>, text: "Home"},
    {id: 2, icon:<User color='#2A1F14'/>, text: "About"},
    {id: 3, icon:<Library color='#2A1F14'/>, text: "Projects"},
    {id: 4, icon:<Send color='#2A1F14'/>, text: "Contacts"},
  ];

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${timesNewRomanMt.variable} font-sans antialiased`}
    >
      <body className="flex flex-col bg-editor-bg">

        <header className="fixed top-0 w-full py-5 flex items-center justify-center z-500">
          <div className="bg-editor-surface h-15 p-5 rounded-full">
            <ul className="w-full h-full flex gap-10 items-center justify-between">
              {navItems.map((item) => (
                <li key={item.id} className="flex items-center justify-center group transition ease-in-out cursor-pointer text-editor-primary font-bold">
                  <p>{item.text}</p>

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
