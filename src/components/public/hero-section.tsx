"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";

const slides = [
  {
    eyebrow: "EMBROIDERY DIGITIZING",
    title: "Every design deserves",
    highlight: "a perfect stitch.",
    description:
      "Transform logos and artwork into carefully planned, machine-ready embroidery designs.",
    image:
      "https://newleafskills.com/wp-content/uploads/2023/01/Embroidery-Service-Nagpur.jpg",
  },
  {
    eyebrow: "CUSTOM LOGO DIGITIZING",
    title: "Your brand,",
    highlight: "beautifully stitched.",
    description:
      "Create distinctive embroidered logos for apparel, uniforms, sportswear and business branding.",
    image:
      "https://newleafskills.com/wp-content/uploads/2026/06/Custom-Logo-Digitizing.png",
  },
  {
    eyebrow: "COMPUTERIZED EMBROIDERY",
    title: "Creativity meets",
    highlight: "craftsmanship.",
    description:
      "Discover embroidery solutions where thoughtful design and production requirements come together.",
    image:
      "https://newleafskills.com/wp-content/uploads/2026/06/3D-Puff-Digitizing.png",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f8f0]">
      <div className="pointer-events-none absolute -left-32 -top-28 -z-10 h-96 w-96 rounded-full bg-[#dcebd7]/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-96 w-96 rounded-full bg-[#e8efe0] blur-3xl" />

      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div key={slide.eyebrow} className="animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#cbdcc4] bg-white/80 px-4 py-2 text-[11px] font-bold tracking-[0.16em] text-[#36512a]">
            <Sparkles size={15} className="text-[#628747]" />
            {slide.eyebrow}
          </span>

          <h1 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-[#23351f] sm:text-5xl lg:text-6xl">
            {slide.title}
            <span className="mt-2 block font-serif italic text-[#628747]">
              {slide.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
            {slide.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact/#quote"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#52763a] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#36512a]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#36512a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#628747]"
            >
              Request a Quote <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/our-work/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#cbdcc4] bg-white px-6 py-3.5 text-sm font-semibold text-[#36512a] transition hover:border-[#628747] hover:bg-[#f5f8f0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#628747]"
            >
              Explore Our Work <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-stone-600">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-[#628747]" />
              Quality-focused workflow
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-[#628747]" />
              Worldwide client support
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[570px]">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-[#c8ddbe]/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2.5 shadow-2xl shadow-[#36512a]/15">
            <div
              key={slide.image}
              role="img"
              aria-label={slide.eyebrow}
              className="hero-slide-image relative min-h-[380px] rounded-[1.5rem] bg-cover bg-center sm:min-h-[490px]"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(17,35,16,0.02) 25%, rgba(17,35,16,0.72) 100%), url("${slide.image}")`,
              }}
            >
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#d9efca]">
                  The art behind every stitch
                </span>
                <h2 className="mt-3 max-w-sm text-2xl font-semibold leading-snug sm:text-3xl">
                  Made with care.
                  <br />
                  Refined through experience.
                </h2>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-2 max-w-[255px] rounded-2xl border border-[#e0e8da] bg-white p-4 shadow-xl sm:-left-7">
            <p className="text-sm font-bold text-[#23351f]">Design to production</p>
            <p className="mt-1 text-xs leading-5 text-stone-500">
              Thoughtful digitizing for your embroidery workflow
            </p>
          </div>

          <div className="absolute right-3 top-5 hidden rounded-xl border border-white/80 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:block">
            <p className="text-xs font-bold text-[#36512a]">Detail matters</p>
            <p className="mt-1 text-[10px] text-stone-500">Quality-led approach</p>
          </div>

          <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3 py-2 shadow-lg">
            {slides.map((item, index) => (
              <button
                key={item.eyebrow}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-7 bg-[#52763a]"
                    : "w-2.5 bg-stone-300 hover:bg-[#628747]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#dfe8d9] bg-white/80">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:grid-cols-3 sm:px-8">
          {[
            { value: "22+ Years", detail: "Industry experience" },
            { value: "Machine-ready", detail: "Production-focused digitizing" },
            { value: "Worldwide", detail: "Support for embroidery businesses" },
          ].map((item) => (
            <div key={item.value} className="flex items-center gap-3">
              <span className="h-9 w-1 rounded-full bg-[#79a365]" />
              <div>
                <p className="font-semibold text-[#36512a]">{item.value}</p>
                <p className="mt-1 text-xs text-stone-500">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}