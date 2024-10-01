import { useState } from "react"; // Pastikan Anda mengimpor useState
import pokemonJSON from "../../data/pokemon.json";
import "./PokemonList.css";
import PokemonItem from "../PokemonItem/PokemonItem"; // Perbaiki jalur impor

function PokemonList() {
    const [pokemons] = useState(pokemonJSON);
    const [filterPokemons, setFilterPokemons] = useState(pokemons); // Gunakan pokemons

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase(); // Menyimpan nilai pencarian
        let search = pokemons.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm); // Pencarian dengan lowercase
        });

        setFilterPokemons(search);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="cari pokemon..."
                className="search"
                onChange={handleSearch}
            />
            <div className="list-pokemon">
                {filterPokemons.length === 0 ? ( // Gunakan === untuk perbandingan
                    <div>data tidak ditemukan</div>
                ) : (
                    filterPokemons.map((item) => (
                        <PokemonItem
                            key={item.id}
                            pokemon={item}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default PokemonList;
