import styles from "../../../styles/Pokemon.module.css";
import Loading from "../../../components/Loading";

const Pokemon = ({ facts, pokemonData, extraResponse }) => {
  if (pokemonData === undefined) {
    return <Loading />;
  }
  return (
    <div className={styles.pokemonCard}>
      <div className={styles.pokemonCardLeft}>
        <p className={styles.pokemonName}>{pokemonData.name}</p>
        <div className={styles.pokemonTypes}>
          {pokemonData.types.map((type) => (
            <>
              {type.type.name === "normal" ? (
                <div className={styles.normal}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "fire" ? (
                <div className={styles.fire}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "water" ? (
                <div className={styles.water}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "electric" ? (
                <div className={styles.electric}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "grass" ? (
                <div className={styles.grass}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "ice" ? (
                <div className={styles.ice}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "fighting" ? (
                <div className={styles.fighting}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "poison" ? (
                <div className={styles.poison}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "ground" ? (
                <div className={styles.ground}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "flying" ? (
                <div className={styles.flying}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "psychic" ? (
                <div className={styles.psychic}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "bug" ? (
                <div className={styles.bug}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "rock" ? (
                <div className={styles.rock}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "ghost" ? (
                <div className={styles.ghost}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "dragon" ? (
                <div className={styles.dragon}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "dark" ? (
                <div className={styles.dark}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "steel" ? (
                <div className={styles.steel}>{type.type.name}</div>
              ) : (
                ""
              )}
              {type.type.name === "fairy" ? (
                <div className={styles.fairy}>{type.type.name}</div>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
        <img
          src={pokemonData.sprites.other["official-artwork"].front_default}
          alt={pokemonData.name}
          className={styles.pokemonImage}
        />
      </div>
      <div className={styles.pokemonCardRight}>
        {facts && (
          <div className={styles.pokemonFacts}>
            <h4>Fact</h4>
            <p>{facts[Math.ceil(Math.random() * facts.length)]}</p>
          </div>
        )}
        <div className={styles.inline}>
          <div className={styles.pokemonHeight}>
            <h4>Height</h4>
            <p>
              {pokemonData.height * 10} cm /{" "}
              {(pokemonData.height / 3.048).toFixed(2)} ft
            </p>
          </div>
          <div className={styles.pokemonWeight}>
            <h4>Weight</h4>
            <p>
              {(pokemonData.weight / 4.536).toFixed(2)} lbs /{" "}
              {(pokemonData.weight / 63.503).toFixed(2)} st.
            </p>
          </div>
        </div>
        <div className={styles.inline}>
          <div className={styles.pokemonLegendary}>
            <h4>Legendary</h4>
            <p>{extraResponse.is_legendary ? "Yes" : "No"}</p>
          </div>
          <div className={styles.pokemonMythical}>
            <h4>Mythical</h4>
            <p>{extraResponse.is_mythical ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const extraResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  ).then((res) => res.json());
  const pokemonData = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  ).then((res) => res.json());

  let facts = [];
  extraResponse.flavor_text_entries.map((fact) => {
    if (fact.language.name == "en") facts.push(fact.flavor_text);
  });
  return {
    props: {
      extraResponse,
      facts,
      pokemonData,
    },
  };
};

export const getStaticPaths = async () => {
  const ids = [...Array(899).keys()];
  ids.pop(0);
  const paths = ids.map((val) => ({ params: { id: val.toString() } }));
  return {
    paths,
    fallback: true,
  };
};

export default Pokemon;
