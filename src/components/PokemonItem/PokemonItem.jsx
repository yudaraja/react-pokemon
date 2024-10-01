import "./PokemonItem.css";
import { colours } from "../../data/colours";

function PokemonItem({ pokemon }) {
    return (
        <div
            className="pokemon-card"
            style={{
                // Pastikan warna default jika `pokemon.color` tidak ada
                backgroundColor: pokemon.color || "lightgrey",
            }}
        >
            <img src={pokemon.imageUrl} alt={pokemon.name} width={250} />
            <h1>{pokemon.name}</h1>

            {pokemon.types && pokemon.types.length > 0 && (
                <div className="types-container">
                    {pokemon.types.map((item, index) => (
                        <span
                            key={index}
                            className="type-badge"
                            style={{
                                // Mengakses warna dari `colours` untuk setiap tipe
                                backgroundColor: colours[item.toLowerCase()] || "grey",
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            )}

            <p className="description">{pokemon.description}</p>
        </div>
    );
}

export default PokemonItem;
