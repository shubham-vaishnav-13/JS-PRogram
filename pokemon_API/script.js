// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(respo =>{
//         if(!respo.ok){
//             throw new Error("Could Not Found !");
//         }
//         return respo.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));



async function fetchPokemon() {
    try{
        const pokemonName = document.getElementById("PokemonName").value.toLowerCase();
        const respo = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!respo.ok){
            throw new Error("Could Not Found !");
        }
        const data = await respo.json();

        const pokeSprite = data.sprites.front_default;
        const imgEle = document.getElementById("pokemonSprite");
        imgEle.src = pokeSprite;
        imgEle.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}