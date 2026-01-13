import React, { useState } from 'react';
import { Star, Plus, Minus, ChevronRight } from 'lucide-react';

const ReviewsAndFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      question: "What documents are required for a loan?",
      answer: "Typically, you need your PAN card, Aadhaar card, and the last 6 months' bank statements."
    },
    {
      question: "How long does the approval process take?",
      answer: "Our automated system usually provides an approval decision within 10 to 15 minutes."
    },
    {
      question: "Are there any hidden charges?",
      answer: "No, we believe in 100% transparency. All processing fees and interest rates are shown upfront."
    },
    {
      question: "Can I repay my loan early?",
      answer: "Yes, you can foreclose your loan after the first EMI is cleared with zero foreclosure charges."
    }
  ];

  return (
    <section className="bg-[#f3f0ff] p-4 sm:p-6 md:p-12 font-sans min-h-auto md:min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Customer Reviews Section */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 px-1 sm:px-2">
            Customer Reviews
          </h2>
          
          <div className="space-y-3 sm:space-y-4">
            {/* Main Rating Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm border border-transparent hover:border-purple-200 transition-all gap-3 sm:gap-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-gray-800">
                    4.8/5.0
                  </span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="sm:hidden" fill="currentColor" />
                    ))}
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="hidden sm:block" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <div className="h-6 sm:h-8 w-[1px] bg-gray-200 mx-1 sm:mx-2"></div>
                <p className="text-gray-500 text-xs sm:text-sm font-medium">
                  Trusted by 2 Lakh+ users
                </p>
              </div>
              <button className="bg-[#7c3aed] text-white p-2 rounded-full hover:bg-[#6d28d9] transition-colors self-end sm:self-auto">
                <Plus size={16} className="sm:hidden" />
                <Plus size={18} className="hidden sm:block" />
              </button>
            </div>

            {/* Support Review Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-sm border border-transparent hover:border-purple-200 transition-all">
              <div>
                <h4 className="font-bold text-gray-800 text-xs sm:text-sm">
                  Excellent Support Team
                </h4>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
                  "Quick resolution and very helpful staff."
                </p>
              </div>
              <button className="bg-[#7c3aed] text-white p-2 rounded-full hover:bg-[#6d28d9] transition-colors">
                <Plus size={16} className="sm:hidden" />
                <Plus size={18} className="hidden sm:block" />
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 px-1 sm:px-2">
            FAQ
          </h2>
          
          <div className="space-y-2 sm:space-y-3">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-transparent hover:border-purple-100 transition-all"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                >
                  <div>
                    <span className="block font-bold text-gray-800 text-xs sm:text-sm">
                      {faq.question}
                    </span>
                    {openFaq !== index && (
                      <span className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">
                        View Detail
                      </span>
                    )}
                  </div>
                  <div className={`transition-transform duration-300 ${openFaq === index ? 'rotate-90' : ''}`}>
                    <div className="bg-[#7c3aed] text-white p-1.5 sm:p-2 rounded-full">
                      <ChevronRight size={14} className="sm:hidden" />
                      <ChevronRight size={16} className="hidden sm:block" />
                    </div>
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-gray-500 text-[10px] sm:text-xs leading-relaxed border-t border-gray-50 mt-2 italic">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReviewsAndFAQ;
