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
});

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
  title: "Buhawie Santos | Web Developer & Frontend Engineer",
  description: "Portfolio of Buhawie Santos, IT graduate skilled in React, Next.js, Python, Tailwind CSS, and full-stack web application development.",
  openGraph: {
    title: "Buhawie Santos - Web Developer Portfolio",
    description: "Explore web projects, technical skills, and software development experience by Buhawie Santos.",
    url: "https://buhawiesit.vercel.app/",
    siteName: "Buhawie Santos Portfolio",
    locale: "en_US",
    type: "website",
  },
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
          <footer className="w-full bg-editor-primary text-editor-bg/80 border-t border-editor-surface/20 py-10 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-poppins">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
                <span className="font-bebas text-2xl text-editor-bg tracking-wider">Buhawie Santos</span>
                <span className="hidden sm:inline text-editor-surface/40">|</span>
                <span className="text-editor-bg/60 font-medium">Frontend Developer · Cinematographer</span>
              </div>
              
              <div className="flex items-center gap-5 sm:gap-6 font-semibold flex-wrap justify-center">
                <a href="#home" className="hover:text-editor-surface transition-colors">Home</a>
                <a href="#about" className="hover:text-editor-surface transition-colors">About</a>
                <a href="#experience" className="hover:text-editor-surface transition-colors">Experience</a>
                <a href="#projects" className="hover:text-editor-surface transition-colors">Projects</a>
                <a href="#contacts" className="hover:text-editor-surface transition-colors">Contacts</a>
              </div>

              <div className="text-editor-bg/50 text-[11px] text-center sm:text-right">
                <p>© 2026 Buhawie Santos. Editorial Craft & Code.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
