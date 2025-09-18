// React usa un sistema di gestione eventi sintetico (Synthetic Events) che funziona allo stesso modo su tutti i browser.
// Gli eventi sono gestiti tramite props speciali che iniziano con "on" (es: onClick, onChange, onSubmit).

// Sintassi tipica: si passa una funzione al listener dell'evento come prop JSX.

// Esempio base: bottone che gestisce il click

function Pulsante() {
  // Funzione handler dell'evento click
  function handleClick() {
    alert('Hai cliccato il pulsante!');
  }

  // Il gestore viene passato come reference (non chiamato con parentesi)
  return (
    <button onClick={handleClick}>
      Cliccami
    </button>
  );
}

// Esempio con funzione arrow inline

function Pulsante2() {
  return (
    <button onClick={() => alert('Click con arrow function')}>
      Clicca anche me
    </button>
  );
}

// Eventi comuni:
// onClick, onChange, onSubmit, onMouseOver, onFocus, onBlur, onKeyDown, onKeyUp, ecc.

// Accesso all'evento:
// La funzione gestore riceve un oggetto evento sintetico come parametro
function InputTesto() {
  function handleChange(event) {
    console.log('Valore input:', event.target.value);
  }

  return (
    <input type="text" onChange={handleChange} />
  );
}

/*
Note importanti:
- In React gli eventi si scrivono in camelCase (es: onClick, non onclick).
- Non si usa return false per fermare l'evento, ma event.preventDefault() all'interno del handler.
- React astrae le differenze di implementazione degli eventi tra browser.
- Ricordarsi di passare la funzione handler senza parentesi, altrimenti viene eseguita immediatamente.
- Se serve passare parametri, si usa una funzione arrow o si avvolge la chiamata in una funzione anonima.
*/
