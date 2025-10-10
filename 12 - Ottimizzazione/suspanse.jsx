import React, { Suspense, lazy } from "react";

/*
Suspense è un componente React che aiuta a gestire casi di caricamento asincrono in modo dichiarativo.
Si usa principalmente con il code-splitting tramite React.lazy per caricare moduli o componenti in modo dinamico,
mostrando un fallback (es. spinner o messaggio) finché il componente non è pronto.

Con React 18, Suspense si sta espandendo anche al data fetching e ad altri scenari asincroni,
consentendo UI più fluide e gestite in modo semplice, senza dover scrivere logica complessa di caricamento in ogni componente.
*/

// Import lazy di un componente per code-splitting
const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
  return (
    <div>
      <h1>React Suspense Demo</h1>

      {/* Suspense mostra fallback mentre LazyComponent è in caricamento */}
      <Suspense fallback={<div>Caricamento...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;

/*
NOTE IMPORTANTI
- Suspense accetta una prop fallback che può essere un qualsiasi JSX visibile durante il caricamento.
- Suspense funziona sospendendo il rendering del componente figlio finché la promise associata non si risolve.
- Utile per code-splitting, migliorando i tempi di caricamento iniziale e riducendo bundle size.
- Con React 18, Suspense si sta integrando con data fetching asincrono per semplificare la gestione dello stato di caricamento.
- Usare più boundary di Suspense permette di mostrare caricamenti localizzati e precisi per ogni parte della UI.
- Aiuta a migliorare notevolmente l’esperienza utente con interfacce più reattive e modulari.
*/
