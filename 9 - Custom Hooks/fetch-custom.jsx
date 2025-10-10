import useFetch from "./useFetch";

const url = "https://jsonplaceholder.typicode.com/users";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

/*
Questo componente utilizza un custom hook chiamato useFetch che semplifica il recupero asincrono dei dati.
useFetch mantiene internamente lo stato di caricamento (isLoading) e i dati ricevuti (data),
ed espone questi dati al componente che lo usa.
L'obiettivo è evitare duplicazioni di codice per fetch API e aggiornamento dello stato, favorendo riusabilità e chiarezza.

Il componente FetchComponents mostra una lista di utenti caricati dall’API,
e include un componente Post che carica e mostra i post da un altro endpoint separato, dimostrando composizione e riutilizzo di useFetch.
*/

// Componente che mostra lista utenti
const FetchComponents = () => {
  // uso custom hook per recuperare dati utenti
  const { data, isLoading } = useFetch(url);

  return (
    <div>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <div>
          {data.map((el) => {
            const { id, name, phone } = el;
            return (
              <div key={id}>
                <h3>{name}</h3>
                <h5>{phone}</h5>
              </div>
            );
          })}
          <Post />
        </div>
      )}
    </div>
  );
};

// Componente che mostra lista post
const Post = () => {
  // uso stesso custom hook per recuperare i post
  const { data, isLoading } = useFetch(postUrl);

  return (
    <div>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <div>
          {data.map((el) => {
            const { id, title, body } = el;
            return (
              <div key={id}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FetchComponents;

/*
NOTE IMPORTANTI
- Custom hook useFetch astrae la logica asincrona ricorrente, migliorando riusabilità.
- Componente parent usa useFetch per utenti, child Post usa stesso hook per post, dimostrando composizione.
- Lo stato isLoading permette di mostrare placeholder prima del caricamento effettivo.
- Mappare l’array di dati in JSX richiede la chiave univoca key={id} per performance.
- Questo pattern è uno standard avanzato per fetch API in React.
*/