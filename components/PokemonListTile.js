import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "../styles/PokemonListTile.module.css";

const PokemonListTile = ({ pokemon }) => {
  const [stat, setStat] = useState(0);

  useEffect(() => {
    let temp = 0;
    pokemon.stats.map((stat) => {
      temp += stat.base_stat;
    });
    setStat(temp);
  }, []);

  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <a className={styles.pokemonTile}>
        <div className={styles.pokemonLeft}>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className={styles.pokemonImage}
          />
          <p className={styles.pokemonName}>{pokemon.name}</p>
        </div>
        <div className={styles.pokemonTypes}>
          {pokemon.types.map((type) => (
            <span className={styles.pokemonType}>{type.type.name}</span>
          ))}
        </div>
        <p className={styles.pokemonBaseExp}>{stat}</p>
      </a>
    </Link>
  );
};

export default PokemonListTile;
