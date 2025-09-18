// Le props (proprietà) sono il meccanismo con cui un componente React riceve dati dall'esterno, tipicamente dal suo componente genitore.
// Le props sono immutabili all'interno del componente figlio: sono solo in sola lettura.
// Permettono di personalizzare e configurare i componenti, rendendoli riutilizzabili e flessibili.

// SNIPPET 
// Componente che riceve una prop 'nome' e la visualizza
export function SalutoConNome(props) {
  return <h1>Ciao, {props.nome}!</h1>;
}

// Uso:
// <SalutoConNome nome="Mario" />
// Visualizza: Ciao, Mario!

// Sintassi con destrutturazione per scrivere codice più pulito
export function SalutoConNome2({ nome }) {
  return <h1>Ciao, {nome}!</h1>;
}

// Esempio di componente genitore che passa props
export function App() {
  return (
    <div>
      <SalutoConNome nome="Anna" />
      <SalutoConNome nome="Luca" />
    </div>
  );
}

// Note importanti:
/*
- Le props sono un oggetto passato come argomento alla funzione componente.
- In React non si modifica mai direttamente le props; ogni modifica deve avvenire nel componente genitore o nello state.
- Le props permettono a un componente di essere riutilizzabile con contenuti o comportamenti diversi.
- Si possono passare anche funzioni come props per comunicazioni e callback.
- Le props creano una comunicazione unidirezionale dall’alto verso il basso (genitore -> figlio).
*/
