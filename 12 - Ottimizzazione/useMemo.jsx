import { useState, useMemo } from "react";

/*
useMemo è un hook di React che ottimizza le prestazioni memorando (cache) il risultato di una funzione costosa tra i render.
Il memo evita che la funzione venga rieseguita inutilmente se le sue dipendenze non cambiano.
Questo è particolarmente utile per funzioni computazionalmente pesanti o per evitare ricampionamenti inutili di dati derivati.

L'idea chiave è che useMemo accetta una funzione e un array di dipendenze:
- Esegue la funzione al primo render e memorizza il risultato.
- Ad ogni render successivo, se le dipendenze non sono cambiate,
  React restituisce il valore memorizzato senza rieseguire la funzione.
*/

// Funzione simulata di calcolo pesante (esempio)
function computePrimeNumbers(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(100);

  // useMemo memorizza il risultato della funzione costosa solo se "limit" cambia
  const primeNumbers = useMemo(() => computePrimeNumbers(limit), [limit]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementa Count</button>

      <hr />

      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />

      <h4>Prime numbers up to {limit}:</h4>
      <p>{primeNumbers.join(", ")}</p>
    </div>
  );
};

export default UseMemoExample;

/*
NOTE IMPORTANTI
- useMemo previene il ricalcolo di valori derivati pesanti quando i dati di input non cambiano.
- Il primo argomento di useMemo è una funzione che ritorna il valore da memorizzare.
- Il secondo argomento è un array di dipendenze che determina quando rieseguire la funzione.
- useMemo può migliorare nettamente le prestazioni in componenti complessi o liste grandi.
- Va usato con attenzione: non memoizzare tutto, ma solo calcoli costosi o risultati che cambiano raramente.
- Per memorizzare funzioni stesse (e non il loro valore) si usa useCallback, strettamente correlato a useMemo.
*/
