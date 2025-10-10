import React from "react";
import ReactDOM from "react-dom";

/*
In React, un **Portal** consente di renderizzare un componente figlio in un nodo DOM diverso rispetto al nodo radice principale dell'applicazione.
Questo è particolarmente utile per situazioni in cui si vogliono posizionare elementi come modali, tooltip o popup 
fuori dalla gerarchia DOM principale per evitare problemi di stile, overflow o z-index.

React DOM utilizza la funzione `createPortal` per creare portali, che mantengono il contesto React ma visualizzano il contenuto in un diverso punto del DOM.
*/

// Modal semplice che usa un portal
const Modal = ({ children, isOpen, onClose }) => {
  // Se il modal non è aperto non renderizza nulla
  if (!isOpen) return null;

  // Crea il portale nel div con id "modal-root" nel DOM (assicurarsi che esista)
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>Chiudi</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") // Nodo DOM target dove il modal viene inserito
  );
};

// Componente principale che mostra come usare il Modal con Portal
const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <h1>React Portal Demo</h1>
      <button onClick={() => setIsOpen(true)}>Apri Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Questo è un contenuto modale</h2>
        <p>
          Il modal è renderizzato fuori dal DOM principale mediante un Portal.
        </p>
      </Modal>
    </div>
  );
};

export default App;

/*
NOTE IMPORTANTI
- ReactDOM.createPortal(child, container) crea un portale che rende 'child' dentro il nodo 'container' del DOM.
- Il contenuto del portal mantiene il contesto React (stato, props, event handlers), nonostante la posizione DOM differente.
- I portali sono utili per modali, tooltip, dropdown che spesso devono rompere il flusso normale del DOM per motivi di layout e z-index.
- È necessario inserire manualmente un nodo HTML (es. div con id "modal-root") nel documento HTML esterno dove verrà montato il portal.
- L'overlay gestisce click fuori dal modal per chiuderlo, con gestione di stopPropagation per evitare chiusure cliccando nel contenuto.
- L'uso di portali migliora la gestione visiva ed esperienza utente nei componenti sovrapposti.
*/
