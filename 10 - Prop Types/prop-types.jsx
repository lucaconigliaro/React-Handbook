import PropTypes from "prop-types";
import { datiIncompleti } from "../../../data";
/*
In React, le props sono il modo principale per passare dati dai componenti genitori ai figli.
Per migliorare la robustezza del codice e prevenire errori,
React offre la possibilità di specificare i tipi previsti delle props tramite la libreria PropTypes,
e di assegnare valori di default con defaultProps.

PropTypes permette di verificare in fase di sviluppo che le props siano del tipo atteso,
segnalando warning in console in caso contrario.
defaultProps consente invece di fornire valori predefiniti per le props non passate,
evitando errori o contenuti mancanti.

Questo migliora la manutenzione, il debugging e la chiarezza del codice JSX.

*/

const defaultImage =
  "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg";

const PropComponent = () => {
  return (
    <div>
      {/* Mappo l'array di prodotti, passando tutte le proprietà a Prodotto */}
      {datiIncompleti.map((el) => (
        <Prodotto key={el.id} {...el} />
      ))}
    </div>
  );
};

// Componente Prodotto con gestione di props e fallback
const Prodotto = ({ nome, image, prezzo }) => {
  // Estraggo in modo sicuro l'url dell'immagine, se esiste
  const img = image && image.url;

  return (
    <article>
      <div>
        {/* Se img non esiste, uso immagine default */}
        <img src={img || defaultImage} alt={nome || "divano default"} />
        <div>
          {/* Valori di default in caso di props mancanti o falsy */}
          <h4>{nome || "divano default"}</h4>
          <p>€ {prezzo || 7.99}</p>
        </div>
      </div>
    </article>
  );
};

// Definisco tipi e obbligatorietà con PropTypes
Prodotto.propTypes = {
  nome: PropTypes.string.isRequired,
  prezzo: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

// Valori di default per props undefined
Prodotto.defaultProps = {
  nome: "divano default",
  prezzo: 17.99,
};

export default PropComponent;

/*
NOTE IMPORTANTI
- PropTypes aiuta a validare i tipi delle props in fase di sviluppo riducendo errori.
- defaultProps definisce valori di fallback per props non definite, migliorando robustezza del componente.
- Le props con .isRequired devono essere passate per evitare warning in console.
- defaultProps funziona solo se la prop è undefined, non per valori null o falsy.
- Lo spread {...el} è comodo per passare tutte le proprietà di un oggetto come singole props.
- Gestire fallback nel JSX con || migliora l’esperienza utente evitando contenuti vuoti o errori.
- Questo pattern è fondamentale per componenti riutilizzabili e complessi in React.
*/
