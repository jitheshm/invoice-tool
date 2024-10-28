import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import Navbar from "@/components/Navbar";
import StoreProvider from "./StoreProvider";
import Footer from "@/components/Footer";

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900']
})



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}  antialiased`}
      >
        <StoreProvider>
          <div className="md:w-11/12  mx-auto min-h-screen">
            <Navbar />

            {children}
          </div>
          <Footer/>
        </StoreProvider>
      </body>
    </html>
  );
}
