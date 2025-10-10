import { useState, useContext } from "react";
import { data } from "../../../data";

/*
React Context è uno strumento potente che consente di condividere dati tra componenti
senza la necessità di passare props manualmente a ogni livello, risolvendo il problema del "prop drilling".
Questo esempio mostra come usare createContext, useContext e un Context Provider per gestire uno stato condiviso di persone
e una funzione per rimuoverle, accessibile in più componenti senza passaggio esplicito di props.
*/

// Creazione del contesto globale
const AppContext = createContext();

const MainComponent = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => setPeople(people.filter((el) => el.id !== id));

  // Fornisce a tutta la gerarchia sotto AppContext.Provider le props people e removePeople
  return (
    <AppContext.Provider value={{ people, removePeople }}>
      <div>
        <h3> Use Context Component </h3>
        <Elenco />
      </div>
    </AppContext.Provider>
  );
};

const Elenco = () => {
  // Consuma il contesto senza passare props
  const info = useContext(AppContext);
  console.log(info); // Mostra l’oggetto contenente people e removePeople

  return (
    <div>
      {/* Mappa people dal contesto a Persona */}
      {info.people.map((el, index) => {
        return <Persona key={index} {...el} />;
      })}
    </div>
  );
};

const Persona = ({ id, name }) => {
  // Accede alla funzione di rimozione dal contesto
  const { removePeople } = useContext(AppContext);

  return (
    <div>
      <h5> {name} </h5>
      {/* Bottone rimuove la persona con id */}
      <button onClick={() => removePeople(id)}>
        x
      </button>
    </div>
  );
};

export default MainComponent;

/*
NOTE IMPORTANTI
- Il Context evita il problema del "prop drilling" permettendo di condividere dati/funzioni in profondità nella gerarchia con facilità.
- useContext consuma i valori definiti nel Context Provider senza bisogno di props manuali.
- L’uso di context è consigliato per dati globali o condivisi (stati globali, tema, autenticazione).
- Nel provider si può passare un oggetto con tutti i valori e metodi da condividere.
- Components possono decidere quali parti del contesto usare, migliorando riusabilità e modularità.
- Attenzione all’uso ponderato del context, perché ogni cambiamento nel valore del provider fa aggiornare tutti i componenti che lo usano.
*/