Promise.all(
  Array.from({ length: 150 }, (_, i) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then((res) => res.json())
  )
).then((pokemonList) => {
  const container = document.querySelector("#pokemon-container");
  pokemonList.forEach(pokemon => {
    const card = document.createElement('div');
    const title = document.createElement('p');
    const image = document.createElement('img');
    const button = document.createElement('button');
    // Card Details
    const details = document.createElement('div');
    details.style.display = 'none';

    card.classList.add('border-2', 'p-2', 'text-center', 'rounded-md', 'bg-[#3761a8]');
    title.classList.add('font-bold', 'text-2xl', 'pb-2', 'text-white')
    image.classList.add('mx-auto');
    button.classList.add('border-2', 'border-black','rounded-md', 'px-4', 'py-2', 'cursor-pointer', 'bg-[#feca1c]', 'text-black');
    details.classList.add('text-white');

    
    title.innerText = pokemon.name;
    image.src = pokemon.sprites.front_default;
    image.alt = pokemon.name;
    button.innerText = 'view more';


    pokemon.types.forEach((type) => {
      const t = document.createElement('p');
      t.innerText = type.type.name;
      details.appendChild(t);
    });

    button.addEventListener('click', () => {
      if (details.style.display === 'none') {
        details.style.display = 'block';
        button.innerText = 'hide details';
      } else {
        details.style.display = 'none';
        button.innerText = 'view more';
      }
    });

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(button);
    card.appendChild(details);

    container.appendChild(card);
  });
})
.catch((err) => console.log(err));
