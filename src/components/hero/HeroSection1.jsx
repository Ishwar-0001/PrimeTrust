import React from 'react';
import HeroForm from './HeroForm';
import LoanCategories from './LoanCategories';
import AnimatedHeroImage from './AnimatedHeroImage';

const HeroSection1 = () => {
  return (
    <section className="relative w-full bg-[#F5F3FF] overflow-hidden px-4 sm:px-10 lg:px-16 min-h-[80vh] lg:h-[65vh] flex items-center py-12 lg:py-0">
      
      {/* Background Decor - Scaled for mobile */}
      <div className="absolute top-[-10%] right-[-10%] w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] bg-white rounded-full blur-[80px] lg:blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] bg-purple-200 rounded-full blur-[60px] lg:blur-[80px] opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Grid columns: 
            - 1 column on mobile (stacks)
            - 1 column on tablet (stacks)
            - 12 columns on desktop (side-by-side)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-8 items-center">
          
          <HeroForm />

          <LoanCategories />

          <AnimatedHeroImage />

        </div>
      </div>
    </section>
  );
};

export default HeroSection1;