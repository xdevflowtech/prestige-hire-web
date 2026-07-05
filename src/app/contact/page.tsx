"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ContactPage() {
  const [dateInputType, setDateInputType] = useState<"text" | "date">("text");

  return (
    <>
      <section
        className="relative flex items-center justify-center w-full h-[220px] xs:h-[250px] sm:h-[280px] md:h-[300px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://www.prestigehire.co/wp-content/uploads/2026/04/breadcrumb.jpg')",
        }}
      >
        <div className="text-center px-4">
          <h1
            className="text-black text-[32px] xs:text-[36px] sm:text-4xl md:text-5xl lg:text-6xl font-bold underline underline-offset-8 decoration-2"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Contact
          </h1>
        </div>
      </section>

      <section className="bg-[#212529] py-12 sm:py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-16">
          <h2
            className="text-white text-[28px] xs:text-[32px] sm:text-[40px] md:text-[46px] font-bold mb-4 sm:mb-5"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Let&apos;s Work Together
          </h2>
          <p
            className="text-[#C9CDD2] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            Luckily, we&apos;re easy to get in touch with. Feel free to call, email, Facebook or send a carrier pigeon.
            <br className="hidden sm:block" />
            Make an enquiry and our team will be in touch with you as soon as possible.
          </p>
        </div>

        <div className="max-w-[1020px] mx-auto flex flex-col lg:flex-row gap-8 items-stretch justify-center">
          <div className="relative w-full lg:w-[310px] h-[300px] lg:h-auto rounded overflow-hidden shadow-lg shrink-0">
            <iframe
              src="https://maps.google.com/maps?q=Sydney%20Australia&t=m&z=5&output=embed"
              className="w-full h-full"
              title="Sydney Map"
            />

            <a
              href="https://maps.google.com/maps?q=Sydney%20Australia"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white text-[#1a73e8] text-[13px] sm:text-[14px] font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded shadow-md flex items-center gap-1.5 hover:bg-gray-50 transition-colors"
              style={{ fontFamily: "Mulish, sans-serif" }}
            >
              Open in Maps
              <ExternalLink size={14} strokeWidth={2} />
            </a>
          </div>

          <div className="bg-white border border-gray-200 p-6 sm:p-8 md:p-12 shadow-xl w-full lg:w-[680.25px] flex flex-col justify-center shrink-0">
            <h2
              className="text-[24px] sm:text-[28px] md:text-3xl font-bold text-black mb-6 sm:mb-8 md:mb-10"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Get in Touch
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-8">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-2.5 text-[15px] text-black placeholder-gray-400 focus:outline-none focus:border-[#C69E65] transition-colors"
                style={{ fontFamily: "Mulish, sans-serif" }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-2.5 text-[15px] text-black placeholder-gray-400 focus:outline-none focus:border-[#C69E65] transition-colors"
                style={{ fontFamily: "Mulish, sans-serif" }}
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-2.5 text-[15px] text-black placeholder-gray-400 focus:outline-none focus:border-[#C69E65] transition-colors"
                style={{ fontFamily: "Mulish, sans-serif" }}
              />
              <select
                name="event"
                defaultValue=""
                className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-2.5 text-[15px] text-gray-400 focus:outline-none focus:border-[#C69E65] transition-colors"
                style={{ fontFamily: "Mulish, sans-serif" }}
              >
                <option value="" disabled>Select Event</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate</option>
                <option value="airport">Airport Transfer</option>
                <option value="special">Special Occasion</option>
              </select>

              <input
                type={dateInputType}
                name="date"
                placeholder="Select Date"
                onFocus={() => setDateInputType("date")}
                onBlur={(event) => { if (!event.target.value) setDateInputType("text"); }}
                className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-2.5 text-[15px] text-black placeholder-gray-400 focus:outline-none focus:border-[#C69E65] transition-colors"
                style={{ fontFamily: "Mulish, sans-serif" }}
              />
              <select
                name="car"
                defaultValue=""
                className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-2.5 text-[15px] text-gray-400 focus:outline-none focus:border-[#C69E65] transition-colors"
                style={{ fontFamily: "Mulish, sans-serif" }}
              >
                <option value="" disabled>Select Car</option>
                <option value="rolls-royce">Rolls-Royce</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="ferrari">Ferrari</option>
                <option value="lamborghini">Lamborghini</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                className="md:col-span-2 w-full bg-transparent border-0 border-b border-gray-300 px-0 py-2.5 text-[15px] text-black placeholder-gray-400 focus:outline-none focus:border-[#C69E65] transition-colors min-h-[100px] resize-none"
                style={{ fontFamily: "Mulish, sans-serif" }}
              />

              <button
                type="submit"
                className="w-fit px-6 sm:px-8 py-2.5 sm:py-3 text-white text-[14px] sm:text-[16px] font-medium rounded-sm shadow-md transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(90deg, #C69E65 0%, #E2C08D 50%, #C69E65 100%)",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
        <div className="max-w-[1020px] mx-auto grid md:grid-cols-3 gap-6 mt-20">
          {[
            { 
              icon: "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z", 
              title: "Phone", 
              val: "+1 224 344 55566" 
            },
            { 
              icon: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z", 
              title: "Address", 
              val: "Sydney Australia" 
            },
            { 
              icon: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z", 
              title: "E-Mail", 
              val: "info@wedhire@gmail.co" 
            }
          ].map((item, i) => (
            <div key={i} className="border border-[#4A4A4A] bg-[#292D32] p-8 text-center text-[#A0A0A0] transition-all ">
              <svg className="w-8 h-8 mx-auto mb-4 fill-[#A0A0A0]" viewBox="0 0 576 512"><path d={item.icon} /></svg>
              <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
              <p className="text-[15px]">{item.val}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}