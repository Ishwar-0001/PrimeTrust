import React from 'react';

const HeroForm = () => (
  <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 w-full">
    <div>
      <div className="inline-block px-3 py-1 bg-white rounded-full shadow-sm border border-purple-100 mb-3">
        <span className="text-[#6C5CE7] font-bold text-[10px] uppercase tracking-wider">✨ #1 Loan Aggregator</span>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 leading-tight">
        Get Instant <br className="hidden lg:block" /> <span className="text-[#6C5CE7]">Loan Approval</span>
      </h1>
    </div>

    <div className="bg-white p-5 rounded-[24px] shadow-xl border border-white w-full max-w-sm">
      <div className="space-y-3">
        <select className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#6C5CE7]">
          <option>Select Loan Type</option>
          <option>Personal Loan</option>
          <option>Home Loan</option>
          <option>Car Loan</option>
          <option>Business Loan</option>
        </select>
        <div className="grid grid-cols-2 gap-2">
          <input type="number" placeholder="Amount (₹)" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#6C5CE7]" />
          <input type="tel" placeholder="Mobile" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#6C5CE7]" />
        </div>
        <button className="w-full py-3 bg-[#6C5CE7] text-white rounded-xl font-bold text-xs shadow-lg hover:brightness-110 active:scale-[0.98] transition-all">
          Check Eligibility →
        </button>
      </div>
      <div className="flex justify-between mt-3 text-[9px] text-purple-400 font-bold opacity-70">
        <span>🔒 100% SECURE</span>
        <span>⚡ 5 MIN PROC.</span>
      </div>
    </div>
  </div>
);

export default HeroForm;