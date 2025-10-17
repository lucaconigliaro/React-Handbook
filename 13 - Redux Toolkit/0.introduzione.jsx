/*
Redux Toolkit (RTK) è la libreria ufficiale consigliata per gestire lo stato globale in React e JavaScript moderno.
RTK semplifica drasticamente la configurazione dello store, la scrittura dei reducer e l'integrazione con middleware,
abbattendo il boilerplate tipico di Redux classico e migliorando UX e produttività.

I concetti base:
- createSlice: permette di creare slice di stato con azioni e reducer in un solo blocco.
- configureStore: crea lo store Redux con middleware predefiniti, DevTools integrato e supporto allo sviluppo ASINCRONO.
- useSelector e useDispatch da react-redux collegano i componenti allo store Redux.
 */

// FILE 1: src/store/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },   // Immer semplifica la mutazione immutabile
    decrement: (state) => { state.count -= 1; },
    reset: (state) => { state.count = 0; }
  }
});

// Export delle azioni generate automaticamente
export const { increment, decrement, reset } = counterSlice.actions;

// Export del reducer
// export default counterSlice.reducer;

// FILE 2: src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer  // Puoi aggiungere qui altri slice reducer
  }
});

// FILE 3: src/components/Counter.js
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count); // Seleziona count dallo store
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

// export default Counter;

// FILE 4: src/App.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./components/Counter";

function App() {
  // Provider rende disponibile lo store Redux a tutta l'app React
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;

/*
NOTE IMPORTANTI
- Redux Toolkit è lo standard attuale e futuro per Redux, sostituendo createStore e boilerplate manuale
- createSlice combina creazione di azioni e reducer in modo conciso usando Immer per immutabilità semplice
- configureStore abilita middleware come thunk per azioni asincrone e integra Redux DevTools senza configurazioni extra
- useSelector e useDispatch collegano React allo store Redux in modo idiomatico e semplice
- La gestione dello stato diventa modulare, facile da testare e mantenere
- È possibile aggiungere facilmente altri slice di stato nel configureStore
- Per applicazioni complesse Redux Toolkit riduce complessità e aumenta produttività

Questa configurazione è quella più aggiornata e consigliata per qualsiasi progetto React con Redux nel 2025.
*/
