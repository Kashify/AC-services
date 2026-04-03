"use client";

import Link from "next/link";

const MobileSticky = () => {
  const phoneNumber = "+919876543210";
  const whatsappNumber = "919876543210";
  const message = encodeURIComponent("Hi! I need AC repair/service in Faridabad.");

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl md:hidden z-40 animate-in slide-in-from-bottom">
      <div className="flex gap-3 p-4 container mx-auto max-w-4xl">
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black py-3 px-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl scale-100 hover:scale-105 text-sm sm:text-base"
        >
        
          <span className="hidden sm:inline">📞 Call Now</span>
        </a>
        <Link
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black py-3 px-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl scale-100 hover:scale-105 text-sm sm:text-base"
        >
         
          <span className="hidden sm:inline">💬 WhatsApp</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileSticky;
