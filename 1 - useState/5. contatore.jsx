import { useState } from "react";

/*
Questo componente è un semplice contatore con le seguenti funzioni:
- Incrementare e decrementare un valore numerico (contatore) visualizzato nella UI.
- Resettare il contatore a zero.
- Incremento ritardato (dopo 2 secondi) usando setTimeout e callback di stato.
L'esempio mostra sia l'uso diretto della funzione setState sia l'uso della versione col callback che è più affidabile nelle situazioni asincrone.
*/

// COMPONENTE CONTATORE
const CounterComponent = () => {
  // Stato contatore con valore iniziale 0
  const [contatore, setContatore] = useState(0);

  // Reset del contatore a zero
  const reset = () => {
    setContatore(0);
  };

  // Incremento ritardato del contatore
  const aumenta = () => {
    // Esempio di uso della funzione con callback per aggiornare stato in modo affidabile
    // commentato perché il setTimeout è usato per delay
    /*
    setContatore((oldValue) => {
      if (oldValue + 1 === 6) {
        return oldValue; // condizione limite per esempio
      }
      return oldValue + 1;
    });
    */

    setTimeout(() => {
      // callback che usa il valore precedente dello stato (prevState)
      setContatore((oldValue) => {
        return oldValue + 1;
      });
    }, 2000); // delay di 2 secondi
  };

  // Render componente con bottoni per decremento, incremento e reset
  return (
    <div>
      <h3> {contatore}</h3>
      <div>
        <button onClick={() => setContatore(contatore - 1)}>Diminuisci</button>
        <button onClick={aumenta}>Aumenta</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterComponent;

/*
NOTE IMPORTANTI

- useState può aggiornare lo stato passando direttamente un valore (es: setContatore(3))
  oppure passando una funzione che riceve il valore precedente (importante nelle chiamate asincrone).
- La funzione callback in setState assicura che il nuovo valore sia calcolato sul valore più recente,
  evitando problemi in situazioni asincrone o con più operazioni di aggiornamento consecutive.
- setTimeout mostrato nell'esempio simula un ritardo asincrono.
- Ricorda che setState è asincrono: il valore non si aggiorna immediatamente dopo la chiamata.
- La UI si aggiorna automaticamente ad ogni cambiamento dello stato tramite re-render.
- Usa sempre la versione con callback di setState se il nuovo valore dipende da quello precedente.
*/
