import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Sprout,
  X,
} from "lucide-react";

const services = [
  {
    label: "Embroidery Digitizing Services",
    href: "/embroidery-digitizing-services/",
  },
  {
    label: "Computerized Embroidery",
    href: "/computerized-embroidery-services/",
  },
  {
    label: "Vestments Embroidery Services",
    href: "/vestments-embroidery-services/",
  },
  {
    label: "Apparel Logo Digitizing",
    href: "/apparel-logo-digitizing-service/",
  },
];

const links = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "Our Work", href: "/our-work/" },
  { label: "Contact", href: "/contact/" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#cbdcc4]/80 bg-white/95 backdrop-blur-xl">
      {/* Announcement bar */}
      <div className="bg-[#36512a] px-4 py-2 text-center text-[11px] font-medium tracking-wide text-white sm:text-xs">
        Professional Embroidery Digitizing · Quality in Every Stitch
      </div>

      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        {/* Brand */}
        <Link href="/" aria-label="New Leaf Skills Home">
            <Image
                src="/NewleafLogo.png"
                alt="New Leaf Skills - Embroidery Digitizing Services"
                width={480}
                height={140}
                priority
                className="h-[65px] w-auto object-contain sm:h-[75px]"
            />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-700 transition-colors hover:text-[#52763a]"
            >
              {link.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 py-3 text-sm font-medium text-stone-700 transition-colors hover:text-[#52763a]">
              Services
              <ChevronDown
                size={15}
                className="transition-transform group-open:rotate-180"
              />
            </summary>

            <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 rounded-2xl border border-[#cbdcc4] bg-white p-2 shadow-xl shadow-stone-900/10">
              <Link
                href="/services/"
                className="mb-1 flex items-center justify-between rounded-xl bg-[#f5f8f0] px-4 py-3 text-sm font-bold text-[#36512a] transition-colors hover:bg-[#eaf1e4]"
              >
                All Services <ArrowUpRight size={16} />
              </Link>

              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block rounded-xl px-4 py-3 text-sm leading-5 text-stone-600 transition-colors hover:bg-[#f5f8f0] hover:text-[#52763a]"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </details>

          {links.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-700 transition-colors hover:text-[#52763a]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact/#quote"
            className="inline-flex items-center gap-2 rounded-xl bg-[#52763a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#36512a]/10 transition-all hover:-translate-y-0.5 hover:bg-[#36512a]"
          >
            Request a Quote <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile navigation */}
        <details className="group relative lg:hidden">
          <summary
            aria-label="Toggle mobile navigation"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-[#cbdcc4] text-[#36512a] transition-colors hover:bg-[#f5f8f0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#628747]"
          >
            <Menu size={22} className="group-open:hidden" />
            <X size={22} className="hidden group-open:block" />
          </summary>

          <div className="absolute right-0 top-14 z-50 max-h-[80vh] w-[min(88vw,360px)] overflow-y-auto rounded-2xl border border-[#cbdcc4] bg-white p-3 shadow-2xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-[#f5f8f0] hover:text-[#52763a]"
              >
                {link.label}
              </Link>
            ))}

            <details className="group/services">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-stone-700 hover:bg-[#f5f8f0]">
                Services
                <ChevronDown
                  size={16}
                  className="transition-transform group-open/services:rotate-180"
                />
              </summary>

              <div className="ml-3 border-l border-[#cbdcc4] pl-3">
                <Link
                  href="/services/"
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#52763a]"
                >
                  All Services
                </Link>

                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block rounded-lg px-3 py-2.5 text-sm leading-5 text-stone-600 hover:bg-[#f5f8f0]"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href="/contact/#quote"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#52763a] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#36512a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#628747]"
            >
              Request a Quote <ArrowUpRight size={16} />
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
