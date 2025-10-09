import { useState, useEffect } from "react";

/*
Spesso in React si ha bisogno di “agganciare” risorse esterne al componente (event listeners, timer, fetch, ecc.)
e di eliminarle quando il componente viene smontato o quando cambia il ciclo di vita.
useEffect permette di gestire questi “side effect” e include una funzione di clean up per pulire o annullare le risorse create.
Questo esempio mostra come tracciare la larghezza della finestra del browser aggiornando lo stato ogni volta che viene effettuata una resize,
memorizzando la dimensione attuale nello state React e assicurando la rimozione dell’event listener al momento giusto per evitare memory leaks.

*/

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const dimensioneFinestra = () => setSize(window.innerWidth);

  /*
   * Ad ogni resize della pagina aggiorno lo stato "size"
   * La funzione di clean up rimuove il listener in modo sicuro quando serve
   */
  useEffect(() => {
    window.addEventListener("resize", dimensioneFinestra);
    // Pulisco risorsa: rimuovo il listener
    return () => {
      window.removeEventListener("resize", dimensioneFinestra);
    };
  }, []); // []: l’effetto si lancia UNA VOLTA quando il componente viene montato

  return (
    <div
      className="container w-75 col-6 offset-3 bg-white shadow p-4 mx-auto"
      style={{ textAlign: "center" }}
    >
      <h1> {size} </h1>
    </div>
  );
};

export default CleanUp;

/*
NOTE IMPORTANTI
- useEffect può restituire una funzione di clean up: questa viene eseguita prima che l’effetto venga rilanciato o quando il componente viene smontato.
- Per ascoltare eventi globali (come "resize") è cruciale rimuovere i listener per evitare memory leaks e comportamenti indesiderati.
- L’array vuoto delle dipendenze [] assicura che il listener venga aggiunto una sola volta al montaggio del componente, e rimosso allo smontaggio.
- Aggiornare lo state dentro il listener permette di avere sempre il dato aggiornato nella UI in tempo reale.
- Senza il clean up, i listener si moltiplicherebbero a ogni render, causando bug e sprechi di risorse.
*/