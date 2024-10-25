import React from 'react';
import { Helmet } from 'react-helmet';
import ContactHero from '../../components/contactHero/ContactHero';
import FormContact from '../../components/FormContact/FormContact';
import MapsContact from '../../components/mapsContact/MapsContact';

/**
 * Contacts - Page de contact
 * 
 * Cette page permet aux visiteurs de contacter Ophir Technologies.
 * Elle fournit plusieurs moyens de communication et d'interaction.
 * 
 * Composants inclus :
 * - ContactHero : En-tête de la page avec un message d'accueil
 * - FormContact : Formulaire de contact pour les demandes directes
 * - MapsContact : Carte interactive montrant l'emplacement de l'entreprise
 * 
 * L'objectif est de faciliter la communication entre les visiteurs et l'entreprise,
 * en offrant des options variées et faciles d'accès pour entrer en contact.
 */
const Contacts = () => {
  return (
    <div>
      <Helmet>
        <title>Contactez-nous - Ophir Technologies</title>
        <meta name="description" content="Contactez Ophir Technologies pour en savoir plus sur nos solutions de télémédecine. Notre équipe est là pour répondre à toutes vos questions." />
        <meta name="keywords" content="contact, support, assistance, Ophir Technologies" />
        <meta property="og:title" content="Contactez-nous - Ophir Technologies" />
        <meta property="og:description" content="Besoin d'informations sur nos solutions de télémédecine ? Contactez-nous !" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ophirtechnologies.com/contact" />
        <meta property="og:image" content="https://www.ophirtechnologies.com/contact-og-image.jpg" />
      </Helmet>
      <ContactHero />
      <FormContact />
      <MapsContact />
    </div>
  );
};

export default Contacts;
