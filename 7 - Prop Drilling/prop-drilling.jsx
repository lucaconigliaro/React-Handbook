import { useState } from "react";
import { data } from "../../../data";

/*
Questo esempio mostra chiaramente il passaggio delle props a cascata in React:
lo stato "people" è definito nel componente genitore MainComponent,
da cui si passa tramite props a Elenco, che a sua volta passa a Persona.
La funzione di rimozione removePeople viene anch'essa passata lungo la catena, permettendo a Persona di modificare lo stato di MainComponent pur essendo figlio.
Il pattern genitore-figlio tramite props è il modo idiomatico React per la comunicazione e aggiornamento dello stato.
*/

// COMPONENTE PRINCIPALE con stato people
const MainComponent = () => {
  const [people, setPeople] = useState(data);
  const removePeople = (id) => setPeople(people.filter((el) => el.id !== id));

  return (
    <div>
      <h3>Passaggio di Proprietà a cascata</h3>
      {/* Passo people e removePeople come props */}
      <Elenco people={people} removePeople={removePeople} />
    </div>
  );
};

// COMPONENTE ELENCO: riceve array e funzione di rimozione da props e cicla people
const Elenco = ({ people, removePeople }) => {
  return (
    <div>
      {people.map((el, index) => {
        // Passa tutte le proprietà di el (nome, id, ecc.) e la funzione removePeople a Persona
        return <Persona key={index} {...el} removePeople={removePeople} />;
      })}
    </div>
  );
};

// COMPONENTE PERSONA: riceve i dati di una persona e la funzione delete
const Persona = ({ id, name, removePeople }) => {
  return (
    <div>
      <h5> {name} </h5>
      {/* Al clic, chiama removePeople con id per eliminare la persona */}
      <button onClick={() => removePeople(id)}>x</button>
    </div>
  );
};

export default MainComponent;

/*
NOTE IMPORTANTI
- La risalita delle modifiche nello stato si effettua passando funzioni come props dai genitori ai figli.
- Lo spread operator {...el} è molto utile per passare tutte le proprietà di un oggetto come props.
- Assegnare una key univoca nei map è essenziale per il corretto funzionamento e ottimizzazione di React.
- Questo pattern facilita la gestione dello stato centralizzato mantenendo una struttura modulare e riutilizzabile.
- Alternativamente, si può usare Context o state manager esterni per evitare il passaggio pesante di props in catena.
*/
