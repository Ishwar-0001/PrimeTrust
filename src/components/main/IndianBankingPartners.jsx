import React from "react";

const IndianBankingPartners = () => {
  const partners = [
    {
      name: "SBI",
      color: "text-[#284999]",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/58/State_Bank_of_India_logo.svg",
      sub: "State Bank of India",
    },
    {
      name: "HDFC BANK",
      color: "text-[#1d428a]",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
      sub: "We understand your world",
    },
    {
      name: "ICICI Bank",
      color: "text-[#f58220]",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
      sub: "Hum Hai Na",
    },
    {
      name: "AXIS BANK",
      color: "text-[#97164b]",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Axis_Bank_logo.svg",
      sub: "Dil Se Open",
    },
    {
      name: "Kotak",
      color: "text-[#ed1c24]",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Kotak_Mahindra_Bank_logo.svg",
      sub: "Kotak Mahindra",
    },
    {
      name: "YES BANK",
      color: "text-[#00529b]",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/YES_BANK_Logo.svg",
      sub: "Experience Our Expertise",
    },
  ];

  return (
    <section className="bg-[#f3f0ff] py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-16 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8 sm:mb-10 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3">
            Our Banking Partners
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
            Trusted partnerships with India’s leading banks for secure and
            seamless financial services.
          </p>
        </div>

        {/* Bank Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {partners.map((bank, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 h-28 sm:h-30 md:h-32 flex flex-col items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-purple-200"
            >
              <div className="bg-[#f7f7ff] rounded-lg sm:rounded-xl p-2 sm:p-3 mb-2 flex items-center justify-center w-full h-12 sm:h-14">
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="h-7 sm:h-8 md:h-10 object-contain"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>

              <span className={`font-extrabold text-xs sm:text-sm ${bank.color}`}>
                {bank.name}
              </span>

              <span className="text-[9px] sm:text-[10px] text-gray-400 text-center mt-1 uppercase tracking-wide">
                {bank.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-xs sm:text-sm text-gray-500 italic">
            * Logos are trademarks of their respective banks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndianBankingPartners;
