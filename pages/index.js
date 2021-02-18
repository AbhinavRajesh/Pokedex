import Search from "../components/Search";
import Layout from "../components/Layout";
import PokemonList from "../components/PokemonList";
import styles from "../styles/Home.module.css";

export default function Home({ result, pokemonData }) {
  return (
    <Layout>
      <div className={styles.counts}>
        <p>
          Found <span>{result.results.length}</span> pokemons!
        </p>
      </div>
      <Search placeholder="Filter by name" />
      <PokemonList pokemons={pokemonData} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const result = await res.json();
  const response = await result.results.map((pokemon) => {
    const result = fetch(pokemon.url).then((res) => res.json());
    return result;
  });
  const pokemonData = await Promise.all(response);
  return {
    props: {
      result,
      pokemonData,
    },
  };
};
