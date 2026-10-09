"use client";
import { Phone } from "lucide-react";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.436 0 9.851-4.388 9.854-9.782.002-2.613-1.013-5.07-2.859-6.918C16.425 2.057 13.968.997 11.36.997c-5.44 0-9.856 4.389-9.859 9.784-.002 1.86.486 3.68 1.417 5.29L1.935 21.8l5.882-1.53.03.016zM17.487 14.39c-.3-.15-1.774-.875-2.049-.976-.276-.1-.476-.15-.676.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-1.041-.522-1.745-.92-2.443-1.776-.325-.325-.325-.325-.5-.65-.175-.3-.025-.45.125-.6.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-1.002-2.413-.275-.66-.554-.57-.756-.58-.198-.01-.425-.012-.65-.012-.225 0-.59.085-.9.425-.31.34-1.185 1.162-1.185 2.833 0 1.671 1.213 3.284 1.383 3.51.17.225 2.39 3.649 5.79 5.121 2.84 1.229 3.42 1.01 4.02.95.6-.06 1.775-.725 2.025-1.425.25-.7.25-1.3 1.75-1.425z" />
  </svg>
);

const FloatingCTA = () => {
    const phoneNumber = "+917593841013";
    const whatsappNumber = "917593841013";

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
            {/* WhatsApp Button */}
            <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0A756A] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#0A756A]/20 cursor-pointer" 
                aria-label="Contact us on WhatsApp"
            >
                <WhatsAppIcon />
                <span className="absolute right-16 mr-3 whitespace-nowrap rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                    Chat on WhatsApp
                </span>
            </a>

            {/* Phone Button */}
            <a 
                href={`tel:${phoneNumber}`}
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0A756A] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#0A756A]/20 cursor-pointer" 
                aria-label="Call us"
            >
                <Phone className="h-6 w-6" />
                <span className="absolute right-16 mr-3 whitespace-nowrap rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                    Call Now
                </span>
            </a>
        </div>
    );
};

export default FloatingCTA;
