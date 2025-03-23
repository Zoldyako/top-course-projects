const restaurantName = document.createElement('h1');
const restaurantImg = document.createElement('img');
const h2 = document.createElement('h2');
const p = document.createElement('p');



restaurantName.innerText = 'Restaurant Brown Fox';
restaurantImg.src = 'https://jocyls.com/wp-content/uploads/2023/04/filipino-food-1024x683.png';
restaurantImg.style.width = "450px";

h2.innerText = 'The quick brown fox jumps over the lazy dog';
p.innerText  = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt necessitatibus saepe reprehenderit aliquam optio corrupti velit, similique repudiandae quo voluptate voluptatibus! Atque quae expedita cupiditate eaque suscipit cumque iure architecto?';

export { restaurantName, restaurantImg, h2, p }