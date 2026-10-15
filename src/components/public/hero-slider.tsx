"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";

const slides = [
  {
    eyebrow: "Embroidery expertise, thoughtfully delivered",
    title: "Every design deserves",
    highlight: "a perfect stitch.",
    description:
      "Professional embroidery digitizing and computerized embroidery solutions that turn creative ideas into production-ready designs.",
    image:
      "https://newleafskills.com/wp-content/uploads/2023/01/Embroidery-Service-Nagpur.jpg",
    imageAlt: "Embroidery production and design studio",
    tag: "The art behind every stitch",
    heading: "Made with care.",
    subheading: "Refined through experience.",
    primaryText: "Request a Quote",
    primaryHref: "/contact/#quote",
    secondaryText: "Explore Our Work",
    secondaryHref: "/our-work/",
  },
  {
    eyebrow: "Precision in every detail",
    title: "From artwork to",
    highlight: "machine-ready design.",
    description:
      "Thoughtful stitch planning for logos, apparel, uniforms and custom embroidery requirements.",
    image:
      "https://newleafskills.com/wp-content/uploads/2026/06/Custom-Logo-Digitizing.png",
    imageAlt: "Custom logo digitizing artwork",
    tag: "Designed around your needs",
    heading: "Your artwork.",
    subheading: "Prepared for production.",
    primaryText: "Discuss Your Project",
    primaryHref: "/contact/#quote",
    secondaryText: "Our Services",
    secondaryHref: "/services/",
  },
  {
    eyebrow: "Craftsmanship meets technology",
    title: "Small details.",
    highlight: "Lasting impressions.",
    description:
      "Explore embroidery solutions focused on design quality, production requirements and customer support.",
    image:
      "https://newleafskills.com/wp-content/uploads/2026/06/3D-Puff-Digitizing.png",
    imageAlt: "Three-dimensional puff embroidery design",
    tag: "Made for your vision",
    heading: "Creative ideas.",
    subheading: "Carefully planned stitches.",
    primaryText: "Get a Quote",
    primaryHref: "/contact/#quote",
    secondaryText: "View Our Work",
    secondaryHref: "/our-work/",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  return (
    <section
      aria-label="Featured embroidery services"
      className="relative isolate overflow-hidden bg-[#f5f8f0] text-stone-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[440px] w-[440px] rounded-full bg-[#dcebd2]/70 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_0.95fr] lg:gap-14 lg:py-20">
        <div key={activeIndex} className="hero-slide-content">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cbdcc4] bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#36512a] sm:text-[11px]">
            <Sparkles size={15} className="text-[#628747]" />
            {activeSlide.eyebrow}
          </div>

          <h1 className="mt-7 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-[#23351f] sm:text-5xl lg:text-[60px]">
            {activeSlide.title}
            <span className="mt-1 block font-serif italic text-[#628747]">
              {activeSlide.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
            {activeSlide.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={activeSlide.primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#52763a] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#36512a]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#36512a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#628747]"
            >
              {activeSlide.primaryText}
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href={activeSlide.secondaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#cbdcc4] bg-white px-6 py-3.5 text-sm font-semibold text-[#36512a] transition duration-300 hover:border-[#628747] hover:bg-[#f5f8f0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#628747]"
            >
              {activeSlide.secondaryText}
              <ArrowRight size={17} />
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

        <div className="relative mx-auto w-full max-w-[550px]">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-[#cbdcc4]/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2.5 shadow-2xl shadow-[#263d1d]/10">
            <div
              key={activeIndex}
              className="hero-slide-image relative min-h-[350px] overflow-hidden rounded-[1.5rem] bg-[#edf2e8] bg-cover bg-center sm:min-h-[470px]"
              role="img"
              aria-label={activeSlide.imageAlt}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(20,35,16,0.02) 30%, rgba(20,35,16,0.72) 100%), url("${activeSlide.image}")`,
              }}
            >
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d5edb9]">
                  {activeSlide.tag}
                </span>
                <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">
                  {activeSlide.heading}
                  <br />
                  {activeSlide.subheading}
                </h2>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 left-3 flex items-center gap-3 rounded-2xl border border-[#e1e8da] bg-white p-3 shadow-xl sm:-left-7 sm:gap-4 sm:p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f8f0] text-[#52763a]">
              <Sparkles size={23} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#23351f]">
                Precision & care
              </p>
              <p className="mt-1 text-xs text-stone-500">
                Every stitch matters
              </p>
            </div>
          </div>

          <div className="absolute right-3 top-4 flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3 py-2 shadow-lg backdrop-blur sm:right-4">
            <span className="h-2 w-2 rounded-full bg-[#719b4f]" />
            <span className="text-[10px] font-bold text-[#36512a] sm:text-xs">
              Quality first
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#dfe8d6] bg-white/75">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-5 sm:px-8">
          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {[
              { value: "22+ Years", detail: "Industry experience" },
              { value: "Machine-ready", detail: "Production-focused digitizing" },
              { value: "Worldwide", detail: "Client collaboration" },
            ].map((item) => (
              <div key={item.value} className="flex items-center gap-3">
                <span className="h-9 w-1 rounded-full bg-[#86a968]" />
                <div>
                  <p className="font-semibold text-[#36512a]">{item.value}</p>
                  <p className="mt-1 text-xs text-stone-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous banner slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7e2ce] bg-white text-[#456333] transition hover:bg-[#edf4e6]"
            >
              <ArrowLeft size={17} />
            </button>

            {slides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[#52763a]"
                    : "w-2.5 bg-[#cbdcc4] hover:bg-[#628747]"
                }`}
              />
            ))}

            <button
              type="button"
              onClick={showNext}
              aria-label="Next banner slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7e2ce] bg-white text-[#456333] transition hover:bg-[#edf4e6]"
            >
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              aria-label={isPaused ? "Play banner slider" : "Pause banner slider"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf4e6] text-[#456333] transition hover:bg-[#dfeacc]"
            >
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}