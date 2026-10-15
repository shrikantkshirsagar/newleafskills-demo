import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sprout,
} from "lucide-react";

const footerServices = [
  {
    label: "Embroidery Digitizing",
    href: "/embroidery-digitizing-services/",
  },
  {
    label: "Computerized Embroidery",
    href: "/computerized-embroidery-services/",
  },
  {
    label: "Vestments Embroidery",
    href: "/vestments-embroidery-services/",
  },
  {
    label: "Apparel Logo Digitizing",
    href: "/apparel-logo-digitizing-service/",
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Our Work", href: "/our-work/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#23351f] text-stone-300">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="New Leaf Skills Home"
              className="inline-flex rounded-xl bg-white px-3 py-2"
            >
              <Image
                src="/NewleafLogo.png"
                alt="New Leaf Skills - Embroidery Digitizing Services"
                width={480}
                height={140}
                priority
                className="h-[65px] w-auto object-contain sm:h-[75px]"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-stone-400">
              Embroidery digitizing and computerized embroidery solutions
              for businesses, brands and creative professionals.
            </p>

            <Link
              href="/contact/"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#cbdcc4] transition hover:text-white"
            >
              Discuss your project <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-sm font-bold text-white">Explore</h2>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 transition hover:text-[#cbdcc4]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-sm font-bold text-white">Our Services</h2>
            <ul className="mt-5 space-y-3">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm leading-6 text-stone-400 transition hover:text-[#cbdcc4]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#cbdcc4] hover:text-white"
                >
                  View all services <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h2 className="text-sm font-bold text-white">Get in Touch</h2>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:info@newleafskills.com"
                className="flex items-start gap-3 text-sm text-stone-400 transition hover:text-[#cbdcc4]"
              >
                <Mail size={18} className="mt-0.5 shrink-0" />
                <span className="break-all">info@newleafskills.com</span>
              </a>

              <a
                href="tel:+919923790520"
                className="flex items-start gap-3 text-sm text-stone-400 transition hover:text-[#cbdcc4]"
              >
                <Phone size={18} className="mt-0.5 shrink-0" />
                <span>+91 99237 90520</span>
              </a>

              <div className="flex items-start gap-3 text-sm leading-6 text-stone-400">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>Nagpur, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 New Leaf Skills. All rights reserved.</p>
          <p>Craftsmanship, precision and attention to detail.</p>
        </div>
      </div>
    </footer>
  );
}
