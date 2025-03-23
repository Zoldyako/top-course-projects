const food1 = document.createElement('p');
const food2 = document.createElement('p');
const foodImg1 = document.createElement('img');
const foodImg2 = document.createElement('img');


food1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt necessitatibus saepe reprehenderit aliquam optio corrupti velit, similique repudiandae quo voluptate voluptatibus! Atque quae expedita cupiditate eaque suscipit cumque iure architecto?"

foodImg1.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";
foodImg1.style.width = "450px";

food2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt necessitatibus saepe reprehenderit aliquam optio corrupti velit, similique repudiandae quo voluptate voluptatibus!";

foodImg2.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";
foodImg2.style.width = "450px";

export { food1, food2, foodImg1, foodImg2 };