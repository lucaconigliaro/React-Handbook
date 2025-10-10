import { useState } from "react";

/*
La Short Circuit Evaluation è una tecnica di JavaScript che sfrutta gli operatori logici (&&, ||)
per mostrare valori condizionali in modo compatto.
Nello specifico, l’operatore OR (||) restituisce il primo valore “truthy”, mentre il ternario (condizione ? A : B)
permette di stampare valori e componenti diversi a seconda dello stato.
In React, questi pattern sono usati per rendere condizioni direttamente dentro il JSX, evitando strutture if esplicite e rendendo il rendering più dichiarativo e leggibile.
*/

const ShortRender = () => {
  const [parola, setParola] = useState("Sono una Parola");

  const [toggle, setToggle] = useState(false);

  // esempio di short circuit: parola || "sono un esempio"

  return (
    <div>
      {/* Se 'parola' è vuota, visualizza il valore di default */}
      <h2>{parola || "Uso un Esempio se non è inserito un valore"}</h2>

      {/* Operatore ternario: se toggle è true mostra "Vero", altrimenti "Falso" */}
      {toggle ? <h2> Vero </h2> : <h5> Falso</h5>}

      {/* Bottone che inverte lo stato toggle */}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "falso" : "vero"}
      </button>
    </div>
  );
};

export default ShortRender;

/*
NOTE IMPORTANTI
- L’operatore OR (||) restituisce il primo valore valido (truthy), utile per valori di default.
- Il ternario (condizione ? vero : falso) è il modo idiomatico React per condizioni di rendering nello stesso punto.
- Short circuit è spesso usato per evitare if espliciti e snellire il codice.
- Puoi concatenare condizioni e operatori per logiche più complesse.
- Questi pattern velocizzano la scrittura e la manutenzione delle condizioni in JSX.
*/
