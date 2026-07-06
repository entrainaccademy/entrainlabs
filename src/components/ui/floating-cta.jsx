"use client";
import { Phone, MessageCircle } from "lucide-react";
const FloatingCTA = () => {
    const phoneNumber = "+919745020223";
    const whatsappNumber = "919745020223";
    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    };
    return (<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <button onClick={handleWhatsAppClick} className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl" aria-label="Contact us on WhatsApp">
        <MessageCircle className="h-6 w-6"/>
        <span className="absolute right-16 mr-3 whitespace-nowrap rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </button>

      {/* Phone Button */}
      <button onClick={handlePhoneClick} className="group flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl" aria-label="Call us">
        <Phone className="h-6 w-6"/>
        <span className="absolute right-16 mr-3 whitespace-nowrap rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Call Now
        </span>
      </button>
    </div>);
};
export default FloatingCTA;
