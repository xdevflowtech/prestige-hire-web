"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  backgroundImage?: string;
  subtitle?: string;
  titleContent?: React.ReactNode;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

function FloatingBookingForm() {
  return (
    <div className="relative z-20 max-w-[1140px] mx-auto px-4 -mt-4 xs:-mt-6 sm:-mt-12 md:-mt-16 lg:-mt-[65px] mb-8 sm:mb-12 lg:mb-16">
      <div
        className="bg-[#FBF7F5] rounded-[12px] p-5 sm:p-6 md:p-8"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)" }}
      >
        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-5 items-end">
          {["firstName", "phone", "email", "message"].map((field) => (
            <div key={field} className="flex flex-col gap-1.5 md:col-span-1">
              <label htmlFor={field} className="text-[15px] font-medium text-black font-sans capitalize">
                {field.replace(/([A-Z])/g, " $1")} {" "}
                {field !== "message" && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                id={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                required={field !== "message"}
                className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0693e3] focus:border-[#0693e3] transition-all"
              />
            </div>
          ))}

          <div className="sm:col-span-2 md:col-span-1">
            <button
              type="submit"
              className="w-full md:w-[208px] h-[44.5px] text-[#23282D] font-medium text-[15px] rounded transition-all duration-300 ease-in-out border border-[#C69E65] hover:bg-transparent hover:text-black hover:border-[#0693e3]"
              style={{
                background: "linear-gradient(90deg, #C69E65 1.92%, #FBE4BA 53.46%, #C59D64 100%)",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Book Your Ride
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function Hero({
  backgroundImage,
  subtitle,
  titleContent,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroProps) {
  const isDefaultHero =
    backgroundImage === undefined &&
    subtitle === undefined &&
    titleContent === undefined &&
    primaryButtonText === undefined &&
    primaryButtonLink === undefined &&
    secondaryButtonText === undefined &&
    secondaryButtonLink === undefined;

  const heroBackgroundImage = backgroundImage ?? "https://www.prestigehire.co/wp-content/uploads/2026/04/image-16-3.png";
  const heroSubtitle = isDefaultHero ? "Arrive. Impress. Celebrate." : subtitle;
  const heroPrimaryButtonText = isDefaultHero ? "Book Your Ride" : primaryButtonText;
  const heroPrimaryButtonLink = isDefaultHero ? "/contact" : primaryButtonLink;
  const heroSecondaryButtonText = isDefaultHero ? "Wedding Packages" : secondaryButtonText;
  const heroSecondaryButtonLink = isDefaultHero ? "/packages" : secondaryButtonLink;

  if (isDefaultHero) {
    return (
      <>
        <section className="relative min-h-[400px] md:min-h-[700px] w-full flex flex-col justify-start overflow-visible">
          <div className="absolute inset-0 z-0">
            <Image src={heroBackgroundImage} alt="Hero background" fill className="object-cover" priority />
          </div>

          <div className="relative z-10 px-4 max-w-[1540px] mx-auto flex flex-col pt-[30px] w-full items-center">
            <motion.div className="text-[#C59D64] mb-2 text-[25px]">Welcome to WedHire</motion.div>

            <div className="text-center">
              {titleContent || (
                <h1 className="font-bold text-[32px] sm:text-[48px] lg:text-[65px]" style={{ fontFamily: '"Playfair Display", serif' }}>
                  <span className="text-[#C69E65]">Wedding Car Hire Sydney</span> & Luxury Cars for Special Events
                </h1>
              )}
            </div>

            {heroSubtitle && <motion.p className="text-[#23282D] my-6 text-lg">{heroSubtitle}</motion.p>}

            {(heroPrimaryButtonText || heroSecondaryButtonText) && (
              <div className="flex gap-4">
                {heroPrimaryButtonText && heroPrimaryButtonLink && (
                  <Link
                    href={heroPrimaryButtonLink}
                    className="flex items-center justify-center text-[#23282D] text-[16px] font-semibold rounded-[8px] select-none hover:opacity-95 active:translate-y-[1px] active:shadow-sm transition-transform duration-150"
                    style={{
                      background: "linear-gradient(90deg, #C69E65 1.92%, #FBE4BA 53.46%, #C59D64 100%)",
                      paddingTop: "6px",
                      paddingBottom: "6px",
                      paddingLeft: "35px",
                      paddingRight: "35px",
                      height: "44px",
                      minWidth: "170px",
                      boxShadow: "0 6px 18px rgba(198,158,101,0.18)",
                      cursor: "pointer",
                      letterSpacing: "0.2px",
                    }}
                  >
                    {heroPrimaryButtonText}
                  </Link>
                )}
                {heroSecondaryButtonText && heroSecondaryButtonLink && (
                  <Link href={heroSecondaryButtonLink} className="px-6 py-2 border-2 border-[#C69E65] text-white rounded font-semibold">
                    {heroSecondaryButtonText}
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>

        <FloatingBookingForm />
      </>
    );
  }

  return (
    <>
      <section className="relative min-h-[400px] md:min-h-[700px] w-full flex flex-col justify-start overflow-visible">
        <div className="absolute inset-0 z-0">
          <Image src={heroBackgroundImage} alt="Hero background" fill className="object-cover" priority />
        </div>

        <div className="relative z-10 min-h-[400px] md:min-h-[700px] px-4 max-w-[1540px] mx-auto flex flex-col items-center justify-center text-center w-full gap-4">
          <div className="text-center flex items-center justify-center">
            {titleContent || (
              <h1 className="font-bold text-[32px] sm:text-[48px] lg:text-[65px]" style={{ fontFamily: '"Playfair Display", serif' }}>
                <span className="text-[#C69E65]">Wedding Car Hire Sydney</span> & Luxury Cars for Special Events
              </h1>
            )}
          </div>

          {heroSubtitle && <motion.p className="text-[#23282D] text-lg">{heroSubtitle}</motion.p>}

          {(heroPrimaryButtonText || heroSecondaryButtonText) && (
            <div className="flex gap-4 flex-wrap justify-center">
              {heroPrimaryButtonText && heroPrimaryButtonLink && (
                <Link
                  href={heroPrimaryButtonLink}
                  className="flex items-center justify-center text-[#23282D] text-[16px] font-semibold rounded-[8px] select-none hover:opacity-95 active:translate-y-[1px] active:shadow-sm transition-transform duration-150"
                  style={{
                    background: "linear-gradient(90deg, #C69E65 1.92%, #FBE4BA 53.46%, #C59D64 100%)",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    paddingLeft: "35px",
                    paddingRight: "35px",
                    height: "44px",
                    minWidth: "170px",
                    boxShadow: "0 6px 18px rgba(198,158,101,0.18)",
                    cursor: "pointer",
                    letterSpacing: "0.2px",
                  }}
                >
                  {heroPrimaryButtonText}
                </Link>
              )}
              {heroSecondaryButtonText && heroSecondaryButtonLink && (
                <Link href={heroSecondaryButtonLink} className="px-6 py-2 border-2 border-[#C69E65] text-white rounded font-semibold">
                  {heroSecondaryButtonText}
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      <FloatingBookingForm />
    </>
  );
}