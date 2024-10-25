import React from 'react';
import { Helmet } from 'react-helmet';
import LandingPageHero from '../../components/landingPageHero/landingPageHero';
import ProductSection from '../../components/productSection/productSection';
import MiniAboutSection from '../../components/miniAboutSection/MiniAboutSection';
import CompanyCVM from '../../components/companyCVM/companyCVM';
import WhyChoose from '../../components/whyChoose/whyChoose';
import ImageSlider from '../../components/imageSlider/imageSlider';
import BlogSection from '../../components/BlogSection/BlogSection';

/**
 * LandingPage - Page d'accueil principale
 * 
 * Cette page sert de vitrine principale pour Ophir Technologies.
 * Elle présente un aperçu complet des services, produits et valeurs de l'entreprise.
 * 
 * Composants inclus :
 * - LandingPageHero : Section d'en-tête avec un message d'accroche
 * - ProductSection : Présentation des produits phares
 * - MiniAboutSection : Bref aperçu de l'entreprise
 * - CompanyCVM : Présentation de la culture, vision et mission de l'entreprise
 * - WhyChoose : Raisons de choisir Ophir Technologies
 * - ImageSlider : Carrousel d'images mettant en valeur les solutions
 * - BlogSection : Derniers articles du blog
 * 
 * Cette structure permet aux visiteurs d'avoir une vue d'ensemble 
 * complète de l'offre et de l'identité d'Ophir Technologies.
 */
const LandingPage = () => {
  return (
    <div className="landing-page">
      <Helmet>
        <title>Ophir Technologies - Solutions innovantes de télémédecine</title>
        <meta name="description" content="Découvrez les solutions de télémédecine innovantes d'Ophir Technologies. Nous révolutionnons l'accès aux soins en combinant expertise médicale et technologie avancée." />
        <meta name="keywords" content="télémédecine, santé connectée, innovation médicale, Ophir Technologies" />
        <meta property="og:title" content="Ophir Technologies - Solutions innovantes de télémédecine" />
        <meta property="og:description" content="Révolutionnez l'accès aux soins avec nos solutions de télémédecine innovantes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ophirtechnologies.com" />
        <meta property="og:image" content="https://www.ophirtechnologies.com/og-image.jpg" />
      </Helmet>
      <LandingPageHero />
      <ProductSection />
      <MiniAboutSection />
      <CompanyCVM />
      <WhyChoose />
      <ImageSlider/>
      <BlogSection />
    </div>
  );
};

export default LandingPage;
