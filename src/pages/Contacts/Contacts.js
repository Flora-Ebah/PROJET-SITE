// Importations existantes...
import ContactHero from '../../components/contactHero/ContactHero';
import FormContact from '../../components/FormContact/FormContact';
import MapsContact from '../../components/mapsContact/MapsContact';

const Contacts = () => {
  return (
    <div>
      <ContactHero />
      <FormContact />
      <MapsContact />
      {/* Reste du contenu de la page Contacts */}
    </div>
  );
};

export default Contacts;

