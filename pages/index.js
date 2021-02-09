import Search from "../components/Search";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.css";

export default function Home({ result }) {
  return (
    <Layout>
      <div className={styles.counts}>
        <p>
          Found <span>{result.results.length}</span> pokemons!
        </p>
      </div>
      <Search placeholder="Filter by name" />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1118");
  const result = await res.json();

  return {
    props: {
      result,
    },
  };
};
