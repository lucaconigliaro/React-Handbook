/*
In React, il corretto aggiornamento della UI dipende dall'utilizzo dello state. Variabili locali definite all'interno del componente non vengono "ascoltate" da React: se modificate, non provocano un re-render del componente e quindi la vista non si aggiorna.
Questo è uno degli errori più comuni tra gli sviluppatori alle prime armi con React: per aggiornare la UI è indispensabile usare useState (o altre API relative allo state).
*/

// ESEMPIO
const ErroreBase = () => {
  // Variabile locale, NON è state React!
  let titolo = "Hello World";

  // Handler che prova a cambiare la variabile
  const cambiaTitolo = () => {
    titolo = "Nuovo titolo";
    console.log(titolo); // Vedrai "Nuovo titolo" in console, ma la vista NON cambierà
  };

  return (
    <>
      <h2>{titolo}</h2>
      <button
        type="button"
        className="btn btn-info my-3"
        onClick={cambiaTitolo}
      >
        Change Me
      </button>
    </>
  );
};

export default ErroreBase;

/*
NOTE IMPORTANTI

- Modificare una variabile locale non aggiorna la UI in React: la vista rimane ferma al primo valore.
- Per avere una UI dinamica in React bisogna usare almeno useState (o analoghi hook/state)
*/
