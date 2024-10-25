import React from 'react';
import { Helmet } from 'react-helmet';
import AproposHero from '../../components/aproposHero/AproposHero';
import MaxAboutSection from '../../components/maxAboutSection/MaxAboutSection';

/**
 * Apropos - Page "À propos" de l'entreprise
 * 
 * Cette page présente l'histoire, la mission et les valeurs d'Ophir Technologies.
 * Elle offre aux visiteurs une compréhension approfondie de l'entreprise.
 * 
 * Composants inclus :
 * - AproposHero : En-tête de la page avec un message d'introduction
 * - MaxAboutSection : Section détaillée sur l'entreprise, son histoire et ses réalisations
 * 
 * L'objectif est de créer une connexion avec les visiteurs en partageant 
 * l'histoire et la vision d'Ophir Technologies, renforçant ainsi la confiance et la crédibilité.
 */
const Apropos = () => {
  return (
    <div className="apropos-page">
      <Helmet>
        <title>À Propos - Ophir Technologies</title>
        <meta name="description" content="Découvrez l'histoire, la mission et les valeurs d'Ophir Technologies. Leader dans le développement de solutions de télémédecine innovantes." />
        <meta name="keywords" content="à propos, histoire d'entreprise, mission, valeurs, Ophir Technologies" />
        <meta property="og:title" content="À Propos - Ophir Technologies" />
        <meta property="og:description" content="Découvrez l'histoire et la mission d'Ophir Technologies, leader en télémédecine." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ophirtechnologies.com/a-propos" />
        <meta property="og:image" content="https://www.ophirtechnologies.com/about-og-image.jpg" />
      </Helmet>
      <AproposHero />
      <MaxAboutSection />
    </div>
  );
};

export default Apropos;
