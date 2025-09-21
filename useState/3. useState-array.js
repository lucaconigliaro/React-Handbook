import { useState } from "react";
import { data } from "../../../data";

/*
Gestire array con useState è una pratica fondamentale in React per manipolare elenchi dinamici.
Quando si modifica un array nello stato (state), è necessario creare una nuova copia dell’array anziché modificarlo direttamente,
per rispettare il principio di immutabilità e consentire a React di rilevare correttamente i cambiamenti per il re-render.
Questo esempio mostra come rimuovere in modo dinamico gli elementi da una lista di persone con uno stato gestito,
utilizzando la funzione di aggiornamento di useState.
*/

const ArrayState = () => {
  // Inizializzo lo stato people partendo dai dati importati
  const [people, setPeople] = useState(data);

  // Funzione per rimuovere una persona dalla lista tramite id
  const removeItem = (id) => {
    // Creo un nuovo array filtrato, escludendo l'elemento con id corrispondente
    let newPeople = people.filter((el) => el.id !== id);
    setPeople(newPeople); // Aggiorno lo stato con il nuovo array
  };

  // Renderizzo la lista di persone. Ogni elemento visualizza nome e bottone di rimozione
  return (
    <>
      {people.map((el) => {
        const { id, name } = el;
        return (
          <div key={id} className="item shadow">
            <h5>{name}</h5>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeItem(id)}
            >
              x
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ArrayState;

/*
NOTE IMPORTANTI

- Lo stato degli array deve sempre essere aggiornato in modo immutabile (mai modificare direttamente l’array).
- Quando si usa .filter(), .map() o metodi simili, si crea automaticamente un nuovo array, che React riconosce come cambiato.
- Assegnare una key unica quando si mappano array è fondamentale per evitare errori di rendering.
- Per array complessi, la destrutturazione migliora la leggibilità (es: const { id, name } = el).
- React aggiorna la UI ogni volta che lo stato “people” cambia, mostrando istantaneamente la lista aggiornata.
- In ambienti React moderni, è prassi gestire array nello state con useState e metodi come map, filter, ecc.
*/
