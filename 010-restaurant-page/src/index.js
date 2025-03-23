import { restaurantName, restaurantImg, h2, p } from './home.js';
import { food1, food2, foodImg1, foodImg2 } from './menu.js';
import "./styles.css";


const content = document.querySelector('#content');
const homeBTN = document.querySelector('nav button:first-child');
const menuBTN = document.querySelector('nav button:last-child');



homeBTN.addEventListener('click', () => {
    content.innerHTML = '';
    content.append(restaurantName, restaurantImg, h2, p);
});


menuBTN.addEventListener('click', () => {
    content.innerHTML = '';
    content.append(food1, foodImg1, food2, foodImg2);
});


content.append(restaurantName, restaurantImg, h2, p);