const searchPokemon = () => {
    // Obtenemos el valor del input 
    let input = document.getElementById('pokemon_input').value;

    //Pedimos los datos del pokemon a la api
    async function pokemon() {
        try {
            // Mostramos la tarjeta del pokemon
            let card = document.getElementById('card');
            card.style.display = 'block';
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
            const data = await response.json();
            console.log(data);
            // Mostramos el nombre del pokemon en el html
            let pokemonName = document.getElementById('pokemon_name');
            pokemonName.innerHTML = data.name; 
            // Mostramos la imagen del pokemon en el html
            let pokemonImage = document.getElementById('pokemon_image');
            pokemonImage.src = data.sprites.front_default;
            //Mostramos el tipo del pokemon en el html
            let pokemonType = document.getElementById('pokemon_type');
            pokemonType.innerHTML = data.types[0].type.name;
            //Mostramos la habilidad del pokemon en el html
            let pokemonAbility = document.getElementById('pokemon_ability');
            pokemonAbility.innerHTML = data.abilities[0].ability.name;
            //Mostramos el poder del pokemon
            let pokemonPower = document.getElementById('pokemon_power');
            pokemonPower.innerHTML = data.stats[0].base_stat;
        }
        catch (error) {
            console.error('Error:', error);
            alert('Pokemon not found!');
            let card = document.getElementById('card');
            card.style.display = 'none';
        }
    }
    pokemon();
}






