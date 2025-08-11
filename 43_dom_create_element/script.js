// Grabbing the DOM elements
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelectorAll(".nav-item");
const navItemA = document.querySelectorAll(".nav-item a");
const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const heroContentH1 = document.querySelector(".hero-content h1");
const heroContentP = document.querySelector(".hero-content p");
const button = document.querySelector(".btn");
const footer = document.querySelector("footer");

// Changing the styles of the DOM elements
header.style.backgroundColor = "#fff";
header.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
header.style.padding = "1rem 0";

Object.assign(nav.style, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem"
});

logo.style.fontSize = "1.5rem";
logo.style.fontWeight = "bold";
logo.style.color = "#333";
logo.style.textDecoration = "none";

navList.style.display = "flex";
navList.style.listStyle = "none";

navItem.forEach(liTag => {
    liTag.style.marginLeft = "1.5rem";
})

navItemA.forEach(liTagA => {
    liTagA.style.textDecoration = "none";
    liTagA.style.color = "#333";
    liTagA.style.fontWeight = "bold";
    liTagA.style.transition = "all 0.3s ease";
})

navItemA.forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.style.color = '#999';
    });

    tag.addEventListener('mouseout', () => {
        tag.style.color = '#333'; // reset if desired
    });
})

hero.style.height = "560px";
hero.style.backgroundImage = "url(https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1)";
hero.style.backgroundRepeat = "no-repeat";
hero.style.backgroundPosition = "center 80%"; // "X Y"
hero.style.backgroundSize = "cover";
hero.style.color = "#fff";
hero.style.display = "flex";
hero.style.flexDirection = "column";
hero.style.alignItems = "center";

heroContent.style.maxWidth = "600px";
heroContent.style.height = "100%";
heroContent.style.display = "flex";
heroContent.style.flexDirection = "column";
heroContent.style.justifyContent = "space-around";
heroContent.style.alignItems = "center";
heroContent.style.texAlign = "center";

heroContentH1.style.fontSize = "2.5rem";
heroContentH1.style.marginBottom = "1rem";

heroContentP.style.fontSize = "1.2rem";
heroContentP.style.marginBottom = "2rem";
heroContentP.style.color = "#333";

button.style.backgroundColor = "#333";
button.style.color = "#fff";
button.style.padding = "0.75rem 1.5rem";
button.style.textDecoration = "none";
button.style.borderRadius = "0.3rem";
button.style.transition = "background-color 0.3s ease";

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#555';
});

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#333'; // reset to original
});

footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
footer.style.textAlign = "center";
footer.style.padding = "1rem 0";
footer.style.marginTop = "auto";
