import React from 'react';
import NavBar from './NavBar';
import Carousel from './Carousel';
import TechnicalCoursesSection from './TechnicalCoursesSection';
import NonTechnicalCoursesSection from './NonTechnicalCoursesSection';
import Footer from './Footer';
export default function Index() {
  return (
      <div>
          <NavBar />
          <Carousel />
          <TechnicalCoursesSection />
          <NonTechnicalCoursesSection />
          <Footer />
      </div>
  )
}
