import React from 'react'
import Navbar from './components/navbar/Navbar'

import HeroSection1 from './components/hero/HeroSection1'
import LoanProcess from './components/main/LoanProcess'
import PartnersSection from './components/main/IndianBankingPartners'
import TestimonialsAndStats from './components/main/TestimonialsAndStats'
import ReviewsAndFAQ from './components/main/ReviewsAndFAQ'
import LoanLandingPage from './components/main/LoanLandingPage'
import Footer from './components/footer/Footer'

export default function App() {
  return (
   <>
   <Navbar />
   <HeroSection1 />
   <LoanProcess />
   <PartnersSection />
   <TestimonialsAndStats />
   <ReviewsAndFAQ />
   <LoanLandingPage />
   <Footer />
  
   </>
  )
}
