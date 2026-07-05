"use client";

import { Hero } from "@/components/sections/Hero"; 
import { FleetGrid } from "@/components/sections/FleetGrid"; 
import { Testimonials } from "@/components/sections/Testimonials"; 
import { ContactForm } from "@/components/sections/ContactForm"; 
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { weddingHireData } from "@/lib/data";
import Image from "next/image";
import { Car } from "lucide-react"

export default function WeddingHirePage() {
  const listItems = [
    "Your special day will be the talk of the town.",
    "An impressive wedding from beginning to end.",
    "Feel like royalty with the second to none treatment you will receive from our professional team and staff.",
    "Our highly experienced staff will provide the best VIP treatment with every event hire."
  ];

  return (
    <main className="overflow-x-hidden">
      <Hero
        backgroundImage="https://www.prestigehire.co/wp-content/uploads/2026/04/image_2020_07_15T12_25_15_960Z.png"
        titleContent={
          <h1 
            className="font-bold text-[32px] sm:text-[48px] lg:text-[65px]" 
            style={{ fontFamily: '"Playfair Display", serif', color: '#fbe4ba' }}
          >
            Wedding Car Hire
          </h1>
        }
        primaryButtonText="Book Your Ride"
        primaryButtonLink="/book"
        secondaryButtonText="View Fleet"
        secondaryButtonLink="/fleet"
      />
      
      <FleetGrid />

      <section className="py-2 md:py-4 px-4 md:px-2 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-start gap-4">
 
        {/* Left Content Area */}
        <div className="flex-1 space-y-2 w-full">
          <h2
            className="text-[32px] sm:text-4xl md:text-5xl font-bold m-0"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Our <span className="text-[#C69E65]">Wedding</span> Car
          </h2>
 
          <p className="text-[#54595F] leading-relaxed text-[15px] sm:text-[16px]">
            WedHire Sydney can help you with the perfect wedding car hire.
            Our reliable service and impeccable range of exotic super cars and
            limousines will ensure your special day runs smoothly and leaves
            guests impressed.
          </p>
 
          <ul className="space-y-2">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Car aria-hidden="true" className="w-5 h-5 text-[#555] mt-1 shrink-0" />
                <span className="text-[#54595F] text-[15px] sm:text-[16px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Right Image Area - Fixed Size 530x440 on desktop, scales down on smaller screens */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <Image
            src="https://www.prestigehire.co/wp-content/uploads/2026/04/image_2020_09_08T07_05_55_892Z.png"
            alt="Wedding Car Hire"
            width={530}
            height={440}
            className="object-cover rounded-lg shadow-sm w-full h-auto md:w-[530px] md:h-[440px]"
          />
        </div>
 
      </div>
    </section>

      <ServicesGrid services={weddingHireData.services} />
      
      <ContactForm 
        title="Book Your Wedding Car Here" 
        subtitle="Experience the finest chauffeur service Sydney has to offer. Book your journey today and discover the WedHire difference." 
      />

      <Testimonials />

      {/* FAQ Header Section */}
      <section className="py-12 sm:py-16 px-4 bg-[#FBF7F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-bold mb-4 text-[32px] sm:text-[40px] md:text-[55px] leading-[1.2]"
            style={{ fontFamily: '"Playfair Display", sans-serif' }}
          >
            <span className="text-[#C69E65]">Frequently</span>{" "}
            <span className="text-black">Asked Questions</span>
          </h2>
          <p className="text-black text-[15px] sm:text-[16px]" style={{ fontFamily: "Poppins, sans-serif" }}>
            Still have questions? Find answers to our most commonly asked questions.
          </p>
        </div>
        {/* Place your FAQ Accordion Component here */}
      </section>
    </main>
  );
}