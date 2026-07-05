"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { navLinks } from "@/lib/data";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#FEFCFB] relative z-50" style={{ boxShadow: "4px 0px 14px 0px #C69E6540" }}>
      {/* Top Bar */}
      <div className="bg-[#FBF7F5]">
        <div className="max-w-[1500px] mx-auto flex items-center justify-center lg:justify-between px-4 py-2 lg:py-0 lg:h-14">
          <div className="hidden lg:block w-[100px]"></div>

          <ul
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] xs:text-[12px] sm:text-[14px] lg:text-[16px] -mx-1 lg:-mx-2"
            style={{ color: "#595959", fontFamily: "Inter, sans-serif" }}
          >
            <li className="flex items-center px-1 lg:px-2">
              <FaMapMarkerAlt size={12} className="mr-1.5 lg:mr-2 shrink-0" aria-hidden="true" style={{ color: "#595959" }} />
              <span className="whitespace-nowrap">Sydney Australia</span>
            </li>
            <li className="flex items-center px-1 lg:px-2">
              <a href="tel:1800931531" className="flex items-center">
                <FaPhoneAlt size={12} className="mr-1.5 lg:mr-2 shrink-0" aria-hidden="true" style={{ color: "#595959" }} />
                <span className="whitespace-nowrap">1800 931 531</span>
              </a>
            </li>
            <li className="flex items-center px-1 lg:px-2">
              <a href="mailto:bookings@prestigehire.co" className="flex items-center">
                <FaEnvelope size={12} className="mr-1.5 lg:mr-2 shrink-0" aria-hidden="true" style={{ color: "#595959" }} />
                <span className="whitespace-nowrap">bookings@prestigehire.co</span>
              </a>
            </li>
          </ul>

          <Link
            href="/contact"
            className="hidden lg:block text-[#23282D] text-[16px] rounded transition-opacity"
            style={{
              background: "linear-gradient(90deg, #C69E65 1.92%, #FBE4BA 53.46%, #C59D64 100%)",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "35px",
              paddingRight: "35px",
              marginRight: "105px",
            }}
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-[1280px] mx-auto py-2 flex items-center justify-between lg:justify-start gap-4 px-4">
        <Link href="/" className="flex items-center gap-3 sm:gap-6 flex-shrink-0">
          <div className="relative w-[48px] h-[75px] sm:w-[55px] sm:h-[86px] lg:w-[61px] lg:h-[95px]">
            <Image
              src="/file.svg"
              alt="Placeholder logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative w-[78px] h-[78px] hidden md:block">
            <Image
              src="https://www.prestigehire.co/wp-content/uploads/2026/04/image-17.png"
              alt="Covid Safe"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center flex-nowrap flex-1 min-w-0 justify-center">
          {navLinks?.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-[16px] font-normal p-3 rounded transition-colors ${
                    isActive ? "text-[#999999]" : "text-[#23282D] hover:text-[#999999]"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} />}
                </Link>
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-72 bg-white shadow-lg rounded-md py-2 border border-gray-100 z-50"
                      >
                        {link.dropdown.map((dropLink) => (
                          <Link
                            key={dropLink.name}
                            href={dropLink.href}
                            className="px-4 py-3 text-sm text-[#23282D] hover:bg-[#F2F2F2] block"
                          >
                            {dropLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-7 text-[#1E1E1E] flex-shrink-0">
          <a href="#" aria-label="Instagram">
            <FiInstagram size={22} strokeWidth={1.5} />
          </a>
          <a href="#" aria-label="Facebook">
            <FiFacebook size={22} strokeWidth={1.5} />
          </a>
        </div>

        <button
          className="lg:hidden flex items-center justify-center text-[#23282D] flex-shrink-0 rounded"
          style={{
            background: "linear-gradient(90deg, #C69E65 1.92%, #FBE4BA 53.46%, #C59D64 100%)",
            width: "56px",
            height: "40px",
          }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#FEFCFB] border-t border-[#C69E6533]"
          >
            <nav className="flex flex-col px-4 py-3">
              {navLinks?.map((link) => {
                const isActive = pathname === link.href;
                const isOpen = mobileServicesOpen === link.name;
                return (
                  <div key={link.name} className="border-b border-[#EFEFEF] last:border-b-0">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                        className={`flex-1 py-3 text-[16px] font-normal ${
                          isActive ? "text-[#999999]" : "text-[#23282D]"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <button
                          onClick={() => setMobileServicesOpen(isOpen ? null : link.name)}
                          className="p-3 text-[#23282D]"
                          aria-label={`Toggle ${link.name} submenu`}
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>

                    {link.dropdown && (
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 pb-2"
                          >
                            {link.dropdown.map((dropLink) => (
                              <Link
                                key={dropLink.name}
                                href={dropLink.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 text-sm text-[#595959]"
                              >
                                {dropLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}

              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-[#EFEFEF] text-[#1E1E1E]">
                <a href="#" aria-label="Instagram">
                  <FiInstagram size={22} strokeWidth={1.5} />
                </a>
                <a href="#" aria-label="Facebook">
                  <FiFacebook size={22} strokeWidth={1.5} />
                </a>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#23282D] text-[16px] rounded text-center mt-5 py-2.5"
                style={{
                  background: "linear-gradient(90deg, #C69E65 1.92%, #FBE4BA 53.46%, #C59D64 100%)",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                }}
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}