import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white sticky top-0 z-[100] shadow-[0px_2px_15px_rgba(0,0,0,0.05)] border-b border-gray-50">
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-3 px-4 md:px-8 lg:px-12">
        
        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3 z-[110]">
          <div className="relative flex items-center justify-center">
            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border-[4px] md:border-[5px] border-[#6C5CE7]"></div>
            <div className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-xl md:text-[22px] font-bold text-gray-800 tracking-tight">
            LoanSathi
          </span>
        </div>

        {/* CENTER: NAV LINKS (Desktop) */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 text-[15px] font-medium text-gray-600">
          <li className="hover:text-[#6C5CE7] cursor-pointer transition-all">Personal Loan</li>
          <li className="hover:text-[#6C5CE7] cursor-pointer transition-all">Home</li>
          <li className="hover:text-[#6C5CE7] cursor-pointer transition-all">Business Loan</li>
          <li className="hover:text-[#6C5CE7] cursor-pointer transition-all">EMI Calculator</li>
          <li className="hover:text-[#6C5CE7] cursor-pointer transition-all">About</li>
        </ul>

        {/* RIGHT: ACTIONS (Desktop/Tablet) */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Contact - Hidden on Mobile */}
          <div className="hidden sm:flex items-center gap-2 text-[#6C5CE7] font-bold">
            <Phone size={18} fill="currentColor" strokeWidth={0} />
            <span className="text-gray-700 text-[14px] font-bold">+ 1890-XXX-53JLX</span>
          </div>

          <div className="h-6 w-[1px] bg-gray-200 hidden sm:block"></div>

          {/* Login - Hidden on tiny screens */}
          <button className="hidden xs:block px-4 md:px-7 py-2 rounded-full border-[1.5px] border-[#6C5CE7] text-[#6C5CE7] text-[13px] md:text-[14px] font-bold hover:bg-purple-50 transition-all">
            Login
          </button>
          
          <button className="px-5 md:px-7 py-2 rounded-full bg-[#6C5CE7] text-white text-[13px] md:text-[14px] font-bold shadow-lg shadow-indigo-100 hover:brightness-110 transition-all">
            Apply Now
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-1 text-gray-600 z-[110]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`
        fixed inset-0 bg-white z-[105] flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        lg:hidden
      `}>
        <ul className="flex flex-col items-center gap-6 text-lg font-semibold text-gray-800">
          <li onClick={() => setIsMenuOpen(false)} className="hover:text-[#6C5CE7] cursor-pointer">Personal Loan</li>
          <li onClick={() => setIsMenuOpen(false)} className="hover:text-[#6C5CE7] cursor-pointer">Home</li>
          <li onClick={() => setIsMenuOpen(false)} className="hover:text-[#6C5CE7] cursor-pointer">Business Loan</li>
          <li onClick={() => setIsMenuOpen(false)} className="hover:text-[#6C5CE7] cursor-pointer">EMI Calculator</li>
          <li onClick={() => setIsMenuOpen(false)} className="hover:text-[#6C5CE7] cursor-pointer">About</li>
        </ul>
        
        <div className="flex flex-col gap-4 w-full px-10">
            <button className="w-full py-3 rounded-full border border-[#6C5CE7] text-[#6C5CE7] font-bold">Login</button>
            <div className="flex items-center justify-center gap-2 text-[#6C5CE7] font-bold">
                <Phone size={18} fill="currentColor" strokeWidth={0} />
                <span className="text-gray-700">+ 1890-XXX-53JLX</span>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;