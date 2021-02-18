import styles from "../styles/PokemonList.module.css";
import PokemonListTile from "./PokemonListTile";

const PokemonList = ({ pokemons }) => {
  return (
    <div className={styles.pokemonList}>
      {pokemons.map((pokemon) => (
        <PokemonListTile pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
