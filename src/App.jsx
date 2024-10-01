// App.jsx
import React from 'react'; // Pastikan Anda mengimpor React
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PokemonList from "./components/PokemonList/PokemonList";
// Impor komponen lain jika diperlukan

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PokemonList} />
        {/* Tambahkan rute lainnya di sini jika ada */}
      </Switch>
    </Router>
  );
}

export default App;
