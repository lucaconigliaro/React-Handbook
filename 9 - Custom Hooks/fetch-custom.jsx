import useFetch from "./useFetch";
const url = "https://jsonplaceholder.typicode.com/users";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

/*
Questo componente React mostra un uso avanzato di un custom hook chiamato `useFetch`
che semplifica la gestione di fetch asincroni di dati da API esterne.
useFetch incapsula la logica di fetch, stato dati, e loading in un solo hook riutilizzabile,
facilitando la scrittura di componenti puliti e mantenibili senza duplicare codice.

Il componente FetchComponents esegue due fetch separati:
- recupera e mostra la lista utenti dall’endpoint users,
- recupera e mostra la lista di post dall’endpoint posts tramite un componente figlio.
Questo dimostra composizione di componenti e riuso di hook.
*/

const FetchComponents = () => {
  // Recupero dati utenti e stato caricamento con custom hook
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

const Post = () => {
  // Recupero dati post e stato caricamento
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
- Il custom hook useFetch astrae la logica comune di fetch e gestione stato dati/loading.
- Il componente principale FetchComponents usa useFetch per utenti e compone il componente Post usando lo stesso hook per post.
- Lo stato isLoading permette di gestire in modo chiaro il rendering condizionale tra caricamento e dati.
- Ogni dato mappato in JSX deve avere una chiave univoca ('key') per performance.
- Questo pattern migliora riusabilità, leggibilità e separazione delle responsabilità in React.
- Il custom hook può essere facilmente esteso con gestione errori o refresh automatici.
*/
