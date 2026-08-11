import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

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
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${timesNewRomanMt.variable} ${bebas.variable} font-sans antialiased`}
    >
      <body className="flex flex-col bg-editor-bg overflow-x-hidden min-h-screen">
        <div className="flex flex-col w-full min-h-screen">
          <Header />
          <main className="bg-editor-bg w-full flex-1">{children}</main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
