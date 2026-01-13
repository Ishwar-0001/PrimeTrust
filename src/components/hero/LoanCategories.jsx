import React from 'react';
import LoanCard from './LoanCard';

const LoanCategories = () => (
  <div className="lg:col-span-4 w-full max-w-md mx-auto lg:mx-0">
    <h3 className="text-sm font-bold text-center lg:text-left text-slate-800 mb-4 flex items-center justify-center lg:justify-start gap-2">
      Loan Categories <span className="h-px w-8 bg-purple-200"></span>
    </h3>
    {/* 2 columns on mobile, 3 on tablet, 2 on desktop (inside the 4-column span) */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
      <LoanCard icon="🏠" title="Home Loan" />
      <LoanCard icon="🚗" title="Car Loan" />
      <LoanCard icon="💼" title="Business" />
      <LoanCard icon="🎓" title="Education" />
      <LoanCard icon="🏥" title="Medical" />
      <LoanCard icon="📱" title="Personal" />
    </div>
  </div>
);

export default LoanCategories;