import { useState } from "react";

/*
useState è un Hook fondamentale di React che consente di gestire lo stato nei componenti funzionali.
Lo stato (state) viene usato per memorizzare dati dinamici che cambiano nel tempo o in risposta a interazioni dell’utente.
Gli Hook devono sempre avere il prefisso "use", essere utilizzati solo all'interno del corpo della funzione del componente,
mai all’esterno né in modo condizionale.
I nomi dei componenti React DEVONO iniziare con lettera maiuscola affinché React li riconosca come tali.

Esempio di best practice: toggle di un titolo.
*/

const UsoBase = () => {
  // Inizializzo lo stato con valore "Hello World"
  const [titolo, setTitolo] = useState("Hello World");

  // Funzione che alterna il titolo con logica condizionale
  const cambiaTitolo = (e) => {
    // setTitolo aggiorna lo stato e forza il re-render del componente
    if (titolo === "Hello World") {
      setTitolo("Titolo cambiato");
    } else {
      setTitolo("Hello World");
    }
  };

  // La UI stampa sempre il valore aggiornato di titolo
  return (
    <>
      <h2>{titolo}</h2>
      <button type="button" onClick={cambiaTitolo}>
        Change Me
      </button>
    </>
  );
};

export default UsoBase;

/*
NOTE IMPORTANTI

- useState crea una coppia stato/setter: [valore, funzione] = useState(valoreIniziale)
- Ogni chiamata a setTitolo aggiorna lo stato e scatena il re-render del componente con il nuovo valore.
- Gli Hook vanno chiamati sempre:
  - Solo all’inizio della funzione componente (mai in cicli, condizioni, o funzioni annidate!)
  - Solo dentro funzioni che siano componenti React o altri custom Hook.
- Un componente React deve SEMPRE avere la prima lettera maiuscola (esempio: UsoBase, non usoBase).
- Lo stato è isolato per ogni istanza del componente e non persiste tra refresh della pagina.
- Il cambio di stato è asincrono: leggere subito dopo il valore della variabile potrebbe restituire il valore precedente.
*/
