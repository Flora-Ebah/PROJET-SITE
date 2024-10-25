import React from 'react';
import { Helmet } from 'react-helmet';
import ProduitsHero from '../../components/produitsHero/ProduitsHero';
import ProduitSection from '../../components/produitSection/ProduitSection';

/**
 * Produits - Page de présentation des produits
 * 
 * Présente la gamme complète des produits d'Ophir Technologies.
 * 
 * Composants :
 * - ProduitsHero : En-tête de la page
 * - ProduitSection : Grille détaillée des produits
 * 
 * Permet aux visiteurs d'explorer les différentes solutions offertes.
 */

const Produits = () => {
  return (
    <div>
      <Helmet>
        <title>Nos Produits - Ophir Technologies</title>
        <meta name="description" content="Explorez notre gamme de produits de télémédecine innovants. Des solutions technologiques avancées pour améliorer les soins de santé à distance." />
        <meta name="keywords" content="produits de télémédecine, équipement médical connecté, logiciels de santé, Ophir Technologies" />
        <meta property="og:title" content="Nos Produits - Ophir Technologies" />
        <meta property="og:description" content="Découvrez nos produits de télémédecine innovants pour des soins de santé avancés." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ophirtechnologies.com/produits" />
        <meta property="og:image" content="https://www.ophirtechnologies.com/produits-og-image.jpg" />
      </Helmet>
      <ProduitsHero />
      <ProduitSection />
    </div>
  );
};

export default Produits;
