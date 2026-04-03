import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ScrollController from "./components/ScrollController";
import Footer from "./components/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JAIN MANDIR",
  description: "Join us in our journey of spiritual growth and community service.",
   icons: {
    icon: "/header/jain_logo.png", 
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
      className={`${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-raleway">
        {/* <Header /> */}
        <main className="flex-grow">{children}</main>
        <ScrollController />
        {/* <Footer/> */}
      </body>
    </html>
  );
}
