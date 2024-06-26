import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import "@/globals.css";
import clsx from "clsx";
import Image from "next/image";
import LayoutHeader from "@/components/LayoutHeader";
import LayoutFooter from "@/components/LayoutFooter";

const inter = Montserrat({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://popcaty.vercel.app"),
  title: "PopCaty | Meme for cats",
  description: "This is a meme for undercats. Let's go to the moon now.",
  openGraph: {
    images: ["/bonk.png"]
  }
};

export const viewport: Viewport = {
  themeColor: "#fccd53"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "fixed inset-0 flex flex-col")}>
        <div className="flex-1 flex flex-col">
          <LayoutHeader />
          <div className="flex-1 flex flex-col">{children}</div>
          <LayoutFooter />
        </div>
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/70 to-primary-dark/70 backdrop-blur-3xl" />
          <Image
            width={512}
            height={512}
            alt="PopCaty"
            src="/bonk.png"
            className="absolute blur-xl"
          />
        </div>
      </body>
    </html>
  );
}
