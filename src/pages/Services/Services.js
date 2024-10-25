import React from 'react';
import { Helmet } from 'react-helmet';
import ServiceHero from '../../components/serviceHero/ServiceHero';
import ServiceSection from '../../components/serviceSection/ServiceSection';
import ServiceFaq from '../../components/serviceFaq/ServiceFaq';

/**
 * Services - Page de présentation des services
 * 
 * Détaille les services offerts par Ophir Technologies.
 * 
 * Composants :
 * - ServiceHero : En-tête de la page
 * - ServiceSection : Description des services
 * - ServiceFaq : Questions fréquemment posées
 * 
 * Vise à informer les visiteurs sur l'étendue des services disponibles.
 */
const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Nos Services - Ophir Technologies</title>
        <meta name="description" content="Découvrez notre gamme complète de services de télémédecine. Des solutions innovantes pour améliorer l'accès aux soins et l'efficacité médicale." />
        <meta name="keywords" content="services de télémédecine, consultation à distance, suivi médical, Ophir Technologies" />
        <meta property="og:title" content="Nos Services - Ophir Technologies" />
        <meta property="og:description" content="Solutions de télémédecine innovantes pour améliorer l'accès aux soins." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ophirtechnologies.com/services" />
        <meta property="og:image" content="https://www.ophirtechnologies.com/services-og-image.jpg" />
      </Helmet>
      <ServiceHero />
      <ServiceSection />
      <ServiceFaq />
    </div>
  );
};

export default Services;
