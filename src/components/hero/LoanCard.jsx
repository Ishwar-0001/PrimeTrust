import React from 'react';

const LoanCard = ({ icon, title }) => (
  <div className="bg-white p-2 sm:p-3 rounded-xl flex flex-col items-center justify-center shadow-sm border border-transparent hover:border-[#6C5CE7] hover:shadow-md transition-all cursor-pointer group w-full">
    <div className="text-xl sm:text-2xl mb-1 group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-[9px] sm:text-[10px] font-bold text-slate-700 whitespace-nowrap">{title}</span>
  </div>
);

export default LoanCard;