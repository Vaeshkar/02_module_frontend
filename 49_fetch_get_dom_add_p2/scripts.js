fetch('https://pokeapi.co/api/v2/pokemon?limit=25&offset=0')
    .then((res) => res.json())
    .then((data) => {
        data.results.forEach(pokemon => {
            const id = pokemon.url.split('/')[pokemon.url.split('/').length - 2];

            const container = document.querySelector("#pokemon-container");

            const card = document.createElement('div');
            const title = document.createElement('p');
            const image = document.createElement('img');
            const button = document.createElement('button');

            card.classList.add('border-2', 'p-2', 'text-center', 'rounded-md', 'bg-[#feca1c]')
            image.classList.add('mx-auto');
            button.classList.add('border-2', 'border-black','rounded-md', 'px-4', 'py-2', 'cursor-pointed', 'bg-[#3761a8]', 'text-white');


            title.innerText = pokemon.name;
            image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
            image.alt = pokemon.name;
            button.innerText = 'view more';

            // Add details element and visibility flag per card
            const details = document.createElement('div');
            let detailsVisible = false;

            button.addEventListener('click', (e) => {
                if (!detailsVisible) {
                    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                        .then((res) => res.json())
                        .then((data) => {
                            details.innerHTML = ''; // Clear previous content
                            data.types.forEach((type) => {
                                const t = document.createElement('p');
                                t.innerText = type.type.name;
                                details.appendChild(t);
                            });
                            card.appendChild(details);
                            detailsVisible = true;
                            button.innerText = 'hide details';
                        })
                        .catch((err) => { console.log(err); });
                } else {
                    if (card.contains(details)) {
                        card.removeChild(details);
                    }
                    detailsVisible = false;
                    button.innerText = 'view more';
                }
            });

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(button);

            container.appendChild(card);
        });
    })
    .catch((err) => console.log(err));
