import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export function Footer() {
  const headingStyle = {
    color: "#000000",
    fontSize: "20px",
    fontFamily: "'Playfair Display', serif",
  };

  const listStyle = "flex flex-col gap-3 font-medium text-[16px] text-[#595959] font-['Poppins',_sans-serif]";

  return (
    <footer
      className="text-[#23282D]"
      style={{
        background: "linear-gradient(90deg, #C69E65 1.92%, #FBE4BA 53.46%, #C59D64 100%)",
      }}
    >
      {/* Container added w-full and px-4 for mobile safety */}
      <div className="container-default grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-20 px-4">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <Link href="/">
            <Image
              src="/file.svg"
              alt="Placeholder logo"
              width={60}
              height={90}
            />
          </Link>
          <p
            className="max-w-[250px] font-medium"
            style={{
              color: "#595959",
              fontSize: "15px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            We don’t just provide our clients with your standard chauffeur and transfer service.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-black">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 style={headingStyle} className="mb-6">More Info</h4>
          <ul className={listStyle}>
            {["About WedHire", "Fleet", "Yacht", "Wedding Car Hire", "Formal Car Hire Sydney", "Private Chauffeur Service", "Private Jet"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-black transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 style={headingStyle} className="mb-6">Services</h4>
          <ul className={listStyle}>
            {["Wedding Packages", "Celebrity", "Gallery", "Contact", "Services Areas", "Terms & Condition"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-black transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Need Help - Now responsive */}
        <div className="flex flex-col gap-4 text-left">
          <h4 style={headingStyle} className="mb-2">Need Help?</h4>
          
          <div className="flex items-start gap-3 font-medium text-[16px] text-[#595959] font-['Poppins',_sans-serif]">
            <svg className="w-[18px] h-[18px] mt-1 shrink-0 fill-[#333333]" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
            <span>Sydney, Australia</span>
          </div>

          <a href="tel:1800931531" className="flex items-center gap-3 hover:text-black font-medium text-[16px] text-[#595959] font-['Poppins',_sans-serif]">
            <svg className="w-[18px] h-[18px] shrink-0 fill-[#333333]" viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
            <span>1800 931 531</span>
          </a>

          <a href="mailto:bookings@prestigehire.co" className="flex items-center gap-3 hover:text-black font-medium text-[16px] text-[#595959] font-['Poppins',_sans-serif]">
            <svg className="w-[18px] h-[18px] shrink-0 fill-[#333333]" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
            <span>bookings@prestigehire.co</span>
          </a>
            
          <div className="mt-4 rounded-[8px] w-full max-w-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.14113622068!2d151.05915397481564!3d-33.96321172395362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12adb7e2b9f38d%3A0x9ad5787b916c67b8!2sPrestige%20Hire%20Sydney%20%7C%20Wedding%20Car%20Hire%20%26%20Chauffeur%20Service!5e0!3m2!1sen!2s!4v1779971914495!5m2!1sen!2s"
              className="border-0 w-full h-[150px]"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8" style={{ backgroundColor: "#C59D64" }}>
        <div className="container-default px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-center md:text-left" style={{ color: "#000000", fontSize: "16px", fontFamily: "sans-serif" }}>
            Copyright © 2026, WedHire. All Rights Reserved.
          </p>
          <div className="h-[30px]">
            <Image
              src="https://www.prestigehire.co/wp-content/uploads/2026/04/Frame-233.png"
              alt="Payment Methods"
              width={250}
              height={30}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}