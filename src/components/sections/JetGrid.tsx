"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { jetData } from "@/lib/data";

function JetCard({ jet }: { jet: (typeof jetData)[number] }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-white border-2 border-white shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative h-[190px] xs:h-[210px] sm:h-[250px] w-full p-3 pb-0">
        <Image
          src={jet.image}
          alt={jet.name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-[18px] sm:text-[22px] font-semibold text-black mb-2 sm:mb-3">
          {jet.name}
        </h3>
        <p className="font-body text-[14px] sm:text-[16px] text-[#595959] mb-4 sm:mb-6 flex-grow">
          {jet.description}
        </p>
        <Link
          href={jet.link}
          className="w-fit px-4 sm:px-5 py-2 text-[13px] sm:text-[14px] font-medium text-black rounded transition-all hover:opacity-90"
          style={{ background: "linear-gradient(90deg, #C69E65 0%, #FBE4BA 100%)" }}
        >
          View detail
        </Link>
      </div>
    </div>
  );
}

export function JetGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="w-full py-[36px] sm:py-[48px] md:py-[60px] bg-white">
      <div className="w-full px-2 sm:px-4">
        <div className="text-center mb-8 md:mb-16 px-4">
          <h2
            className="text-[26px] xs:text-[30px] sm:text-[40px] md:text-[55px] font-bold text-[#515151] leading-tight mb-4 md:mb-10"
            style={{ fontFamily: '"Playfair Display", sans-serif', fontFeatureSettings: "normal" }}
          >
            <span className="text-[#C69E65]">Private Jet Hire</span> with WedHire
          </h2>
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 -mx-2 px-2 pb-1 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {jetData.map((jet, index) => (
              <div key={index} className="shrink-0 snap-center w-[88%]">
                <JetCard jet={jet} />
              </div>
            ))}
          </div>

          {jetData.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {jetData.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-5 bg-[#C69E65]" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Grid for tablet / laptop / desktop */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {jetData.map((jet, index) => (
            <JetCard key={index} jet={jet} />
          ))}
        </div>
      </div>
    </section>
  );
}