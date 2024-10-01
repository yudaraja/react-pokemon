// App.jsx
import React from 'react'; // Pastikan Anda mengimpor React jika menggunakan JSX
import PokemonList from "./components/PokemonList/PokemonList"; // Pastikan jalur impor benar
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <PokemonList />
    </Router>
  );
}

export default App;
