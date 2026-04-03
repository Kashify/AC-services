"use client";

import Link from "next/link";

const Hero = () => {
  const phoneNumber = "+919876543210";
  const whatsappNumber = "919876543210";
  const message = encodeURIComponent(
    "Hi! I need AC repair/service in Faridabad. Please contact me."
  );

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-black/10 -z-10"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full -z-10 blur-3xl"></div>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full w-fit mb-6 border border-white/30">
                <span className="text-2xl animate-pulse">🔥</span>
                <span className="text-sm font-semibold">Same-Day Service Available</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                AC Repair in Faridabad –{" "}
                <span className="text-yellow-300">30 Min Response</span>
              </h1>

              {/* Subheading with Trust Signals */}
              <p className="text-xl md:text-2xl text-blue-100 mb-2 font-semibold">✓ Same Day Service • 4.8⭐ Rating • Affordable Pricing</p>
              
              <p className="text-lg text-blue-50 mb-8 leading-relaxed max-w-xl">
                Expert AC repair, gas refill, installation & maintenance. Certified technicians, verified services, transparent pricing. Serving Faridabad, Delhi & NCR.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mb-10 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">1000+</div>
                  <p className="text-white text-sm mt-1">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">10+</div>
                  <p className="text-white text-sm mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">99%</div>
                  <p className="text-white text-sm mt-1">On-Time Service</p>
                </div>
              </div>

              {/* CTA Buttons - Large and Prominent */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 font-black py-5 px-10 rounded-xl transition duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  📞 Call Now
                </a>
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-3 bg-green-400 hover:bg-green-500 text-white font-black py-5 px-10 rounded-xl transition duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  💬 WhatsApp
                </Link>
              </div>
            </div>

            {/* Right - Service Highlights */}
            <div className="hidden lg:flex flex-col justify-center space-y-6">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">🔧</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">AC Repair</h3>
                    <p className="text-blue-100 text-sm mt-1">Fix cooling, gas leaks & noise</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">❄️</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">Installation</h3>
                    <p className="text-blue-100 text-sm mt-1">Professional AC setup</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">♻️</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">Gas Refill</h3>
                    <p className="text-blue-100 text-sm mt-1">Restore performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
