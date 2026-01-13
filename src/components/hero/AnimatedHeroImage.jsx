import React from 'react';

const AnimatedHeroImage = () => (
  <div className="lg:col-span-4 relative flex justify-center lg:justify-end w-full overflow-visible py-10 lg:py-0">
    {/* Badges - Hidden or scaled on very small screens */}
    <div className="absolute top-0 left-4 lg:top-4 lg:-left-4 bg-white p-2 px-3 rounded-lg shadow-lg z-20 flex items-center gap-2 border border-purple-50 animate-bounce">
      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-[8px] sm:text-[10px]">✓</div>
      <span className="text-[8px] sm:text-[9px] font-extrabold text-slate-800">Verified</span>
    </div>
    
    <div className="absolute bottom-4 right-4 lg:bottom-10 lg:right-0 bg-white p-2 px-3 rounded-lg shadow-lg z-20 flex items-center gap-2 border border-purple-50">
      <span className="text-xs sm:text-sm">⚡</span>
      <span className="text-[8px] sm:text-[9px] font-extrabold text-slate-800">Fast Disbursal</span>
    </div>

    {/* Scaled container for mobile */}
    <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] flex items-center justify-center py-6 lg:py-10">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6C5CE7]/30 via-transparent to-white blur-2xl lg:blur-3xl animate-pulse -z-10"></div>
      <div className="absolute w-[105%] h-[105%] border-2 border-dashed border-purple-200 rounded-full animate-[spin_20s_linear_infinite] opacity-30 lg:opacity-50"></div>

      <div className="relative z-10 animate-[float_6s_easeInOut_infinite] group">
        <div className="relative rounded-[30px] lg:rounded-[40px] overflow-hidden border-4 border-white shadow-2xl">
          <img 
            src="heroImg.png" 
            alt="Family Illustration" 
            className="w-full h-auto object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#6C5CE7]/10 to-transparent"></div>
        </div>
      </div>
    </div>
  </div>
);

export default AnimatedHeroImage;