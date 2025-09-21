import { useState } from "react";

/*
Quando lo stato di un componente React deve gestire più proprietà correlate (ad esempio dati di una persona),
è possibile racchiudere tutte le informazioni in un unico oggetto nello state.
Questo approccio rende più semplice la gestione, il passaggio e l’aggiornamento dello stato quando le proprietà sono logicamente collegate.
Per aggiornare parzialmente un oggetto nello state, si usa lo spread operator (...), creando una copia dell’oggetto originale e sovrascrivendo soltanto le proprietà che cambiano.
*/

// Esempio con stato oggetto

const StateObject = () => {
  // Stato singolo oggetto che contiene tutte le proprietà
  const [person, setPerson] = useState({
    name: "Luca",
    age: 29,
    saluto: "Ciao",
  });

  // Funzione per aggiornarne solo alcune proprietà (senza perdere le altre!)
  const cambiaSaluto = () => {
    setPerson({
      ...person,    // copia tutte le proprietà da person
      age: 25,      // sovrascrive solo age
      // Puoi aggiungere property: nuovoValore per aggiornare altre proprietà
    });
  };

  // Renderizzo dati e bottone
  return (
    <div className="item shadow">
      <div className="text-left">
        <h5>{person.name}</h5>
        <h5>{person.age}</h5>
        <h6>{person.saluto}</h6>
      </div>
      <button className="button" onClick={cambiaSaluto}>
        Cambia il Saluto
      </button>
    </div>
  );
};

export default StateObject;

/*
NOTE IMPORTANTI

- Usare un oggetto nello state è utile quando le proprietà sono collegate o sarebbe scomodo gestire tanti useState separati.
- Per aggiornare una sola proprietà dell'oggetto si usa sempre lo spread operator, altrimenti si rischia di perdere i dati non aggiornati.
- Non bisogna mai modificare direttamente l’oggetto nello state: occorre crearne una copia aggiornata.
- Puoi aggiornare più proprietà contemporaneamente, es:
    setPerson({ ...person, age: 25, saluto: "Ciao ho fatto gli anni" });
- Una buona pratica è inizializzare lo stato con tutte le proprietà previste, anche quelle che verranno popolate in seguito.
*/
