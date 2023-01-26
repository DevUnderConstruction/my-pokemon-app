import { useState, useEffect } from "react";
export default function ShoppingItem() {
  const [pokemonItem, setPokemonItem] = useState();
  useEffect(() => {
    async function fetchPokemonItems() {
      const response = await fetch("https://pokeapi.co/api/v2/item/");
      const data = await response.json();
      setPokemonItem(data.results);
      //console.log(data.results);
    }
    fetchPokemonItems();
  }, []);
  console.log(pokemonItem);

  return (
    <section>
      <h2>hallo</h2>
      <p>letzter Preis:</p>
      <image />
    </section>
  );
}
