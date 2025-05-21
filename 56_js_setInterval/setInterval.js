/* function greet() {
  console.log('Hello, World!');
}

const intervalID = setInterval(greet, 1000); // Executes the greet function every 1 second

setTimeout(
  () =>
    // To cancel the interval
    clearInterval(intervalID),
  10000,
); // a timeout to remove the interval after 10 seconds!

 */
/* Clock time update */

/* function updateClock() {
  let now = new Date();
  console.log(now.toLocaleTimeString());
}
 
setInterval(updateClock, 1000); // Updates the clock every second
 */

/* 
    Instructions:
    Create a variable counter and set it to 1.
    DVL: let variable name = 0
    Use setInterval to schedule a fetch request to the Pokémon API every second.
    DVL: Reuse the exercise code
    The fetch request URL should be https://pokeapi.co/api/v2/pokemon/ followed by the current value of counter.
    DVL: link plus counter... how to.

    Fetch the data and extract the Pokémon’s name and ID.
    DVL: Look at the fetch exercise. 
    Output an object with the Pokémon’s name and ID to the console.
    DVL: console.log()
    Increment the counter after each fetch request.
    DVL: counter ++;
    Stop the interval after 150 requests. We only want the OG Pokémon! 😀
    DVL: Set a limit
*/

let counter = 1
const limit = 150;

const intervalId = setInterval(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    .then(response => response.json())
    .then(data => {
        const pokemon = {
            name: data.name,
            id: data.id
        };
        console.log(pokemon);
    })
    .catch(error => {
        console.error(`Failed to fetch Pokemon #${counter}:`, error);
    })

    // console.log(`Counter: ${counter}`);
    counter ++;

    if (counter > limit) {
        clearInterval(intervalId);
        console.log('Limit reached: 150, Done!');
        return;
    }
}, 1000);

