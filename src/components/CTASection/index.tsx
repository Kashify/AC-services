"use client";

import Link from "next/link";

const CTASection = () => {
  const phoneNumber = "+919876543210";
  const whatsappNumber = "919876543210";
  const message = encodeURIComponent(
    "Hi! I need AC repair/service in Gurgaon. What's your availability?"
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
            Get professional AC repair, installation & maintenance in Gurgaon. 
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
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              📞 Call Now
            </a>
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-green-400 hover:bg-green-500 text-white font-black py-5 px-12 rounded-xl transition duration-300 shadow-2xl hover:shadow-3xl hover:scale-110 transform text-lg"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              💬 WhatsApp Now
            </Link>
          </div>

          {/* Trust Footer */}
          <p className="text-blue-100 text-lg">
            Available 24/7 • Across Gurgaon, Delhi & NCR • 4.8⭐ Rated
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
