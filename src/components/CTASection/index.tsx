"use client";

import Link from "next/link";

const CTASection = () => {
  const phoneNumber = "+919876543210";
  const whatsappNumber = "919876543210";
  const message = encodeURIComponent(
    "Hi! I need AC repair/service in Faridabad. What's your availability?"
  );

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-300 text-blue-900 px-6 py-3 rounded-full font-bold mb-6 text-lg">
            <span className="text-2xl animate-bounce">⏰</span>
            Limited Slots Available Today!
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Need AC Service <span className="text-yellow-300">Today?</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Get professional AC repair, installation & maintenance in Faridabad. 
            <span className="block font-bold text-yellow-300 mt-2">
              Response within 30 minutes • Same-day service available
            </span>
          </p>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl">✅</span>
              <span className="text-white font-semibold">Certified Technicians</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl">💰</span>
              <span className="text-white font-semibold">Transparent Pricing</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl">🛡️</span>
              <span className="text-white font-semibold">Warranty Coverage</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 font-black py-5 px-12 rounded-xl hover:bg-yellow-300 transition duration-300 shadow-2xl hover:shadow-3xl hover:scale-110 transform text-lg"
            >
      
              📞 Call us
            </a>
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-green-400 hover:bg-green-500 text-white font-black py-5 px-12 rounded-xl transition duration-300 shadow-2xl hover:shadow-3xl hover:scale-110 transform text-lg"
            >
       
              💬 WhatsApp Now
            </Link>
          </div>

          {/* Trust Footer */}
          <p className="text-blue-100 text-lg">
            Available 24/7 • Across Faridabad, Delhi & NCR • 4.8⭐ Rated
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
