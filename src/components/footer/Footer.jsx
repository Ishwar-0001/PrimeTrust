import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2b2d31] to-[#1f2024] text-gray-300 border-t border-purple-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 sm:gap-8">

          {/* Brand */}
          <div className="md:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-[#a78bfa]" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                LoanSathi
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Your trusted partner for personal loans, business loans and
              instant credit solutions across India.
            </p>
          </div>

          {/* Personal */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-white mb-2 sm:mb-3">
              Personal
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li>Home Loan</li>
              <li>Personal Loan</li>
              <li>Education Loan</li>
            </ul>
          </div>

          {/* Loans */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-white mb-2 sm:mb-3">
              Loans
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li>Business Loan</li>
              <li>Gold Loan</li>
              <li>Vehicle Loan</li>
            </ul>
          </div>

          {/* Calculator */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-white mb-2 sm:mb-3">
              EMI Calculator
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li>EMI Calculator</li>
              <li>Interest Rates</li>
              <li>Credit Guide</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-white mb-2 sm:mb-3">
              Resources
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li>Blogs</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © 2026 LoanSathi. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms
            </span>
            <span className="hover:text-white cursor-pointer">
              Disclaimer
            </span>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-[3px] bg-gradient-to-r from-[#a78bfa] to-[#7c3aed]" />
    </footer>
  );
};

export default Footer;
