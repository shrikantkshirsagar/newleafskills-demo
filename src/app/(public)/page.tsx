import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  FileImage,
  Globe2,
  HeartHandshake,
  Layers3,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import HeroSection from "@/components/public/hero-section";

const services = [
  {
    number: "01",
    title: "Embroidery Digitizing",
    description:
      "Convert logos and artwork into carefully planned, machine-ready embroidery files.",
    href: "/embroidery-digitizing-services/",
    image:
      "https://newleafskills.com/wp-content/uploads/2026/06/Custom-Logo-Digitizing.png",
    tag: "DIGITIZING",
  },
  {
    number: "02",
    title: "Computerized Embroidery",
    description:
      "Explore embroidery production solutions for apparel, branding and custom designs.",
    href: "/computerized-embroidery-services/",
    image:
      "https://newleafskills.com/wp-content/uploads/2023/01/Embroidery-Service-Nagpur.jpg",
    tag: "EMBROIDERY",
  },
  {
    number: "03",
    title: "Vestments Embroidery",
    description:
      "Detailed decorative embroidery for vestments and ceremonial garments.",
    href: "/vestments-embroidery-services/",
    image:
      "https://newleafskills.com/wp-content/uploads/2026/06/3D-Puff-Digitizing.png",
    tag: "CRAFTSMANSHIP",
  },
  {
    number: "04",
    title: "Apparel Logo Digitizing",
    description:
      "Production-focused logo digitizing for uniforms, fashion, sportswear and branded apparel.",
    href: "/apparel-logo-digitizing-service/",
    image:
      "https://newleafskills.com/wp-content/uploads/2026/06/Custom-Logo-Digitizing.png",
    tag: "CUSTOM LOGOS",
  },
];

const advantages = [
  {
    icon: BadgeCheck,
    title: "Precision-led work",
    description:
      "Thoughtful stitch planning for cleaner results and reliable machine production.",
  },
  {
    icon: Clock3,
    title: "Turnaround in focus",
    description:
      "Clear communication about timelines, complexity and project requirements.",
  },
  {
    icon: Globe2,
    title: "Worldwide service",
    description:
      "Digital collaboration with embroidery businesses, apparel brands and designers.",
  },
  {
    icon: HeartHandshake,
    title: "Personal support",
    description:
      "A practical, customer-focused approach from initial artwork to final delivery.",
  },
];

const process = [
  {
    number: "01",
    title: "Share your artwork",
    description:
      "Send your logo, reference image, sketch or design requirements.",
  },
  {
    number: "02",
    title: "Review the requirements",
    description:
      "Discuss the fabric, design size, stitch details and required output format.",
  },
  {
    number: "03",
    title: "Digitizing and quality checks",
    description:
      "Prepare the embroidery file and review the design for production needs.",
  },
  {
    number: "04",
    title: "Receive your design",
    description:
      "Get the agreed output files and guidance for your embroidery workflow.",
  },
];

const faqs = [
  {
    question: "What is embroidery digitizing?",
    answer:
      "Embroidery digitizing converts artwork or a logo into stitch instructions that an embroidery machine can read. Good digitizing considers stitch direction, density, underlay and the intended fabric.",
  },
  {
    question: "Which artwork formats can I send?",
    answer:
      "Common source formats include JPG, PNG, PDF, SVG, AI and EPS. Share the artwork you have; the team can confirm whether it is suitable or needs a different format.",
  },
  {
    question: "How long does an embroidery digitizing order take?",
    answer:
      "Timing depends on design complexity, size, detail and current workload. Confirm the expected turnaround for your particular design when requesting a quote.",
  },
  {
    question: "How is the price calculated?",
    answer:
      "Pricing can depend on design complexity, dimensions, stitch requirements and the type of embroidery. Share the design and requirements to request a project-specific quote.",
  },
];

const portfolioImages = [
  {
    label: "Custom logo digitizing",
    image:
      "https://newleafskills.com/wp-content/uploads/2026/06/Custom-Logo-Digitizing.png",
  },
  {
    label: "3D puff embroidery",
    image:
      "https://newleafskills.com/wp-content/uploads/2026/06/3D-Puff-Digitizing.png",
  },
  {
    label: "Embroidery studio",
    image:
      "https://newleafskills.com/wp-content/uploads/2023/01/Embroidery-Service-Nagpur.jpg",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-[#23351f]">
      {/* HERO */}
      <HeroSection />
      
      {/* SERVICES */}
      <section id="services" className="scroll-mt-28 bg-[#f5f8f0] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#52763a]">
                What we do
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#23351f] sm:text-4xl">
                Embroidery solutions for
                <span className="font-serif italic text-[#628747]">
                  {" "}every detail.
                </span>
              </h2>
            </div>
            <Link
              href="/services/"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#52763a] transition hover:gap-3 hover:text-[#36512a]"
            >
              View all services <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-11 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-2xl border border-[#cbdcc4] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#628747] hover:shadow-xl hover:shadow-[#36512a]/5"
              >
                <Link href={service.href} className="block">
                  <div className="relative overflow-hidden bg-[#f5f8f0]">
                    <div
                      role="img"
                      aria-label={service.title}
                      className="h-64 bg-contain bg-center bg-no-repeat transition duration-500 group-hover:scale-[1.04]"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[9px] font-bold tracking-[0.16em] text-[#36512a] backdrop-blur">
                      {service.tag}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-xs font-bold tracking-widest text-[#52763a]">
                      {service.number}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold leading-snug text-[#23351f]">
                      {service.title}
                    </h3>
                    <p className="mt-3 min-h-[84px] text-sm leading-7 text-stone-600">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#52763a] transition-all group-hover:gap-3 group-hover:text-[#36512a]">
                      Explore service <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#f5f8f0] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#52763a]">
              The New Leaf difference
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#23351f] sm:text-4xl">
              Technical precision meets
              <span className="font-serif italic text-[#628747]">
                {" "}thoughtful craftsmanship.
              </span>
            </h2>
            <p className="mt-5 leading-8 text-stone-600">
              Every embroidery project has its own fabric, scale and purpose.
              Our approach focuses on understanding these requirements and
              preparing designs with the intended production workflow in mind.
            </p>

            <Link
              href="/about/"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#52763a] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#36512a]"
            >
              Get to know us <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#cbdcc4] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f8f0] text-[#52763a]">
                    <Icon size={23} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-semibold text-[#23351f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#52763a]">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#23351f] sm:text-4xl">
              From your idea to a
              <span className="font-serif italic text-[#628747]">
                {" "}stitch-ready design.
              </span>
            </h2>
            <p className="mt-4 leading-7 text-stone-600">
              A straightforward process built around your artwork and
              production requirements.
            </p>
          </div>

          <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article
                key={item.number}
                className="relative rounded-2xl border border-[#cbdcc4] bg-white p-6 transition duration-300 hover:border-[#628747] hover:shadow-lg hover:shadow-[#36512a]/5"
              >
                <span className="font-serif text-4xl text-[#628747]">
                  {item.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[#23351f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-[#23351f] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#cbdcc4]">
                Selected work
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Detail is what makes
                <span className="font-serif italic text-[#cbdcc4]">
                  {" "}the difference.
                </span>
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-stone-300">
                Explore a selection of embroidery-related work and visual
                references from New Leaf Skills.
              </p>
            </div>

            <Link
              href="/our-work/"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#cbdcc4] hover:text-[#cbdcc4]"
            >
              View our work <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {portfolioImages.map((item, index) => (
              <Link
                key={item.label}
                href="/our-work/"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div
                  role="img"
                  aria-label={item.label}
                  className={`bg-cover bg-center transition duration-700 group-hover:scale-105 ${
                    index === 2 ? "h-72 sm:h-80" : "h-72 sm:h-80"
                  }`}
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142011]/90 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#cbdcc4]">
                      Work showcase
                    </p>
                    <h3 className="mt-2 font-semibold text-white">
                      {item.label}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition group-hover:border-[#cbdcc4] group-hover:bg-[#cbdcc4] group-hover:text-[#23351f]">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#52763a]">
              Frequently asked questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#23351f] sm:text-4xl">
              A few things you may want to know.
            </h2>
            <p className="mt-5 leading-8 text-stone-600">
              Have a particular design or production question? Contact our team
              and share your specific requirements.
            </p>

            <Link
              href="/contact/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#52763a] transition hover:gap-3 hover:text-[#36512a]"
            >
              Ask us a question <ArrowRight size={17} />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-2xl border border-[#cbdcc4] bg-white px-5 py-1 transition-colors open:border-[#628747] open:bg-[#f5f8f0] sm:px-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-[#23351f] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-[#52763a] transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="pb-5 text-sm leading-7 text-stone-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#f5f8f0] px-6 py-12 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-24 h-72 w-72 rounded-full border border-[#cbdcc4]/60"
          />
          <div
            aria-hidden="true"
            className="absolute -right-2 -top-14 h-52 w-52 rounded-full border border-[#cbdcc4]/60"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#52763a]">
                <Scissors size={15} />
                Let&apos;s create something exceptional
              </span>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#23351f] sm:text-4xl">
                Have a design in mind?
                <span className="block font-serif italic text-[#628747]">
                  Let&apos;s talk about it.
                </span>
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-stone-600">
                Share your artwork and requirements to discuss the right
                embroidery solution for your project.
              </p>
            </div>

            <Link
              href="/contact/#quote"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#52763a] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#36512a]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#36512a]"
            >
              Request a Quote <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
