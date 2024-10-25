import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    // Récupérez le token CSRF depuis votre serveur
    fetch('/api/csrf-token')
      .then(response => response.json())
      .then(data => setCsrfToken(data.csrfToken));
  }, []);

  return (
    <form method="POST" action="/api/contact">
      <input type="hidden" name="_csrf" value={csrfToken} />
      {/* ... autres champs du formulaire ... */}
    </form>
  );
};

export default ContactForm;
