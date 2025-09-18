// In React è molto comune sfruttare la destrutturazione per estrarre rapidamente le proprietà di un oggetto, specialmente le props di un componente.
// Lo spread operator è particolarmente utile per creare copie immutabili di oggetti o per passare tutte le proprietà di un oggetto come props.

// ESEMPIO: una Card che mostra informazioni di un prodotto

function CardProdotto({ nome, prezzo, descrizione }) {
  return (
    <div className="card">
      <h2>{nome}</h2>
      <p>Prezzo: €{prezzo}</p>
      <p>{descrizione}</p>
    </div>
  );
}

// Usare la destrutturazione direttamente nel parametro funzione (props destrutturate)

// Ora immaginiamo di avere un oggetto prodotto con più proprietà
const prodotto = {
  nome: "Cuffie wireless",
  prezzo: 99.99,
  descrizione: "Cuffie Bluetooth con riduzione rumore",
  categoria: "Audio",
  disponibilita: true,
};

// Possiamo usare lo spread operator per passare tutte le props in un colpo solo
/*
<CardProdotto {...prodotto} />
*/

// In questo modo le proprietà nome, prezzo, descrizione saranno passate come singole props al componente

// Spesso in React lo spread operator serve anche a clonare o aggiornare oggetti in modo immutabile:
/*
const prodottoAggiornato = {
  ...prodotto,
  prezzo: 89.99,  // modifico solo il prezzo
}
*/

// Nota: in React lo stato (state) si aggiorna sempre creando nuovi oggetti con lo spread operator per rispettare l'immutabilità.

// NOTE IMPORTANTI:
/*
- La destrutturazione semplifica l’accesso a singole proprietà da un oggetto (p.es. props), aumentando la leggibilità.
- Lo spread operator consente di passare facilmente molte props da un oggetto senza scriverle una per una.
- Lo spread viene usato anche per creare copie immutabili di oggetti, fondamentale per aggiornamenti corretti nello state React.
- Queste tecniche rendono il codice React più compatto, efficiente e coerente con le best practice moderne.
*/
