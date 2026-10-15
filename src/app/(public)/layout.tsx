
import type { ReactNode } from "react";
import SiteHeader from "@/components/Header/site-header";
import SiteFooter from "@/components/Footer/site-footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
