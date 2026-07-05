"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { servicesPageData } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = servicesPageData[slug as keyof typeof servicesPageData];
  const typesSection = data.typesSection;
  const routesSection = data.routesSection;
  const titleParts = typesSection?.title.split(" ") ?? [];
  const firstTwo = titleParts.slice(0, 2).join(" ");
  const middleTwo = titleParts.slice(2, 4).join(" ");
  const remaining = titleParts.slice(4).join(" ");

  if (!data) return <div>Service not found</div>;

  return (
    <main>
      <Hero 
        backgroundImage={data.hero.heroImage}
        titleContent={
          <h1 className="text-white font-bold" style={{ fontFamily: '"Playfair Display", sans-serif', fontSize: "55px", }} > {data.hero.heroTitle} </h1>
        }
        primaryButtonText="Book Your Ride"
        primaryButtonLink="/contact"
        secondaryButtonText="View Fleet"
        secondaryButtonLink="#fleet" 
      />

      <section className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 gap-12 px-4">
        <div>
          <h2 className="font-bold" style={{ fontFamily: '"Playfair Display", sans-serif', fontSize: "55px", }} >{data.about.title}</h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", }} >{data.about.text}</p>
        </div>
        <Image src={data.about.image} width={588} height={401} alt="About" />
      </section>

      <section className="bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
    

    <div className="flex flex-col gap-6">
      {data.whyChoose.images.map((img, i) => (
        <Image 
          key={i} 
          src={img} 
          width={588} 
          height={401} 
          alt="Why Choose" 
          className="rounded-lg shadow-md object-cover"
        />
      ))}
    </div>

    <div>
      <h2 
        className="font-bold mb-6 text-black" 
        style={{ fontFamily: '"Playfair Display", serif', fontSize: "55px", lineHeight: "1.1" }}
      >
        {data.whyChoose.title}
      </h2>
      <div 
        className="text-gray-700 space-y-4" 
        style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px" }}
        dangerouslySetInnerHTML={{ __html: data.whyChoose.text }}
      />
    </div>
  </div>
</section>

      {/* Fleet Section */}
      <section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    {/* Heading Section */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
        Our Fleet of <span className="text-[#C69E65]">Private Jets</span>
      </h2>
      <p className="text-gray-600 text-lg">WedHire operates a selection of respected aircraft trusted worldwide.</p>
    </div>

    {/* Fleet Cards Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {data.fleet.map((item, i) => (
        <div key={i} className="border-20 border-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white flex flex-col">
          {/* Image */}
          <div className="relative h-64 w-full">
            <Image 
              src={item.image} 
              alt={item.name} 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Card Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              {item.name}
            </h3>
            <p className="text-gray-600 text-[15px] mb-6 flex-grow leading-relaxed">
              {item.text}
            </p>
            
            {/* View Detail Button */}
            <Link href={`/services/${slug}/details`}>
    <Button type="button">
      View detail
    </Button>
  </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {typesSection && (
        <>
        <section className="py-16 px-1 sm:px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="font-bold mb-6 text-black"
                style={{ fontFamily: '"Playfair Display", serif', fontSize: "55px", lineHeight: "1.1" }}
              >
                {firstTwo} <span className="text-[#C69E65]">{middleTwo} {remaining}</span>
              </h2>

              <div className="text-black space-y-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px" }}>
                <p>{typesSection.description}</p>
                <ul className="list-disc pl-5 space-y-3">
                  {typesSection.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{typesSection.footerText}</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={typesSection.image ?? data.about.image}
                width={588}
                height={401}
                alt={typesSection.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/*Booking Section*/}
  <section className="bg-[#F5F5F5] py-16 px-4">
  <div className="max-w-5xl mx-auto text-center">
    {/* Title */}
    <h2 
      className="text-4xl md:text-5xl font-bold mb-4 text-black" 
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      {data.bookingSection.title.split(" ").slice(0, -2).join(" ")}{" "}
      <span className="text-[#C69E65]">
        {data.bookingSection.title.split(" ").slice(-2).join(" ")}
      </span>
    </h2>
    
    <p className="mb-10 text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>
      {data.bookingSection.subtitle}
    </p>

    {/* Steps - Exact Inline Layout */}
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-0 mb-8 text-left">
      {data.bookingSection.steps.map((step, i) => (
        <div key={i} className="flex items-center gap-1 w-full md:w-[45%]">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 640 512" 
            fill="#555" 
            className="flex-shrink-0"
          >
            <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z"></path>
          </svg>
          <p className="text-[15px] text-gray-800 leading-snug">{step}</p>
        </div>
      ))}
    </div>

    {/* Footer Text */}
    <p className="text-gray-900 font-medium text-[16px]" style={{ fontFamily: "Poppins, sans-serif" }}>
      {data.bookingSection.footerText}
    </p>
  </div>
</section>

{routesSection && (
<section className="py-20 px-4 max-w-6xl mx-auto">
  <div className="grid md:grid-cols-2 gap-12 items-start">
    {/* Left: Text Content */}
    <div className="text-left">
      <h2 className="text-5xl font-bold mb-6 text-black" style={{ fontFamily: '"Playfair Display", serif' }}>
        {routesSection.title.split(" ").slice(0, 2).join(" ")}<br />
        <span className="text-[#C69E65]">{routesSection.title.split(" ").slice(2).join(" ")}</span>
      </h2>
      <p className="mb-4 text-[16px]" style={{ fontFamily: "Poppins, sans-serif" }}>{routesSection.description}</p>
      <ul className="list-disc pl-5 space-y-3 mb-6 text-[16px]" style={{ fontFamily: "Poppins, sans-serif" }}>
        {routesSection.routes.map((route, i) => <li key={i}>{route}</li>)}
      </ul>
      <p className="text-[16px]" style={{ fontFamily: "Poppins, sans-serif" }}>{routesSection.footerText}</p>
    </div>

    {/* Right: Images (Main + Gallery) */}
    <div className="space-y-4">
      <Image 
        src={routesSection.mainImage} 
        width={588} height={401} 
        alt="Popular Route" 
        className="rounded-2xl shadow-lg w-full" 
      />
      <div className="grid grid-cols-3 gap-4">
        {routesSection.galleryImages.map((img, i) => (
          <Image 
            key={i} 
            src={img} 
            width={180} height={120} 
            alt="Gallery" 
            className="rounded-lg shadow-sm" 
          />
        ))}
      </div>
    </div>
  </div>
</section>
)}
        </>
      )}
    </main>
  );
}