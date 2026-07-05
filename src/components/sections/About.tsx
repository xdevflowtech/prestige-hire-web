import Image from "next/image";
import { aboutFeatures } from "@/lib/data";
import { Car, Users, DollarSign, CheckCircle } from "lucide-react";

export function About() {
  const iconMap: Record<string, React.ReactNode> = {
    CarSide: <Car size={24} />,
    Users: <Users size={24} />,
    DollarSign: <DollarSign size={24} />,
    CheckCircle: <CheckCircle size={24} />,
  };

  return (
    <section className="section-padding bg-[#FBF7F5]">
      <div className="container-default">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-[42px] md:text-[55px] font-bold leading-tight"
            style={{ fontFamily: '"Playfair Display", serif', color: "#000000" }}
          >
            About <span className="text-[#C69E65]">WedHire</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Features Column - single vertical stack */}
          <div className="flex flex-col gap-5">
            {aboutFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-[12px] flex items-start gap-4 shadow-sm"
              >
                <div className="text-[#C69E65] bg-[#FBF7F5] w-[56px] h-[56px] flex items-center justify-center rounded-full flex-shrink-0">
                  {iconMap[feature.icon]}
                </div>
                <div>
                  <h3
                    className="text-[20px] font-semibold text-[#1E1E1E] mb-2"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-[#979797] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Column */}
          <div className="relative h-[500px] w-full">
            <Image
              src="https://www.prestigehire.co/wp-content/uploads/2026/04/image-18-1.png"
              alt="About WedHire"
              fill
              className="object-cover rounded-[12px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}