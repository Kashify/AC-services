"use client";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Excellent service! Technician arrived within 30 minutes and fixed my AC quickly. Very professional and affordable.",
      location: "Faridabad",
      image: "👨",
    },
    {
      name: "Priya Singh",
      rating: 5,
      text: "Best AC repair service in Faridabad. They explained the problem clearly and didn't overcharge. Highly recommended!",
      location: "Delhi",
      image: "👩",
    },
    {
      name: "Amit Patel",
      rating: 5,
      text: "Called them on a Sunday and they came same day. Great customer service and transparent pricing. Will use again!",
      location: "Gurugram",
      image: "👨",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Trusted by{" "}
            <span className="text-blue-600 dark:text-blue-400">1000+ Happy Customers</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See why customers in Faridabad, Delhi & NCR choose us for their AC needs
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <span className="text-4xl">{testimonial.image}</span>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">📍 {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-black text-blue-600 dark:text-blue-400">4.8</div>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Average Rating</p>
          </div>
          <div>
            <div className="text-5xl font-black text-blue-600 dark:text-blue-400">1000+</div>
            <p className="text-gray-600 dark:text-gray-300 mt-2">5-Star Reviews</p>
          </div>
          <div>
            <div className="text-5xl font-black text-blue-600 dark:text-blue-400">99%</div>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Satisfaction</p>
          </div>
          <div>
            <div className="text-5xl font-black text-blue-600 dark:text-blue-400">24/7</div>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
