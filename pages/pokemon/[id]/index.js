const Pokemon = ({ facts, pokemonData }) => {
  return (
    <div>
      <p>{pokemonData.name}</p>
      <div>
        <p>Fact</p>
        <p>{facts[Math.ceil(Math.random() * facts.length)]}</p>
      </div>
      <img
        src={pokemonData.sprites.other["official-artwork"].front_default}
        alt={pokemonData.name}
      />
      <div>
        <p>Height</p>
        <p>
          {pokemonData.height * 10} cm /{" "}
          {(pokemonData.height / 3.048).toFixed(2)} ft
        </p>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const factsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  )
    .then((res) => res.json())
    .then((res) => res.flavor_text_entries);
  const pokemonData = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  ).then((res) => res.json());

  let facts = [];
  factsResponse.map((fact) => {
    if (fact.language.name == "en") facts.push(fact.flavor_text);
  });
  facts = [...new Set(facts)];

  return {
    props: {
      facts,
      pokemonData,
    },
  };
};

export const getStaticPaths = async () => {
  const ids = [...Array(1119).keys()];
  ids.pop(0);
  const paths = ids.map((val) => ({ params: { id: val.toString() } }));
  return {
    paths,
    fallback: true,
  };
};

export default Pokemon;
