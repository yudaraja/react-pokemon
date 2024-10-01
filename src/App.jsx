// App.jsx
import React from 'react'; // Pastikan Anda mengimpor React jika menggunakan JSX
import PokemonList from "./components/PokemonList/PokemonList"; // Pastikan jalur impor benar

function App() {
  return (
    <PokemonList /> // Tidak perlu menggunakan fragment di sini
  );
}

export default App;
