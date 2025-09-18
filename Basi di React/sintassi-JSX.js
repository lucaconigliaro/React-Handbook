// JSX è una sintassi che permette di scrivere codice simile all’HTML all’interno di JavaScript, usato per definire la UI nei componenti React.

// Regole principali da ricordare:

// 1. Restituire un solo elemento root
// JSX deve sempre avere un unico nodo root. Se servono più elementi, si usa un contenitore come <div> o un Fragment <>
return (
  <div>
    <h1>Ciao</h1>
    <p>Benvenuto in JSX</p>
  </div>
);

// oppure con Fragment (non aggiunge nodo extra al DOM)
return (
  <>
    <h1>Ciao</h1>
    <p>Benvenuto in JSX</p>
  </>
);

// 2. Attributi HTML diventano camelCase
// Alcuni attributi HTML cambiano nome in JSX per evitare conflitti con parole chiave JS
<div className="container"> // class diventa className
  <input type="text" maxLength={10} />
</div>

// 3. Le espressioni JS si scrivono dentro {}
const nome = 'Mario';
return <h1>Ciao {nome}</h1>;

// 4. I commenti si scrivono come:
// {/* commento JSX */}

// 5. Le keyword JavaScript riservate non si usano come nomi attributi, usare alternative
// Ad esempio, invece di “for” si usa htmlFor negli elementi label

<label htmlFor="inputId">Nome</label>

{/*
// 6. Tutti gli elementi devono essere chiusi
// Anche tag auto-chiudenti (input, img, br) devono avere la barra di chiusura

<input type="text" />
<img src="image.png" />
*/}

// 7. I nomi dei componenti React devono iniziare con la lettera maiuscola
// In questo modo React distingue un componente da un elemento HTML
function MioComponente() {
  return <div>...</div>
}

// 8. JSX supporta l’uso di condizioni e cicli tramite espressioni JavaScript
// Esempio con condizione
return (
  <div>
    {isLoggedIn ? <LogoutButton /> : <LoginButton />}
  </div>
);

// Esempio con loop (map),
const arr = ['a', 'b', 'c'];
return (
  <ul>
    {arr.map(item => <li key={item}>{item}</li>)}
  </ul>
);

// NOTE IMPORTANTI:
// - JSX non è HTML: viene tradotto in chiamate React.createElement.
// - Tutto ciò che è dentro {} è valutato come JS puro.
// - Prestare attenzione a differenze sintattiche come className, htmlFor e chiusura dei tag.
// - JSX migliora la leggibilità e la manutenzione del codice React.
// - Un buon controllo degli errori JSX aiuta a prevenire bug di runtime e sintassi.
