import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
  NavLink
} from "react-router-dom";
/*
React Router è la libreria standard per la gestione del routing nelle applicazioni React a pagina singola (SPA).
Permette di definire percorsi URL e associare componenti React specifici per ognuno,
gestendo la navigazione interna senza ricaricare la pagina.

Componenti base e concetti chiave:

1. BrowserRouter
- Introduce il contesto di routing usando la history API del browser,
- Deve avvolgere tutta l'app per abilitare la gestione dei percorsi.

2. Routes e Route
- Routes raggruppa le definizioni di percorso.
- Ogni Route specifica un "path" e il componente ("element") da renderizzare all'URL corrispondente.

3. Link e NavLink
- Link sostituisce l'anchor tag <a> per navigare senza refresh.
- NavLink permette di applicare stili attivi al percorso corrente.

4. Error Page / Catch-all Route
- Route con path="*" cattura URL non definiti,
- utile per mostrare una pagina 404 personalizzata.

5. Template e Nested Routes con Outlet
- Si può definire un layout comune (template) per più routes con Outlet,
- Outlet è il punto di rendering per i sotto-componenti figli.

6. useParams
- Hook per accedere ai parametri dinamici presenti nell'URL (es: /users/:id).

7. useNavigate
- Hook per effettuare navigazioni programmatiche (es: dopo submit, redirect).
*/

// Layout comune con nav e Outlet per nested routes
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/users" activeclassname="active">Users</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      {/* Punto di inserimento delle route figlie */}
      <Outlet />
    </div>
  );
}

// Pagine semplici
function Home() {
  return <h1>Homepage</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

// Lista utenti con link a dettagli user dinamico
function Users() {
  const users = [
    { id: 1, name: "Luca" },
    { id: 2, name: "Maria" }
  ];
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Pagina dettaglio user con param id URL
function UserDetails() {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Detail for ID: {params.id}</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

// Pagina 404 per percorsi non gestiti
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

// App con routing nested
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Route figlie */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
          {/* Route catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/*
NOTE IMPORTANTI
- BrowserRouter deve avvolgere l’intera applicazione per fornire contesto routing.
- Routes e Route definiscono i percorsi e componenti da mostrare.
- Outlet viene usato per nesting: renderizza i componenti figli nella route genitore.
- useParams legge i parametri dinamici dell’URL.
- useNavigate permette navigazioni programmatiche (indietro, avanti, redirection).
- Link e NavLink (con activeclassname) permettono navigare senza ricaricare pagina,
  migliorando UX e statefulness della app.
- "*" definisce una route catch-all per mostrare una pagina 404 personalizzata.
- Le rotte nidificate permettono strutturare il layour e UI in modo modulare.
*/