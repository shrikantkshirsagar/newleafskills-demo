
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newleafskills.com"),
  title: {
    default: "New Leaf Skills | Embroidery Digitizing Services",
    template: "%s | New Leaf Skills",
  },
  description:
    "Explore embroidery digitizing, computerized embroidery, vestments embroidery and apparel logo digitizing services from New Leaf Skills.",
  applicationName: "New Leaf Skills",
  openGraph: {
    title: "New Leaf Skills | Embroidery Digitizing Services",
    description:
      "Professional embroidery digitizing and embroidery design services.",
    url: "https://newleafskills.com",
    siteName: "New Leaf Skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}

