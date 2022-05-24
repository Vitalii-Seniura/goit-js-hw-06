const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('ul');



const elements = ingredients.map(el => {
  const ingredient = document.createElement('li');
  ingredient.textContent = el;
  ingredient.classList.add('item');
  
  return ingredient;
});



ul.append(...elements);

