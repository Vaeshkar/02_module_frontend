/* 1. Select the h1 element inside the .hero-content div and log it. */
const selectHeroContent = document.querySelector('.hero-content h1')
console.log(selectHeroContent);

const selectAllATags = document.querySelectorAll('.nav-list a')
console.log(selectAllATags);

const selectBtn = document.querySelector('.btn')
console.log(selectBtn);

/* 2. Modify Styles*/
// Change the header bg color
const header = document.querySelector('header')
header.style.backgroundColor = '#b56f1d'
// increase the H1 Font-size to 3rem
selectHeroContent.style.fontSize = '3rem'
// Change the text color of all 'a' elements
// The 'a' tags are inside of a NodeList, so loop true them
// NodeLists don't have .style
selectAllATags.forEach(aTag => {
    aTag.style.color = '#faf0e6'
});
// Add Content:
const newP = document.createElement('p');
newP.textContent = "Open daily from 7 AM to 9 PM.";
newP.classList.add('tagline');
newP.style.fontStyle = 'italic';

selectHeroContent.appendChild(newP);