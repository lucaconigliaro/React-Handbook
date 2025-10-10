import { useEffect, useState } from "react";

/*
Gestire input controllati tramite un unico oggetto di state (persona) migliora la scalabilità e la manutenzione dei form React.
Questo pattern permette di aggiungere facilmente nuovi campi, gestirli in modo dinamico e aggiornare lo stato in maniera efficiente.
L’oggetto viene aggiornato sfruttando lo spread operator e la notazione dinamica delle proprietà ([name]: value).
Quando tutti i campi sono compilati, la persona viene aggiunta a un array di persone, che tiene traccia delle submission.
useEffect consente di monitorare le modifiche all’array per debugging o side effects.
*/

const ControlledInput = () => {
  const [persone, setPersone] = useState([]);
  const [persona, setPersona] = useState({
    nome: "",
    email: "",
    cellulare: "",
  });

  /**
   * Gestione submit: aggiunge la persona all’array se tutti i campi sono presenti,
   * poi resetta il form. L’id viene generato con timestamp.
   */
  const handleSumbit = (e) => {
    e.preventDefault();
    if (persona.nome && persona.email && persona.cellulare) {
      setPersone([
        ...persone,
        {
          id: new Date(Date.now()).getTime().toString(),
          ...persona,
        },
      ]);
      setPersona({
        nome: "",
        email: "",
        cellulare: "",
      });
    } else {
      alert("riempi il form");
    }
  };

  /**
   * Gestione di input dinamico: aggiorna solo il campo modificato usando la notazione [name]
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona({ ...persona, [name]: value });
  };

  // Monitoraggio aggiunta nuove persone usando useEffect per debugging
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
          value={persona.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={persona.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cellulare">Cellulare:</label>
        <input
          id="cellulare"
          type="tel"
          name="cellulare"
          value={persona.cellulare}
          onChange={handleChange}
        />
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
- Gestire più input con un solo oggetto state semplifica la logica e la scalabilità dei form React.
- Ogni cambiamento aggiorna la proprietà corrispondente tramite [name]: value, rendendo il codice più generico.
- Il submit verifica la presenza di tutti i campi, inserisce la persona e resetta il form.
- L’array "persone" viene gestito in modo immutabile con lo spread operator.
- useEffect consente il debugging e il monitoraggio delle aggiunte.
- Il pattern è estendibile: basta aggiungere proprietà e input senza modificare tutta la logica di handleChange.
*/
