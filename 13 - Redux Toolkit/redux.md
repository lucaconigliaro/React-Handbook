Redux è un pattern architetturale e una libreria che serve a gestire lo stato globale delle applicazioni JavaScript in modo predicibile,
centralizzato e strutturato. La sfida principale che Redux affronta è la gestione dello stato condiviso tra molti componenti,
specialmente in applicazioni complesse dove lo stato si modifica da diverse parti e deve essere sincronizzato.

Per capire meglio il concetto di Redux, pensiamo a questo flusso dei dati:

1. **Store**: è il "cuore" di Redux, dove risiede lo stato globale immutabile dell'applicazione. Questo stato è una "singola fonte di verità".
2. **State**: lo stato contenuto nello store è sempre immodificabile direttamente, garantendo prevedibilità e controllo.
3. **Action**: per modificare lo stato bisogna inviare azioni (actions), cioè semplici oggetti che descrivono cosa è successo, con almeno una proprietà 'type'.
4. **Reducer**: è una funzione pura che riceve lo stato attuale e l’azione, e calcola e restituisce il nuovo stato senza modificarlo direttamente.
5. **Dispatch**: è la funzione che invia l’azione al reducer tramite lo store.
6. **Subscribe**: i componenti si iscrivono alle modifiche dello store per aggiornarsi quando lo stato cambia.

---

ESPERIENZA UTENTE CON REDUX IN REACT

In React, il flusso tipico è:

- Componenti React usano `useSelector` per leggere porzioni di stato dallo store globale.
- Quando un utente interagisce, il componente chiama `useDispatch` per dispatchare un'azione (es. { type: "increment" }).
- Redux riceve l’azione, la passa al reducer che produce un nuovo stato.
- Lo store aggiorna il suo stato e notifica i componenti iscritti tramite subscription.
- I componenti React si ri-renderizzano in base al nuovo stato, aggiornando UI e dati.

---

VANTAGGI PRINCIPALI DI REDUX

- **Centralizzazione dello stato:** Mantiene un unico store, semplificando il tracciamento dello stato.
- **Stato immutabile:** Evita modifiche accidentali, rendendo i cambiamenti più prevedibili e debug più facile.
- **Flusso unidirezionale:** Riduce complessità e confusione sullo stato, seguendo una direzione chiara di dati.
- **Debug e strumenti:** Redux DevTools fornisce time-travel debugging, inspecting di azioni e stato.
- **Modularità:** Usando slice o reducer multipli, lo stato è diviso in moduli facilmente mantenibili.
- **Gestione asincrona:** Middleware come thunk o saga integrano logica asincrona senza complicare i componenti.

---

RIASSUNTO DEL CONCETTO

Redux è come un centralino intelligente per la gestione dello stato:
tutti i dati appaiono in un unico posto, e per cambiarli si deve passare per un processo standardizzato (azioni e reducer),
che assicura modifiche controllate, tracciabili e facilmente gestibili.
Questo rende l’applicazione scalabile, con meno bug e più facile da mantenere nel tempo.
