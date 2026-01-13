import React from 'react';
import { 
  FileText, 
  UserCheck, 
  CheckCircle, 
  Link, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Headphones 
} from 'lucide-react';

const LoanProcess = () => {
  const topSteps = [
    { icon: <FileText size={24} />, title: "100% Paperless", desc: "Digital documentation" },
    { icon: <UserCheck size={24} />, title: "Quick Verification", desc: "Automated profile check" },
    { icon: <CheckCircle size={24} />, title: "Lowest Rates", desc: "Best market interest" },
    { icon: <Link size={24} />, title: "Instant Connect", desc: "Direct bank link" },
  ];

  const bottomSteps = [
    { icon: <ShieldCheck size={24} />, title: "Secure Process", desc: "End-to-end encrypted" },
    { icon: <Zap size={24} />, title: "Fast Approval", desc: "Instant decisioning" },
    { icon: <Lock size={24} />, title: "No Hidden Fees", desc: "Transparent pricing" },
    { icon: <Headphones size={24} />, title: "24/7 Support", desc: "Expert assistance" },
  ];

  return (
    <div className="bg-[#f3f0ff] p-6 sm:p-8 md:p-12 font-sans min-h-auto md:min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-8 md:mb-12 px-2 sm:px-4 gap-2 sm:gap-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            How it Works
          </h2>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Get Loan in 4 Simple Steps
          </h2>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {topSteps.map((step, idx) => (
            <div key={idx} className="relative flex items-center">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm flex items-center gap-3 sm:gap-4 w-full h-20 sm:h-24">
                <div className="bg-[#7c3aed] p-2 sm:p-3 rounded-full text-white shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-xs sm:text-sm leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Arrow connectors (desktop only) */}
              {idx < topSteps.length - 1 && (
                <div className="absolute -right-5 text-[#7c3aed] z-10 hidden lg:block">
                  <span className="text-xl">→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* The Dotted Divider Line */}
        <div className="relative my-6 sm:my-8 px-4 sm:px-10 hidden sm:block">
          <div className="border-t-2 border-dashed border-[#7c3aed] w-full flex justify-between items-center">
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#7c3aed] rounded-full -mt-[7px] sm:-mt-[9px]"></div>
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#7c3aed] rounded-full -mt-[7px] sm:-mt-[9px]"></div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bottomSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm flex items-center gap-3 sm:gap-4 h-20 sm:h-24"
            >
              <div className="bg-[#7c3aed] p-2 sm:p-3 rounded-full text-white shrink-0">
                {step.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-xs sm:text-sm leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LoanProcess;
