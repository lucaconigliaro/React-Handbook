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
