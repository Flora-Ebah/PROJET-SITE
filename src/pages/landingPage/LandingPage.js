import React from 'react';
import LandingPageHero from '../../components/landingPageHero/landingPageHero';
import ProductSection from '../../components/productSection/productSection';
import MiniAboutSection from '../../components/miniAboutSection/MiniAboutSection';
import CompanyCVM from '../../components/companyCVM/companyCVM';
import WhyChoose from '../../components/whyChoose/whyChoose';
import ImageSlider from '../../components/imageSlider/imageSlider';
import BlogSection from '../../components/BlogSection/BlogSection';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <LandingPageHero />
      <ProductSection />
      <MiniAboutSection />
      <CompanyCVM />
      <WhyChoose />
      <ImageSlider/>
      <BlogSection />
      {/* Autres composants ou sections de la page d'accueil */}
    </div>
  );
};

export default LandingPage;
