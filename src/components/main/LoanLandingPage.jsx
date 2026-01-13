import React, { useState, useEffect } from "react";
import {
  User,
  Phone,
  IndianRupee,
  Send,
  ChevronDown,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const LoanApplicationPage = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(24);
  const [emi, setEmi] = useState(0);

  // EMI Formula
  useEffect(() => {
    const p = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure;
    const emiCalc = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(Math.round(emiCalc));
  }, [loanAmount, interestRate, tenure]);

  return (
    <div className="bg-[#f8f7ff] py-6 sm:py-8 px-3 sm:px-4 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">

        {/* LEFT – EMI CALCULATOR */}
        <div className="bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] rounded-[1.75rem] sm:rounded-[2.5rem] p-4 sm:p-6 shadow-xl text-white relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-28 sm:w-40 h-28 sm:h-40 bg-white/10 rounded-full -mr-10 sm:-mr-16 -mt-10 sm:-mt-16 blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="p-1.5 sm:p-2 bg-white/20 rounded-xl">
                <Sparkles size={16} className="text-purple-200" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold">
                Calculate Your EMI
              </h2>
            </div>

            {/* Controls */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-gray-800 shadow-lg mb-4 sm:mb-6">
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    label: "Loan Amount",
                    val: loanAmount,
                    min: 50000,
                    max: 5000000,
                    step: 10000,
                    fn: setLoanAmount,
                    prefix: "₹",
                  },
                  {
                    label: "Interest Rate",
                    val: interestRate,
                    min: 5,
                    max: 25,
                    step: 0.1,
                    fn: setInterestRate,
                    suffix: "%",
                  },
                  {
                    label: "Tenure (Months)",
                    val: tenure,
                    min: 6,
                    max: 60,
                    step: 1,
                    fn: setTenure,
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">
                      <span>{item.label}</span>
                      <span className="text-[#7c3aed]">
                        {item.prefix}
                        {item.val.toLocaleString()}
                        {item.suffix}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={item.min}
                      max={item.max}
                      step={item.step}
                      value={item.val}
                      onChange={(e) => item.fn(Number(e.target.value))}
                      className="w-full h-1.5 sm:h-2 bg-purple-50 rounded-lg appearance-none cursor-pointer accent-[#7c3aed]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 flex flex-col items-center text-center">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest opacity-70">
                Monthly EMI
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-1">
                ₹{emi.toLocaleString()}
              </h3>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 flex items-center gap-2 sm:gap-3">
              <div className="relative w-12 sm:w-14 h-12 sm:h-14">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r="24"
                    stroke="currentColor"
                    strokeWidth="5"
                    fill="transparent"
                    className="text-white/20"
                  />
                  <circle
                    cx="28"
                    cy="28"
                    r="24"
                    stroke="#fb923c"
                    strokeWidth="5"
                    fill="transparent"
                    strokeDasharray={150}
                    strokeDashoffset={40}
                  />
                </svg>
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase opacity-70">
                  Total Interest
                </p>
                <p className="text-xs sm:text-sm font-bold">
                  ₹{Math.round(emi * tenure - loanAmount).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="bg-white rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-7 shadow-lg border border-purple-50 flex flex-col justify-center">
          <div className="mb-4 sm:mb-6 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-black text-gray-800">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 font-medium">
              Fill the form & our expert will contact you within 15 minutes.
            </p>
          </div>

          <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Name */}
            <div className="border-b-2 border-gray-100 focus-within:border-[#7c3aed] pb-1.5 sm:pb-2">
              <label className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">
                Full Name
              </label>
              <div className="flex items-center mt-1">
                <User size={14} className="text-gray-300 mr-2 sm:mr-3" />
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  className="w-full outline-none bg-transparent text-xs sm:text-sm font-medium"
                />
              </div>
            </div>

            {/* Mobile & Amount */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="border-b-2 border-gray-100 focus-within:border-[#7c3aed] pb-1.5 sm:pb-2">
                <label className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">
                  Mobile Number
                </label>
                <div className="flex items-center mt-1">
                  <Phone size={14} className="text-gray-300 mr-2 sm:mr-3" />
                  <input
                    type="tel"
                    placeholder="+91 98xxxxxxx"
                    className="w-full outline-none bg-transparent text-xs sm:text-sm font-medium"
                  />
                </div>
              </div>

              <div className="border-b-2 border-gray-100 focus-within:border-[#7c3aed] pb-1.5 sm:pb-2">
                <label className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">
                  Amount
                </label>
                <div className="flex items-center mt-1">
                  <IndianRupee size={14} className="text-gray-300 mr-2 sm:mr-3" />
                  <input
                    type="number"
                    placeholder="500000"
                    className="w-full outline-none bg-transparent text-xs sm:text-sm font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Loan Type */}
            <div className="border-b-2 border-gray-100 focus-within:border-[#7c3aed] pb-1.5 sm:pb-2">
              <label className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">
                Loan Purpose
              </label>
              <div className="relative mt-1">
                <select className="w-full bg-transparent outline-none appearance-none text-xs sm:text-sm font-medium">
                  <option>Personal Loan</option>
                  <option>Business Expansion</option>
                  <option>Education Loan</option>
                  <option>Home Renovation</option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300"
                />
              </div>
            </div>

            {/* Button */}
            <button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg shadow-purple-200 transition-all flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm uppercase tracking-widest">
                Apply for Loan
              </span>
              <Send size={14} />
            </button>

            {/* Security */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[#22c55e]">
              <ShieldCheck size={12} />
              <span className="text-[9px] sm:text-[10px] font-bold uppercase">
                256-bit SSL Secure
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationPage;
