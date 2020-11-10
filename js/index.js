
const wrapperList = document.querySelector("#wrapperList");
      wrapperInfo = document.querySelector("#wrapperInfo"),
      pokename = document.querySelector("#pokeName"),
      pokeHeight = document.querySelector("#height"),
      pokeWeight = document.querySelector("#weight"),
      experiencePoints = document.querySelector("#base_experience"),
      imagenFront = document.querySelector("#imgFront"),
      imagenBack = document.querySelector("#imgBack");

const SearchPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
    const data = await response.json();
    const  {results} = data;
    // console.log(results);

    results.forEach((pokemon) => {
        const namePokemon = pokemon.name;
        const newButton = document.createElement("button");
        newButton.classList.add("cardPokemon")
        newButton.innerText = namePokemon;
        newButton.dataset.id = namePokemon;
        newButton.addEventListener("click",  (event)=>{
         BusquedaPoke(event)
        })
        wrapperList.append(newButton);
    });
};

const BusquedaPoke =  async (event) => {
    const idPoke = event.target.dataset.id;
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${idPoke}/`);
    const data = await response.json();
    const {name, height, weight,base_experience,sprites} = data;
    const {back_default,front_default} = sprites;
    const imgBack = back_default;
    const imgFront = front_default;
    pokename.innerText = `"${name}"`
    pokeHeight.innerText = `${height/10} mtrs`
    pokeWeight.innerText = `${weight/100} Kgs`;
    experiencePoints.innerText = `${base_experience} points`;
    imagenFront.src = imgFront;
    imagenBack.src = imgBack;
};

SearchPokemon();