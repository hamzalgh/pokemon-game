let pokemonSprite = document.getElementById("pokemonSprite")

async function fetchData() {
	// const name = pokemonName.value.trim().toLowerCase();

	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
		const data = await res.json();
        console.log(data)

		pokemonSprite.src = data.sprites.front_default;
	}catch (error) {
		console.log(error);
        pokemonSprite.src = ''
	}
}
fetchData()