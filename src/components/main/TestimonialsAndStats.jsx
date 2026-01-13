import React from 'react';
import { Users, ShieldCheck, CheckCircle } from 'lucide-react';

const TestimonialsAndStats = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "The loan process was incredibly smooth and completely digital.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
    },
    {
      name: "Priya Sharma",
      text: "Fastest approval I've ever experienced. Great support team.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
    },
    {
      name: "Amit Patel",
      text: "Transparent charges and very competitive interest rates.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit"
    }
  ];

  const stats = [
    {
      icon: <Users className="text-white w-4 h-4 sm:w-5 sm:h-5" />,
      value: "₹5000 Cr+",
      label: "Loans Disbursed"
    },
    {
      icon: <ShieldCheck className="text-white w-4 h-4 sm:w-5 sm:h-5" />,
      value: "2 Crore+",
      label: "Happy Customers"
    },
    {
      icon: <CheckCircle className="text-white w-4 h-4 sm:w-5 sm:h-5" />,
      value: "98%",
      label: "Approval Rate"
    }
  ];

  return (
    <section className="bg-[#f3f0ff] p-4 sm:p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 px-1 sm:px-2">
          What Our Customers Say
        </h2>

        {/* Compact Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col items-center text-center border border-transparent hover:border-purple-100 transition-all"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-50 mb-2 sm:mb-3 overflow-hidden border border-purple-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-xs sm:text-sm mb-1">
                {item.name}
              </h3>
              <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed italic">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Compact Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all"
            >
              <div className="bg-[#7c3aed] p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                {stat.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#7c3aed] mb-0.5">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-semibold text-[9px] sm:text-[10px] uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndStats;
