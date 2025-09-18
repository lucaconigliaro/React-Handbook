// La prop speciale 'children' permette di inserire contenuti (elementi React o JSX) all’interno di un componente come suo contenuto interno, 
// cioè tutto ciò che viene scritto tra il tag di apertura e chiusura di quel componente.

// Esempio base di utilizzo di props.children:

function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

function App() {
  return (
    <Wrapper>
      <h1>Benvenuto!</h1>
      <p>Questo testo è passato come children.</p>
    </Wrapper>
  );
}

// Nel codice sopra, il componente Wrapper renderizza esattamente tutto ciò che gli è stato passato come contenuto interno, tramite {children}.

// props.children è molto utile per creare componenti riutilizzabili e flessibili che possono contenere contenuti variabili.

// Esempio con mappatura e passaggio di props ai figli tramite React.Children:

import React from 'react';

function ListaWrapper({ children }) {
  // React.Children.map permette di iterare sui children in modo sicuro anche se singolo o multiplo
  return (
    <ul>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { className: 'lista-item' })
      )}
    </ul>
  );
}

function App2() {
  return (
    <ListaWrapper>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ListaWrapper>
  );
}

// Note importanti:
/*
- props.children contiene tutto l’elemento JSX inserito tra i tag di un componente.
- Può essere un singolo elemento, un array o anche null.
- Utilizzare React.Children.map è il modo consigliato per iterare sui children, perché gestisce casi di singolo elemento o array.
- React.cloneElement consente di clonare un child e aggiungergli nuove props.
- props.children rende possibile creare componenti wrapper, layout o componenti altamente riutilizzabili.
*/
