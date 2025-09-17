# Portfolio Personale

Questo è il repository per il mio portfolio personale, un sito web statico e responsive progettato per mostrare le mie competenze, i miei progetti e per fornire un modo semplice per contattarmi.

## Tecnologie Utilizzate

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Librerie:**
  - [Font Awesome](https://fontawesome.com/) per le icone.
  - [EmailJS](https://www.emailjs.com/) per la gestione del form di contatto senza un backend.
  - [Google Fonts](https://fonts.google.com/) per i caratteri personalizzati.

## Funzionalità

- **Design Responsive:** Il layout si adatta a diverse dimensioni di schermo, dai dispositivi mobili ai desktop.
- **Animazioni al Caricamento:** Effetti di "fade-in" per gli elementi della pagina mentre l'utente scorre, implementati con `IntersectionObserver` API.
- **Generazione Dinamica dei Contenuti:** Le sezioni "Competenze" e "Portfolio" sono generate dinamicamente da array di oggetti in JavaScript, rendendo facile l'aggiornamento.
- **Header a Scomparsa:** L'header si nasconde quando si scorre verso il basso e riappare quando si scorre verso l'alto per massimizzare lo spazio visibile.
- **Form di Contatto Funzionante:** Un form di contatto che invia email direttamente alla mia casella di posta utilizzando EmailJS.

## Setup

Essendo un sito web statico, non è richiesto un processo di build complesso. È sufficiente aprire il file `index.html` in un browser web. Per la funzionalità del form di contatto, è necessario configurare il proprio account EmailJS e inserire le proprie chiavi in `index.html` e `script.js`.
