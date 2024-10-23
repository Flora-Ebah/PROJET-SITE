import React from 'react';
import ServiceHero from '../../components/serviceHero/ServiceHero';
import ServiceSection from '../../components/serviceSection/ServiceSection';
import ServiceFaq from '../../components/serviceFaq/ServiceFaq';

const Services = () => {
  return (
    <div>
      <ServiceHero />
      <ServiceSection />
      <ServiceFaq />
      {/* Autres composants et contenu de la page Services */}
    </div>
  );
};

export default Services;

