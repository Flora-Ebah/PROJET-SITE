import React from 'react';
import AproposHero from '../../components/aproposHero/AproposHero';
import MaxAboutSection from '../../components/maxAboutSection/MaxAboutSection';

// Importez d'autres composants nécessaires ici

const Apropos = () => {
  return (
    <div className="apropos-page">
      <AproposHero />
      <MaxAboutSection />
      {/* Autres composants de la page A-propos */}
    </div>
  );
};

export default Apropos;
