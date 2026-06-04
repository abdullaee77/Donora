import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SessionWrapper from "@/components/SessionWrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Donora",
  description: "Funding platform for creators",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col text-white">
        <SessionWrapper>
          <Navbar />
 <div className="relative min-h-screen w-full">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 to-black" />  <div className="relative z-10">
    {children}
  </div>
</div>

          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
