import { useEffect, useState } from "react";

/*
Un input controllato in React è un input HTML (come text, email, tel) il cui valore è gestito dallo state del componente.
Il valore dell’input deriva dallo stato React e ogni cambiamento nell’input aggiorna lo stato tramite un handler onChange.
Questa tecnica permette di gestire in modo affidabile dati di form, validazioni, reset e lavorare su array di oggetti.
In questo esempio viene mostrato come raccogliere più dati da input, gestire il submit, validare i campi e aggiungere nuove persone
ad un array usando lo spread operator. Inoltre viene mostrato l’uso di useEffect per tracciare le aggiunte in console.

*/

const ControlledInput = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [persone, setPersone] = useState([]);

  /**
   * Gestione submit del form; aggiunge persona se tutti i campi sono riempiti,
   * altrimenti mostra alert.
   * Reset dei campi dopo inserimento.
   */
  const handleSumbit = (e) => {
    e.preventDefault();
    if (nome && email && cellulare) {
      setPersone([
        ...persone,
        {
          id: new Date(Date.now()).getTime().toString(),
          nome,
          email,
          cellulare,
        },
      ]);
      setNome("");
      setEmail("");
      setCellulare("");
    } else {
      alert("riempi il form");
    }
  };

  //Gestisce la modifica del campo cellulare
  const handleChange = (e) => {
    const { value } = e.target;
    setCellulare(value);
  };

  // Traccia tutte le modifiche dell’array persone in console
  useEffect(() => {
    console.log(persone);
  }, [persone]);

  return (
    <form>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="cellulare">Cellulare:</label>
        <input
          id="cellulare"
          type="tel"
          name="cellulare"
          value={cellulare}
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit" onClick={handleSumbit}>
        Invia
      </button>
    </form>
  );
};

export default ControlledInput;

/*
NOTE IMPORTANTI
- Gli input controllati mantengono la fonte del valore nello stato React, garantendo coerenza e controllo totale.
- Ogni cambiamento degli input aggiorna i rispettivi stati tramite onChange.
- Gli input vengono resettati dopo l’invio per evitare dati residui tra un invio e l’altro.
- L’array persone si aggiorna in modo immutabile usando lo spread operator [...persone, nuovoOggetto].
- useEffect è utile per tracciare i cambiamenti dell’array e per debugging.
- Validare i dati nel submit è fondamentale per UX e integrità dei dati.
- La gestione separata degli state migliora flessibilità, leggibilità e manutenzione del componente.
*/
