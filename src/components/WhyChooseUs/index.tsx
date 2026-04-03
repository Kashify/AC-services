"use client";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "⚡",
      title: "Same-Day Service",
      description: "Get quick repairs the same day you call. We prioritize urgent AC issues.",
    },
    {
      icon: "✓",
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years of experience in all AC brands.",
    },
    {
      icon: "💰",
      title: "Affordable Rates",
      description: "Transparent pricing with no hidden charges. Best value for money.",
    },
    {
      icon: "🛡️",
      title: "Warranty Coverage",
      description: "All repairs come with minimum 6 months warranty on parts & labor.",
    },
    {
      icon: "📞",
      title: "24/7 Availability",
      description: "Emergency services available round the clock, even on weekends.",
    },
    {
      icon: "🏆",
      title: "100% Satisfaction",
      description: "500+ satisfied customers. We guarantee quality service or money back.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">Us?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're the top-rated AC service in Faridabad & Delhi NCR. Trusted by 1000+ customers with 99% satisfaction rate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 hover:shadow-xl transition duration-300 border border-gray-200 hover:border-blue-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="text-center">
            <div className="text-5xl font-black mb-2">1000+</div>
            <p className="text-blue-100">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black mb-2">5000+</div>
            <p className="text-blue-100">ACs Serviced</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black mb-2">10+</div>
            <p className="text-blue-100">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black mb-2">99%</div>
            <p className="text-blue-100">5-Star Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
